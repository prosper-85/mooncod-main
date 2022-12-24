import React from "react";
import Header from "./Header";
import Mac from "../../assets/macbook.webp";
import Phones from "../../assets/doublePhones.webp";
import PlayStore from "../../assets/playStore.webp";
import AppStore from "../../assets/appStore.webp";
import PreFooter from "./PreFooter";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import Help from "./Help";
import { SiTrustpilot } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

export const StarComponent = function (props) {
  if (props.play) {
    return (
      <div className="w-full flex items-center px-4 mt-4 text-white mx-5">
        <div className="flex ">
          <SiTrustpilot className="text-[#00fd8765] font-base" />
          <SiTrustpilot className="text-[#00fd8765] font-base" />
          <SiTrustpilot className="text-[#00fd8765] font-base" />
          <SiTrustpilot className="text-[#00fd8765] font-base" />
        </div>
        <p className="text-base font-thin mx-1">{props.rating}</p>
        <p className="mx-2 text-base font-thin">{props.downloads}</p>
      </div>
    );
  } else {
    return (
      <div className="w-full flex items-center px-4 mt-4 mx-5 text-white">
        <FcGoogle />
        <p className="text-base font-thin mx-1">{props.rating}</p>
        <p className="mx-2 text-base font-thin">{props.downloads}</p>
      </div>
    );
  }
};

const Download = function () {
  return (
    <main>
      <Header>
        <div className="container md:px-16 xl:px-20 mx-auto pb-24 pt-6 h-full w-full flex items-center justify-center flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0">
          <div className="w-full h-full lg:w-1/2 pb-4 md:mb-0 flex flex-col justify-between items-center mt-32">
            <div className="mx-auto">
              <p className="lg:text-md xl:text-1xl lg:mt-0 font-body text-center font-base text-normal text-white">
                LATEST RELEASE: COMING SOON
              </p>
              <h2 className="text-4xl lg:text-4xl xl:text-5xl my-4 font-body font-bold text-white text-center ">
                DESKTOP
              </h2>
              <p className="lg:text-l xl:text-xl mt-4 lg:mt-0 font-body text-center font-base text-bold text-white">
                CONTROL YOUR WEALTH FROM YOUR PC.
              </p>
            </div>
            <div className="h-[29.5rem] flex justify-center items-center">
              <img
                src={Mac}
                alt="phones"
                height={"80%"}
                width={"90%"}
                loading="lazy"
              />
            </div>

            <div className="w-full flex justify-center items-center">
              <p className="text-sm font-thin text-white text-center">
                Version History
              </p>
              <span className="block w-px h-4 bg-white mx-2"></span>
              <p className="text-sm font-thin text-center text-white">
                Release Hashes
              </p>
              <span className="block w-px h-4 bg-white mx-2"></span>
              <Link
                to={"/"}
                className="text-sm font-thin text-center text-white"
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="mt-4">
              <button className="bg-gradient-to-tr  sm:mt-0 from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white">
                Download Moodcod 21.3.2
              </button>
            </div>
          </div>
          <div className="h-[35rem] hidden lg:block w-px bg-white"></div>
          <div className="w-full lg:w-1/2 h-full mt-6 lg:mt-0 relative flex flex-col items-center justify-between">
            <div className=" mx-auto mt-32">
              <p className="lg:text-md xl:text-1xl mt-4 lg:mt-0 font-body text-center font-base text-normal text-white">
                LATEST RELEASE
              </p>
              <h2 className="text-4xl lg:text-4xl xl:text-5xl my-4 font-body font-bold text-white text-center ">
                MOBILE
              </h2>
              <p className="lg:text-l xl:text-xl mt-4 lg:mt-0 font-body text-center font-base text-bold text-white">
                YOUR BEST CRYPTO EXPERIENCE ON MOBILE
              </p>
            </div>
            <div className="w-full flex item-center justify-center">
              <img
                src={Phones}
                alt="phones"
                height={"80%"}
                width={"90%"}
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-center md:items-center h-full flex-col sm:flex-row justify-start md:justify-center lg:justify-start">
              <div className="my-6 lg:my-0">
                <button className="bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-9 py-3 rounded-full text-white sm:mr-4">
                  <img
                    src={PlayStore}
                    alt="playStore icon"
                    loading="lazy"
                    width="80%"
                    height="80%"
                    className="mx-auto"
                  />
                </button>
                <StarComponent {...{ rating: "4.6", downloads: "25K" }} play />
              </div>
              <div>
                <button className="bg-gradient-to-tr mt-3 sm:mt-0 from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white">
                  <img
                    src={AppStore}
                    alt="appStore icon"
                    width="90%"
                    height="90%"
                  />
                </button>
                <StarComponent {...{ rating: "4.6", downloads: "50K" }} />
              </div>
            </div>

            <Help />
          </div>
        </div>
      </Header>
      <section>
        <article>
          <PreFooter />
        </article>
      </section>
    </main>
  );
};

export default Download;
