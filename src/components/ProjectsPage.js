import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faXmark,
  faBars,
  faHouse,
  faFile,
  faDiagramProject,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fas,
  faXmark,
  faBars,
  faHouse,
  faFile,
  faDiagramProject,
  faEllipsisV
);
import { Link } from "react-router-dom";

const Dots = () => {
  return (
    <li className="flex-2 justify-self-center pb-1 mt-8 md:block md:pb-0 md:mt-0 hidden">
      <FontAwesomeIcon icon="fas fa-ellipsis-v" />
    </li>
  );
};

const Projects = () => {
  const [icon, setIcon] = useState("fa-bars");
  const [isHidden, setIsHidden] = useState("hidden");

  function clickOutHandler() {
    if (icon === "fa-xmark") {
      setIcon("fa-bars");
      setIsHidden("hidden");
    }
  }

  function clickHandler() {
    if (icon === "fa-bars") {
      setIcon("fa-xmark");
      setIsHidden("");
    } else {
      setIcon("fa-bars");
      setIsHidden("hidden");
    }
  }
  useEffect(() => {
    setIcon("fa-bars");
    setIsHidden("hidden");
  }, []);

  return (
    <div
      className="md:container md:mx-auto flex flex-col min-h-screen"
      onClick={() => {
        clickOutHandler();
      }}
    >
      {/* Header */}
      <header className="sticky md:relative bg-white md:w-full top-0 z-50 sm:px-16 px-0 flex justify-center items-center shadow-lg md:shadow-none">
        <div className="xl:max-w-[1280px] w-full">
          <nav className="w-full">
            <div className="justify-center px-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => clickHandler()}
                  >
                    <FontAwesomeIcon
                      className="text-[2rem] mx-5 md:mx-0"
                      icon={"fa-solid " + icon}
                    />
                  </button>
                </div>
              </div>
              <div>
                <div
                  className={
                    "flex-1 justify-self-center pb-3 mt-0 md:mt-8 md:block md:pb-0 md:relative md:w-full bg-white absolute w-[40%] h-screen md:h-full md:shadow-none shadow " +
                    isHidden
                  }
                >
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="flex jusify-center items-center gap-1 mx-5 md:mx-0 text-gray-700 text-sm hover:text-gray-300">
                      <FontAwesomeIcon icon="fa-solid fa-house" />
                      <Link to="/" className="hover:underline">
                        Home
                      </Link>
                    </li>

                    <Dots />

                    <li className="flex jusify-center items-center gap-1 mx-5 md:mx-0 text-gray-700 text-sm hover:text-gray-300">
                      <FontAwesomeIcon icon="fa-solid fa-file" />
                      <Link to="/resume" className="hover:underline">
                        Resume
                      </Link>
                    </li>

                    <Dots />

                    <li className="flex jusify-center items-center gap-1 mx-5 md:mx-0 text-gray-700 text-sm hover:text-gray-300">
                      <FontAwesomeIcon icon="fa-solid fa-diagram-project" />
                      <Link to="/projects" className="hover:underline">
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Projects */}
      <div className="container px-5 py-2 flex-col lg:w-4/6 mx-auto">
        <div className="card">
          <div className="flex mx-4 flex-row items-center text-center pt-4 pb-4 justify-between border-b">
            <h1 className="font-bold text-gray-900 text-xl">Projects</h1>
            <a
              href="https://github.com/saurav2942"
              target="blank"
              className="bg-black rounded-md px-4 py-1 text-white scale-100 transition duration-300 ease-in-out hover:scale-105"
            >
              Gitub
            </a>
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <ul className="flex flex-col">
              <li className="border-b-2 border-gray-100">
                <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-8 flex sm:items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/12415/12415049.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1">
                      <p className="text-base text-gray-700 font-bold tracking-wide">
                        Tic-Tac-Toe Game
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        Multiplayer an user friendly UI game aimed to play
                        tic-tac-toe.
                      </p>
                    </div>
                  </div>
                  <div className="pr-4 flex flex-col justify-between items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://toe-toe.netlify.app/"
                          className="text-base text-black  underline hover:text-base  decoration-2 py-1 px-2 rounded-sm transition hover:decoration-wavy delay-150 duration-700 font-bold"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-gray-100">
                <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-8 flex sm:items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3771/3771296.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1">
                      <p className="text-base text-gray-700 font-bold tracking-wide">
                        Web Weather App
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        Weather website aimed to show user the weather details
                        of user and specified location.
                      </p>
                    </div>
                  </div>
                  <div className="pr-4 flex flex-col justify-between items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://sauravs-weather-app.netlify.app/"
                          className="text-base text-black  underline hover:text-base  decoration-2 py-1 px-2 rounded-sm transition hover:decoration-wavy delay-150 duration-700 font-bold"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-gray-100">
                <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-8 flex sm:items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3256/3256783.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1">
                      <p className="text-base text-gray-700 font-bold tracking-wide">
                        Password Generator
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        A website aimed to generate random passwwords according
                        to the specified parameters by user.
                      </p>
                    </div>
                  </div>
                  <div className="pr-4 flex flex-col justify-between items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://saurav-passgentr.netlify.app/"
                          className="text-base text-black  underline hover:text-base  decoration-2 py-1 px-2 rounded-sm transition hover:decoration-wavy delay-150 duration-700 font-bold"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-gray-100">
                <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-8 flex sm:items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6092/6092312.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1">
                      <p className="text-base text-gray-700 font-bold tracking-wide">
                        Blast Design
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        last semester project used to blast design in indian
                        mines according to user specified parameters.
                      </p>
                    </div>
                  </div>
                  <div className="pr-4 flex flex-col justify-between items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://github.com/saurav2942/Mining-Project"
                          className="text-base text-black  underline hover:text-base  decoration-2 py-1 px-2 rounded-sm transition hover:decoration-wavy delay-150 duration-700 font-bold"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-b-2 border-gray-100">
                <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-8 flex sm:items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/562/562678.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1">
                      <p className="text-base text-gray-700 font-bold tracking-wide">
                        Tifi.com
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        Food website aimed to showcase multiple food products,
                        catagories and there price.
                      </p>
                    </div>
                  </div>
                  <div className="pr-4 flex flex-col justify-between items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://github.com/saurav2942/Tifi.com"
                          className="text-base text-black  underline hover:text-base  decoration-2 py-1 px-2 rounded-sm transition hover:decoration-wavy delay-150 duration-700 font-bold"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center bg-white">
        <div className="xl:max-w-[1280px] w-screen flex flex-cols">
          <div className="w-screen">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4"></hr>
            <p className="flex justify-center text-sm text-black text-center my-4">
              Designed by&nbsp;
              <a href="https://enjae.netlify.app/" className="hover:underline">
                enjae™
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
