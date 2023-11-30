import React from "react";
import Social from "./Social";
import {
  Codechef_URL,
  Leetcode_URL,
  Linkedin_URL,
  Medium_URL,
  Twitter_URL,
} from "../config";
import CvCard from "./CvCard";
import Header from "./Header";
import Github from "./Github";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Project from "./Project";

const Body = () => {
  return (
    <div className="noise bg-[#000] min-h-screen m-0 p-5">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
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
          URL={Twitter_URL}
          name="fa-twitter"
          type="brand"
          bg="bg-[#171717]"
          col="#ffffff"
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
        />
      </div>
      <Footer />
    </div>
  );
};
export default Body;
