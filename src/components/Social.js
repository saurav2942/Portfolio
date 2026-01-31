import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faFilePdf,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faTwitter,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  fas,
  faLinkedinIn,
  faTwitter,
  faInstragram,
  faFilePdf,
  faMediumM,
  faExternalLinkAlt,
);

import { Codechef_PNG, Leetcode_PNG } from "../config";
// import Noise from "../assets/noise.gif";
const Noise = new URL("../assets/noise.gif", import.meta.url);

const Social = (props) => {
  return (
    <>
      <a
        href={props.URL}
        className={
          "flex flex-col justify-center text-center items-center rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale-100 transition duration-300 ease-in-out p-5 hover:scale-105 " +
          props.bg
        }
      >
        {props.type === "brand" ? (
          <FontAwesomeIcon
            className="text-[2rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem]"
            icon={"fab " + props.name}
            style={{ color: props.col }}
          />
        ) : props.name === "leetcode" ? (
          <img
            src={Leetcode_PNG}
            className="w-[2rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem]"
          ></img>
        ) : (
          <img
            src={Codechef_PNG}
            className="w-[2rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem]"
          ></img>
        )}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.05]"
          src={Noise}
        ></img>
        <FontAwesomeIcon
          className="absolute top-5 right-5 sm:text-[1rem] md:text-[1rem] lg:text-[1rem]"
          icon="fas fa-external-link-alt"
          style={{ color: props.col }}
        />
      </a>
    </>
  );
};

export default Social;
