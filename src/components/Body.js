import React from "react";
import Social from "./Social";
import {
  Codechef_URL,
  Leetcode_URL,
  Linkedin_URL,
  Medium_URL,
  Twitter_URL,
  Instagram_URL,
} from "../config";
import CvCard from "./CvCard";
import Header from "./Header";
import Github from "./Github";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Project from "./Project";

const Body = () => {
  return (
    <div className="bg-[#000] min-h-screen m-0 p-5">
      <div className="pl-10 pr-10">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 pl-5 pr-5">
          {/* {Header} */}
          <Header />
          {/* Resume */}
          <Link to="./resume">
            <CvCard />
          </Link>
          {/* Linkedin  */}
          <Social
            URL={Linkedin_URL}
            name="fa-linkedin-in"
            type="brand"
            bg="bg-[#2895fb56]"
            col="#ffffff"
          />
          {/* Twitter  */}
          <Social
            // URL={Twitter_URL}
            URL={Instagram_URL}
            // name="fa-twitter"
            name="fa-instagram"
            type="brand"
            bg="bg-[linear-gradient(45deg,_#f09433_0%,_#e6683c_25%,_#dc2743_50%,_#cc2366_75%,_#bc1888_100%)]"
            col="#ffffff"
            iconSize="text-[2.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem]"
          />
          {/* Medium  */}
          <Social
            URL={Medium_URL}
            name="fa-medium-m"
            type="brand"
            bg="bg-[#ffffff]"
            col="#171717"
          />
          {/* {Github} */}
          <Github />
          {/* {Projects} */}
          <Link
            to="./projects"
            className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden scale transition duration-300 ease-in-out hover:scale-105"
          >
            <Project />
          </Link>
          {/* Leetcode  */}
          <Social
            URL={Leetcode_URL}
            name="leetcode"
            type="leetcode"
            col="#ffffff"
            bg="bg-[#171717]"
          />
          {/* Codechef  */}
          <Social
            URL={Codechef_URL}
            name="codechef"
            type="codechef"
            bg="bg-[#ffffff]"
            col="#171717"
            imgSize="w-[2.5rem] sm:w-[5.5rem] md:w-[6.5rem] lg:w-[7.5rem]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Body;
