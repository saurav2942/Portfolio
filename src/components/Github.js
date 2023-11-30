import React from "react";
import Coding from "../assets/girlcoding.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faExternalLinkAlt, faGithub);
import Noise from "../assets/noise.gif";

const GithubPage = () => {
  return (
    <>
      <a
        href="https://github.com/saurav2942"
        className="rounded-3xl col-span-2 overflow-hidden cursor-pointer scale-100 transition duration-300 ease-in-out hover:scale-105"
      >
        <div className="relative w-full h-full p-4 md:p-8 bg-[#000000eb] z-50">
          <img
            className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-60"
            src={Coding}
          ></img>
          <img
            className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-[0.03]"
            src={Noise}
          ></img>
          <div className="w-full h-full flex flex-col justify-between z-50">
            <FontAwesomeIcon
              className="text-xs text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] md:flex mr-[90%] my-auto"
              icon="fa-brands fa-github"
              style={{ color: "#ffffff" }}
            />
            <div className="z-50">
              <h2 className="text-white text-sm sm:text-4xl md:text-xl lg:text-3xl font-bold">
                Github
              </h2>
              <p className="text-white text-sm sm:text-[1.5rem] md:text-md lg:text-2xl">
                My Github profile, where I upload my projects.
              </p>
            </div>
          </div>
          <FontAwesomeIcon
            className="absolute top-5 right-5 sm:text-[1rem] md:text-[1rem] lg:text-[1rem]"
            icon="fas fa-external-link-alt"
            style={{ color: "#ffffff" }}
          />
        </div>
      </a>
    </>
  );
};

export default GithubPage;
