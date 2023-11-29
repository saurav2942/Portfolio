import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center text-white">
      <div className="w-screen">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4"></hr>
        <p className="flex justify-center text-sm text-white text-center my-4">
          Designed by&nbsp;
          <a href="https://enjae.netlify.app/" className="hover:underline">
            enjae™
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
