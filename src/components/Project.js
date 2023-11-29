import React from "react";
import Coding from "../assets/coding.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faExternalLinkAlt);
import Noise from "../assets/noise.gif";

const ProjectCard = () => {
  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 text-white p-4 md:p-8 z-10 pointer-events-none scale-100 transition duration-300 ease-in-out hover:scale-105">
        <h2 className="font-bold text-md sm:text-4xl md:text-xl lg:text-4xl">
          Projects
        </h2>
        <p className="text-white text-sm sm:text-[1.5rem] md:text-md lg:text-2xl">
          Here you can find some of my projects I have worked upon.
        </p>
      </div>
      <div class="w-full h-full bg-black absolute">
        <img
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-60"
          src={Coding}
        ></img>
      </div>
      <FontAwesomeIcon
        className="absolute top-5 right-5 sm:text-[1rem] md:text-[1rem] lg:text-[1rem]"
        icon="fas fa-external-link-alt"
        style={{ color: "#ffffff" }}
      />
      <img
        className="absolute w-full h-full object-cover opacity-[0.03]"
        src={Noise}
      ></img>
    </>
  );
};

export default ProjectCard;
