import React, { Component } from "react";

export default class paginationNum extends Component {
    
  
  render() {
    const pageNumbers = [];
    let { articlePerPage, articles, clickBtn } = this.props;

    for (let i = 1; i <= Math.ceil(articles.length / articlePerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <div key={number}>
          <button
            id={number}
            onClick={clickBtn}
            className=" flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md  hover:bg-indigo-600 0 hover:text-white focus:bg-red-400"
          >
            {number}
          </button>
        </div>
      );
    });
    return (
      <div className="flex justify-center mt-4  ">
        {/* <button
          onClick={clickBtn}
          className=" flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md  hover:bg-indigo-600 0 hover:text-white focus:bg-red-400"
        >
          Start
        </button> */}
        {renderPageNumbers}
        {/* <button
        id={this.number}
          onClick={clickBtn}
          className=" flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md  hover:bg-indigo-600 0 hover:text-white focus:bg-red-400"
        >
          Last
        </button> */}
      </div>
    );
  }
}
