import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet-async";

import PreFooter from "./PreFooter";
import Dashboard from "../../assets/dashboard.webp";
import SMS from "../../assets/sms.webp";
import Safe from "../../assets/safe.webp";
import Trustpilot from "../../assets/svg/trustpilot.svg";
import Google from "../../assets/svg/google.svg";
import Reliable from "../../assets/reliable.webp";
import Google1 from "../../assets/google1.png";
import Trusted from "../../assets/trusted.webp";
import StanLee from "../../assets/stan-lee.webp";
import Emilie from "../../assets/Emilie-Choi.webp";
import William from "../../assets/William-Surojit.webp";
import Helen from "../../assets/Helen-Pauline .webp";

export const AboutPageHeader = function ({ header, paragraph }) {
  return (
    <div className="mx-auto w-full flex flex-col items-center justify-center px-4 md:px-0">
      <h4 className="text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center lg:px-80 ">
        {header}
      </h4>
      <p className="text-base font-body text-center text-white font-normal px-4  md:px-0 lg:px-80 mt-3">
        {paragraph}
      </p>
    </div>
  );
};

export const DetailCard = function ({ children }) {
  return <>{children}</>;
};

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About MoonCod Bitcoin and Crypto Wallet</title>
        <meta
          name="description"
          content=" User-friendly crypto wallet with unique features that make your Web3 experience safe."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <Header>
          <div className="container  md:px-16 xl:px-20 mx-auto h-full w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0">
            <div className="w-full pb-4 md:mb-0 mt-36 lg:mt-40 ">
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-4xl  mb-2 font-body font-bold text-white text-center">
                  User-friendly crypto wallet with unique features that <br />{" "}
                  make your Web3 experience safe.
                </h2>
                <p className="text-lg mt-4 lg:mt-0 font-body text-center font-normal text-white">
                  Simple, Safe and Secure Wallet
                </p>
              </div>
            </div>

            <div className="w-full h-full relative">
              <div className="w-8/12 mx-auto mt-9">
                <img
                  src={Dashboard}
                  alt="phones"
                  height={"100%"}
                  width={"100%"}
                  loading="lazy"
                />
              </div>

              <button
                className="bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-8 py-4 rounded-full text-white flex items-center justify-between fixed bottom-24 z-10"
                style={{ left: "85%" }}
              >
                <img src={SMS} alt="appStore icon" className="mr-2" />
                {""}
                Help
              </button>
            </div>
          </div>
        </Header>

        <section className="h-full bg-wallet pb-24" id="walletSection">
          <article className="container md:px-16 xl:px-8 mx-auto py-6">
            <div className="mt-16">
              <AboutPageHeader
                header={`About Mooncod
    `}
                paragraph="
              We believe that irrespective of the risks of the market, your crypto should be enjoyable and stress-free. Mooncod is a company that has developed a uniquely efficient crypto wallet with built-in compatibility for the web, iOS and Android devices. With a remarkable capability of holding 100+ cryptocurrencies, including Bitcoin, Ethereum, Solana, Fathom, and others in one place, our wallet app proves a breath of fresh air in the volatile crypto space. At Mooncod, we envisage revolutionizing the cryptocurrency industry to ensure that prospective market investors without deep knowledge of the technicalities can become active participants within the space through easy-to-use apps and excellent interfaces..
              "
              />
            </div>
            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-x-16 lg:gap-x-4 */}
            <div className="h-full flex flex-wrap xl:justify-around gap-y-8 mt-28 w-full px-4 md:px-8">
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <img src={Trustpilot} alt="Trustpilot" loading="lazy" />
                  </div>
                  <h6 className="text-body text-3xl font-bold text-white ">
                    Trust
                  </h6>
                </div>
              </DetailCard>
              <div className="hidden md:block w-14 bg-white h-px my-auto bg[#080A0C]"></div>
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <img src={Reliable} alt="Polit" loading="lazy" />
                  </div>
                  <h6 className="text-body text-3xl font-bold text-white ">
                    Polit
                  </h6>
                </div>
              </DetailCard>
              <div className="hidden md:block w-14 bg-white h-px my-auto bg[#080A0C]"></div>
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-1 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <img src={Google1} alt="Trustpilot" loading="lazy" />
                  </div>
                  <h6 className="text-body text-3xl font-bold text-center text-white ">
                    Google verification
                  </h6>
                </div>
              </DetailCard>
            </div>

            <div></div>
          </article>
        </section>

        <section className="h-full" id="explorer">
          <div className="container mx-auto">
            <div className="pt-32">
              <AboutPageHeader
                header="Our numbers speak for us"
                paragraph="Mooncod helps customers all over the world learn about cryptocurrency and get started with it.
              Mooncod is trusted by approximately 10,000 verified users and 500 ecosystem partners from over 15 countries to easily and securely invest, spend, save, earn, and use cryptocurrency. "
              />
            </div>
            <div className="w-full sm:w-4/5 md:w-[88%] lg:w-3/5 xlg:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-2 gap-y-8 mt-24">
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <h2 className="text-body text-3xl font-bold text-white ">
                      $40B
                    </h2>
                  </div>
                  <p className="text-body text-base font-thin text-center text-white ">
                    Quarterly volume traded
                  </p>
                </div>
              </DetailCard>
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <h2 className="text-body text-3xl font-bold text-white ">
                      $26B
                    </h2>
                  </div>
                  <p className="text-body text-base font-thin text-center text-white ">
                    Assets on platform
                  </p>
                </div>
              </DetailCard>
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <h2 className="text-body text-3xl font-bold text-white ">
                      100+
                    </h2>
                  </div>
                  <p className="text-body text-base font-thin text-center text-white ">
                    Countries
                  </p>
                </div>
              </DetailCard>
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <h2 className="text-body text-3xl font-bold text-white ">
                      9M+
                    </h2>
                  </div>
                  <p className="text-body text-base font-thin text-center text-white ">
                    Verified users
                  </p>
                </div>
              </DetailCard>
              <DetailCard>
                <div
                  className="w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}
                >
                  <div>
                    <h2 className="text-body text-3xl font-bold text-white ">
                      50+
                    </h2>
                  </div>
                  <p className="text-body text-base font-thin text-center text-white ">
                    Employees
                  </p>
                </div>
              </DetailCard>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row md:items-center md:justify-evenly mt-24">
              <div className="w-full">
                <AboutPageHeader header={"Our Core Team"} paragraph="" />
              </div>
            </div>
            <div
              className="w-full mx-auto h-full mt-16 md:mt-24 xlg:mt-0 pb-8 xlg:h-[35.1rem]
           grid content-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-2 gap-y-14 px-8"
            >
              <DetailCard>
                <div className="w-56">
                  <div
                    className="w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "1px",
                      outlineColor: "rgba(255, 0, 203, 0.15)",
                      outlineOffset: "-1px",
                    }}
                  >
                    <div className=" w-56 h-60 rounded-2xl ">
                      <img
                        src={StanLee}
                        alt="Co-Founder & Chief Executive Officer"
                        width="100%"
                        height="100%"
                        className="w-56 h-60 rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                  </div>
                  <div className="w-full flex flex-col justify-evenly items-center">
                    <h2 className="text-body text-3xl font-medium text-white mt-2">
                      Stan Lee
                    </h2>
                    <p className="text-body text-lg font-normal text-center text-white ">
                      Co-Founder & Chief Executive Officer
                    </p>
                  </div>
                </div>
              </DetailCard>
              <DetailCard>
                <div className="w-56">
                  <div
                    className="w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "1px",
                      outlineColor: "rgba(255, 0, 203, 0.15)",
                      outlineOffset: "-1px",
                    }}
                  >
                    <div className=" w-56 h-60 rounded-2xl ">
                      <img
                        src={Emilie}
                        alt="Chief operating Officer"
                        width="100%"
                        height="100%"
                        className="w-56 h-60 rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                  </div>
                  <div className="w-full flex flex-col justify-evenly items-center">
                    <h2 className="text-body text-3xl font-medium text-white mt-2">
                      Emilie Choi
                    </h2>
                    <p className="text-body text-lg font-normal text-center text-white ">
                      President & Chief operating Officer
                    </p>
                  </div>
                </div>
              </DetailCard>
              <DetailCard>
                <div className="w-56">
                  <div
                    className="w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "1px",
                      outlineColor: "rgba(255, 0, 203, 0.15)",
                      outlineOffset: "-1px",
                    }}
                  >
                    <div className=" w-56 h-60 rounded-2xl ">
                      <img
                        src={William}
                        alt="Chief product officer"
                        width="100%"
                        height="100%"
                        className="w-56 h-60 rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                  </div>
                  <div className="w-full flex flex-col justify-evenly items-center">
                    <h2 className="text-body text-3xl font-medium text-white mt-2">
                      William Surojit
                    </h2>
                    <p className="text-body text-lg font-normal text-center text-white ">
                      {/* William Surojit   Chief product officer */}
                      Chief product officer
                    </p>
                  </div>
                </div>
              </DetailCard>
              <DetailCard>
                <div className="w-56">
                  <div
                    className="w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto"
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "1px",
                      outlineColor: "rgba(255, 0, 203, 0.15)",
                      outlineOffset: "-1px",
                    }}
                  >
                    <div className=" w-56 h-60 rounded-2xl ">
                      <img
                        src={Helen}
                        alt=" Chief financial Officer"
                        width="100%"
                        height="100%"
                        className="w-56 h-60 rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                  </div>
                  <div className="w-full flex flex-col justify-evenly items-center">
                    <h2 className="text-body text-3xl font-medium text-white mt-2">
                      Helen Pauline
                    </h2>
                    <p className="text-body text-lg font-normal text-center text-white ">
                      {/* William Surojit   Chief product officer */}
                      Chief financial Officer
                    </p>
                  </div>
                </div>
              </DetailCard>
            </div>
          </div>
        </section>
        <PreFooter />
      </main>
    </>
  );
};

export default AboutUs;
