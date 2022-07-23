import React from "react"

// components

import CardLineChart from "../../components/Cards/CardLineChart.js"
import CardBarChart from "../../components/Cards/CardBarChart.js"
import CardPageVisits from "../../components/Cards/CardPageVisits.js"
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js"

// layout for page

import Admin from "../../layouts/Admin.js"

export default function Test() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <button
            className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Small
          </button>
          <button
            className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Regular
          </button>
          <button
            className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Large
          </button>
        </div>
      </div>
    </>
  )
}

Test.getLayout = (page) => <Admin>{page}</Admin>
