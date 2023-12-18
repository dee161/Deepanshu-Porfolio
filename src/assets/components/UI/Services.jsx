import React from "react";
import backendImg from "../../images/backend.png";
import java from "../../images/java.svg";
import html from "../../images/html.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import pyImage from "../../images/pyImage.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Skill Set
          </h2>
          <p className="lg:max-w-[600px] lg:max-auto justify-between text-headingcolor font-[500] text-[16px] leading-7 "></p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" p-4 bg-white rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px]">
                          <img
                            className="h-[40px] w-[40px] items-center ml-16 mr-7"
                            src={java}
                          ></img>
                          Linux
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={html}
                          ></img>
                          HTML & CSS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-12 mr-5"
                            src={javascript}
                          ></img>
                          Javascript
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-14 mr-5"
                            src={react}
                          ></img>
                          ReactJs
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] group-hover:">
                          <img
                            className="h-[40px] w-[40px] items-center ml-14 mr-5"
                            src={pyImage}
                          ></img>
                          Python
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-14 mr-5"
                            src={react}
                          ></img>
                          django
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
