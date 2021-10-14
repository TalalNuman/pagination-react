import React, { Component } from 'react'

export default class NewsItem extends Component {
    
    render() {
        let {title,description, imgUrl,newsUrl} =this.props;
        return (
            <div>
          <div className="container items-center lg:px-10">
            <div className="p-6 mx-auto bg-white border  rounded-lg shadow-xl w-full ">
              <div className="flex flex-col items-start  py-2 rounded-lg ">
                <div className="flex items-center  justify-start w-full">
                  <img  src={imgUrl} alt="placeholder" className="rounded-lg md:h-60 sm:w-full"/>
                </div>
                <div className="flex flex-col w-full text-blueGray-500 ">
                  <h2 className="mt-4 mb-8 text-xl font-semibold tracking-wider text-black uppercase"> {title}...</h2>
                  <p className="mb-3 text-base leading-relaxed text-blueGray-500">{description}...</p>
                  <a href={newsUrl} className="text-center text-indigo-400 font-bold rounded py-2  focus:outline-none bg-gray-900 border-2 border-indigo-400">Read more</a>
                </div>
              </div>
            </div>
          </div>

           
        
            </div>
        )
    }
}
