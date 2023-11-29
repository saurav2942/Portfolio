import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faFilePdf,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas, faFilePdf, faExternalLinkAlt);
import Noise from "../Assets/noise.gif";

const CvCard = () => {
  return (
    <div className="cursor-pointer text-decoration transition duration-500 ease-in-out scale-100 hover:scale-105 text-white rounded-3xl flex flex-col col-span-1 relative overflow-hidden aspect-square shadow-sm bg-[#316c3bd3] justify-center items-center p-5 ">
      <div class="flex justify-center items-center flex-col">
        <p class="text-[2rem] sm-text-[2.5rem] md:text-[3rem] lg:text-[5rem] font-bold py-0 px-2">
          📄
        </p>
        <p class="text-[1rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] uppercase font-semibold text-center">
          View CV
        </p>
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
    </div>
  );
};

export default CvCard;