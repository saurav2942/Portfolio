import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faXmark,
  faBars,
  faLocationDot,
  faHouse,
  faDiagramProject,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(
  fas,
  faXmark,
  faBars,
  faLinkedinIn,
  faGithub,
  faLocationDot,
  faHouse,
  faDiagramProject,
  faFile
);
import { Link } from "react-router-dom";
// import Icon from "../assets/icon.png";
const Icon = new URL("../assets/icon2.png", import.meta.url);

const Dots = () => {
  return (
    <li className="flex-2 justify-self-center pb-1 mt-8 md:block md:pb-0 md:mt-0 hidden">
      <FontAwesomeIcon icon="fas fa-ellipsis-v" />
    </li>
  );
};

const Resume = () => {
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

      {/* Details */}
      <div className="leading-[1] mt-6 max-w-screen-lg md:flex mx-auto">
        <div className="md:w-1/3 p-2">
          <div className="md:fixed">
            <div className="md:block ">
              <img
                className="h-28 w-28 mx-auto rounded-full object-cover object-[50%_20%] scale-[1]"
                src={Icon}
              ></img>
              <div className="mb-12 text-center mt-4 justify-center items-left mx-4 text-Inconsolata">
                <h1 className="text-xl text-gray-700 font-bold text-Inconsolata">
                  Saurav Mathuriya
                </h1>
                <div className="md:text-sm text-gray-600">
                  Software Engineer
                </div>
              </div>
            </div>
            <div className="flex justify-evenly md:block">
              <div className="my-5 mx-2 text-sm text-gray-600 flex">
                <div className="mr-2">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </div>
                <a href="https://github.com/saurav2942" className="underline">
                  https://github.com/saurav2942
                </a>
              </div>
              <div className="my-5 mx-2 text-sm text-gray-600 flex">
                <div className="mr-2">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </div>
                Jaipur, Rajasthan
              </div>
              <a
                href="https://www.linkedin.com/in/saurav2942/"
                className="my-5 mx-2 text-sm text-gray-600 flex"
              >
                <div className="mr-2">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </div>
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full sm:border-l-2">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Summary</h1>
            <p className="text-md">
              I do Competitive Programming and I enjoy turning abstract ideas
              into tangible solutions through coding. And I'm a good problem
              solver and quick learner.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Education</h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Indian Institute Of Engineering Science And Technology, Shibur
                </h2>
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Bachelor Of Technology
                    </small>
                  </div>
                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-sm text-gray-600">
                      Aug 2019 - June 2023
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Experience
            </h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Community Ambassador
                </h2>
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">Pregrad</small>
                  </div>
                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-sm text-gray-600">
                      May 2023 - Present
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>Part of the Networking and Marketing Team.</li>
                        <li>
                          Worked with college students and groups of
                          oragnisations to organise webinars on defferent topics
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Contributor
                </h2>
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      GirlScript Summer of Code
                    </small>
                  </div>
                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-sm text-gray-600">
                      May 2023 - Aug 2023
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Organising and Maintaining Workshops, coding sessions
                          and webinars
                        </li>
                        <li>
                          Contributed to open source repo in html, css, js and
                          react.js.
                        </li>
                        <li>Mainly contributed in frontend part.</li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">Tutor</h2>
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      SBM Sr Sec School
                    </small>
                  </div>
                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-sm text-gray-600">
                      Dec 2021 – January 2022
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Guided students through practice problems for K-8
                          grade level math classes, answering anytype of
                          questions, and guiding through the concepts of
                          problems and steps needed to solve problems.
                        </li>
                        <li>
                          Taught techniques which focuses on basic fundamentals
                          of maths for that particular grade to improve the
                          understanding of the concepts.
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Skill</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  C++
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Data Structures And Algorithms
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Web Development
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Database Design
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MySql
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MongoDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Object Oriented Programming
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Operating Systems
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Code Principles
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  JavaScript
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Tailwind CSS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  BootStrap
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Material UI
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Node.js
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Networking
                </span>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Achivements
            </h1>
            <ul className="list-disc text-md">
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Solved 700+ Coding Questions on different online judges
                      across platforms.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Secured Global Rank of 87 in Codechef Starter 71(Div.4)
                      among 16k+ participants.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Secured Global Rank of 1904 in Google Farewell Round A -
                      2023.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Secured Global Rank of 3530 in Google Kick-Start Round A -
                      2021.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Event Manager at Ensafe club , IIEST.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      Achieved 200+ days coding challenge in Leetcode.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i
                      className="bx bx-buildings"
                      style={{ color: "rgb(102, 102, 102)" }}
                    ></i>
                    <small className="text-base text-gray-700">
                      4Star at Codechef (Highest Rating - 1806+)
                    </small>
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
              <a
                href="https://www.linkedin.com/in/saurav2942/"
                className="hover:underline"
              >
                Saurav™
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
