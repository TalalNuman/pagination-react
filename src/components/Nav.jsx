import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div className="border-b-2">
                <div className="container mx-auto  items-center">
            <div className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white  ">
              <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
                <a href="//" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                  <div className="inline-flex items-center">
                    <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                    </div>
                    <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> wickedblocks </h2>
                  </div>
                </a>
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                  <ul className="items-center inline-block list-none lg:inline-flex">
                    <li>
                      <a href="#/" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Pricing</a>
                    </li>
                    <li>
                      <a href="#/" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Contact</a>
                    </li>
                    <li>
                      <a href="#/" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Services</a>
                    </li>
                    <li>
                      <a href="#/" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Now</a>
                    </li>
                  </ul>
                </nav>
                <button className="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">Button </button>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
