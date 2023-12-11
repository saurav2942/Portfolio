import React from "react";

const Shimmer = () => {
  return (
    <div className="noise bg-[#fff] min-h-screen m-0 p-5">
      <div className="min-h-screen grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
        <div className="col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-gray-200 rounded-3xl overflow-hidden"></div>
        <div className="col-span-1 aspect-square bg-gray-200 rounded-3xl overflow-hidden"></div>
        <div className="col-span-1 aspect-square bg-gray-200 rounded-3xl overflow-hidden"></div>

        <div className="col-span-1 aspect-square bg-gray-200 rounded-3xl overflow-hidden"></div>
        <div className="col-span-1 aspect-square bg-gray-200 rounded-3xl overflow-hidden"></div>
        <div className="col-span-2 aspect-auto bg-gray-200 rounded-3xl overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Shimmer;
