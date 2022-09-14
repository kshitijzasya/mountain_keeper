import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

import Vacancy from "components/forms/vacancy.js"

export default function Career() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-row min-w-0 break-word mb-6 -mt-64">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col text-center bg-white rounded-lg shadow-xl m-2 p-4 lg:w-1/2 ">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Sales 
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                        Himachal Pradesh
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        Senior Sales Executive
                      </div>
                    </div>

                    <div className="flex flex-col text-center bg-white rounded-lg shadow-xl m-2 p-4 lg:w-1/2">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Sales
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                        Jammu and Kashmir 
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        Senior Sales Executive 
                      </div>
                    </div>

                    <div className="flex flex-col text-center bg-white rounded-lg shadow-xl m-2 p-4 lg:w-1/2">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Sales
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                        Leh and Ladakh 
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        Senior Sales Executive 
                      </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-wrap">
              <Vacancy />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
