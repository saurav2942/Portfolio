import React from "react";
// import img from "../assets/icon.png";
// import Noise from "../assets/noise.gif";

const img = new URL("../assets/icon.png", import.meta.url);
const Noise = new URL("../assets/noise.gif", import.meta.url);

const Header = () => {
  return (
    <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#af72ff56] rounded-3xl overflow-hidden">
      <div className="h-full  absolute  p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <div className="w-28 h-28 md:w-24 md:h-24 lg:w-40 lg:h-40 mb-4 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <img
            className="w-full h-full object-cover object-[50%_20%] scale-[1]"
            src={img}
          ></img>
        </div>
        <h1 className="text-3xl md:text-xl  md:w-4/5 lg:text-5xl font-bold text-white mb-4 lg:mb-5">
          Hi, I'm Saurav Mathuriya
        </h1>
        <p className="text-dm md:text-md lg:text-md text-[#ffffffcd] font-semibold">
          Software Engineer✨ Web Developer✨ Learner✨
        </p>
      </div>
      <img
        className="absolute w-full h-full object-cover opacity-[0.01]"
        src={Noise}
      ></img>
    </div>
  );
};

export default Header;
