import React from "react";

function Gallery(props) {
    return (
        <>
            <div className="justify-center flex flex-wrap mt-32">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    {/* <h5 className="text-xl font-semibold pb-4 text-center">
                      Login Page
                    </h5> */}
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/login.jpg").default}
                        />
                      </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    {/* <h5 className="text-xl font-semibold pb-4 text-center">
                      Profile Page
                    </h5> */}
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/profile.jpg").default}
                        />
                      </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    {/* <h5 className="text-xl font-semibold pb-4 text-center">
                      Landing Page
                    </h5> */}
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/landing.jpg").default}
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