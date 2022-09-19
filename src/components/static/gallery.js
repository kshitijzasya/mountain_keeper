import React from "react";
import "./gallery.css";

function Gallery(props) {
    return (
        <>
            <div className="justify-center flex flex-wrap mt-32">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="object-contain rounded-lg product"
                          src={require("assets/img/warranty.jpg").default}
                        />
                      </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="object-contain rounded-lg product"
                          src={require("assets/img/sink.jpg").default}
                        />
                      </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="max-w-full h-auto product"
                          src={require("assets/img/kitchen.jpg").default}
                        />
                      </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="max-w-full h-auto product"
                          src={require("assets/img/kitchen-blue.jpg").default}
                        />
                      </div>
                  </div>
                </div>
                
              </div>
            </div>
        </>
    )
}

export default Gallery;