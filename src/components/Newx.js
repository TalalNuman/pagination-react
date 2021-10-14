import React, { Component } from "react";
// import Nav from './Nav.jsx'
import Item from "./NewsItem";
import Pagination from "./Pagination";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/articles",
});

export default class Newx extends Component {
  getData = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      this.setState({ articles: data });
    } catch (err) {
      console.log(err);
    }
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      currentPage: 1,
      articlesPerPage: 2,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getData();
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  componentDidMount() {}

  render() {
    const { articles, currentPage, articlesPerPage } = this.state;

    //Displaying Pages
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    );

    const renderArticles = currentArticles.map((article) => {
      return (
        <div key={article.url}>
          <Item
            title={article.title ? article.title.slice(0, 35) : "Title Missing"}
            description={
              article.description
                ? article.description.slice(0, 85)
                : "Missing Description"
            }
            imgUrl={article.urlToImage}
            newsUrl={article.url}
          />
        </div>
      );
    });

    return (
      <div className="bg-gray-200 py-5 ">
        <h1 className="text-center text-2xl font-medium"> Top Headlines</h1>
        <div className="container mx-auto grid md:grid-cols-2 gap-2 mt-10 ">
          {renderArticles}
        </div>

        <Pagination
          articlePerPage={articlesPerPage}
          articles={articles}
          clickBtn={this.handleClick}
        />
      </div>
    );
  }
}
