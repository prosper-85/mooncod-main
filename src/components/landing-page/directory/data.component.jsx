import React, { Fragment } from "react";

const Data = () => {
  return (
    <Fragment>
      <div className="lg:px-32 lg:py-[82px] md:px-20 md:py-10 px-7 py-6 flex justify-between items-center bg-[#080A0C] bg-[url('/src/assets/dataBackground.webp')] bg-cover bg-center text-white">
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-7xl md:text-4xl sm:text-3xl text-2xl font-bold">
            $40B
          </p>
          <p className="md:text-base text-[8px] ">Quarterly Volume traded</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-7xl md:text-4xl sm:text-3xl text-2xl font-bold">
            35+
          </p>
          <p className="md:text-base text-[8px] ">Countries Supported</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-7xl md:text-4xl sm:text-3xl text-2xl font-bold">
            10k+
          </p>
          <p className="md:text-base text-[8px] ">Verified Users</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Data;
