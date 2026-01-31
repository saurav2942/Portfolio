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
      className="flex min-h-screen flex-col bg-slate-50 text-slate-900 [background-image:radial-gradient(1200px_circle_at_15%_-10%,rgba(14,165,233,0.12),transparent_60%),radial-gradient(900px_circle_at_90%_10%,rgba(34,197,94,0.12),transparent_60%)]"
      onClick={() => {
        clickOutHandler();
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md md:relative md:shadow-none">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <nav className="w-full">
            <div className="mx-auto flex items-center justify-between py-3 md:py-5">
              <div className="flex items-center justify-between md:block">
                <div className="md:hidden">
                  <button
                    className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm transition hover:text-slate-900"
                    onClick={() => clickHandler()}
                  >
                    <FontAwesomeIcon
                      className="mx-2 text-[1.6rem] md:mx-0"
                      icon={"fa-solid " + icon}
                    />
                  </button>
                </div>
              </div>
              <div
                className={
                  "absolute left-0 top-full w-full border-b border-slate-200/70 bg-white/95 shadow-lg md:static md:w-auto md:border-b-0 md:bg-transparent md:shadow-none " +
                  isHidden
                }
              >
                <ul className="flex flex-col items-center gap-2 px-4 py-4 md:flex-row md:gap-4 md:px-0 md:py-0">
                  <li className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900">
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                    <Link to="/">Home</Link>
                  </li>

                  <Dots />

                  <li className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900">
                    <FontAwesomeIcon icon="fa-solid fa-file" />
                    <Link to="/resume">Resume</Link>
                  </li>

                  <Dots />

                  <li className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900">
                    <FontAwesomeIcon icon="fa-solid fa-diagram-project" />
                    <Link to="/projects">Projects</Link>
                  </li>
                </ul>
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
              Github
            </a>
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <ul className="flex flex-col">
              <li className="border-b-2 border-gray-100">
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8014/8014428.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Portfolio
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        Created a personalized portfolio application from
                        scratch using React.js as the core framework, allowing
                        for a dynamic and responsive user interface.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://sauravmathuriya.netlify.app/"
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6858/6858037.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Blog App
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        Developed a robust and scalable blog application using
                        React.js and Create React App, showcasing expertise in
                        front-end development. And by leveraging its
                        component-based architecture to build a user-friendly
                        and responsive blog app interface
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://saurav-blog-app.netlify.app/"
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/7603/7603441.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        E-Cart
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        Developed a robust and scalable Ecommerce application
                        using React.js and Create React App, showcasing
                        expertise in front-end development. Used FakeStore API
                        To get Products and showcase them.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://saurav-ecart-app.netlify.app/"
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8293/8293571.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        SearchMyGit
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        An React App Implemented Using Github User API to fetch
                        Searched User Details and Showcasing it.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
                    <div>
                      <div className="relative">
                        <a
                          href="https://searchmygit.netlify.app/"
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/12415/12415049.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Tic-Tac-Toe Game
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        Multiplayer an user friendly UI game aimed to play
                        tic-tac-toe.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3771/3771296.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Web Weather App
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        Weather website aimed to show user the weather details
                        of user and specified location.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3256/3256783.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Password Generator
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        A website aimed to generate random passwwords according
                        to the specified parameters by user.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6092/6092312.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Blast Design
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        last semester project used to blast design in indian
                        mines according to user specified parameters.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
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
                <div className="py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-transparent bg-transparent">
                  <div className="sm:pl-4 pr-0 sm:pr-8 flex items-start sm:items-center gap-3 min-w-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/562/562678.png"
                      alt=""
                      className="mr-3 w-8 sm:w-12 h-8 sm:h-12"
                    ></img>
                    <div className="space-y-1 min-w-0">
                      <p className="text-base text-gray-700 font-bold tracking-wide break-words">
                        Tifi.com
                      </p>
                      <p className="text-sm text-gray-500 font-medium break-words">
                        Food website aimed to showcase multiple food products,
                        catagories and there price.
                      </p>
                    </div>
                  </div>
                  <div className="sm:pr-4 flex sm:flex-col items-start sm:items-end">
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
