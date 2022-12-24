import {
  ArrowRightOutlined,
  CaretRightOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import React, { Fragment, useRef, useState } from "react";
import IphoneOne from "../../../assets/heroImage.webp";
import { RefreshIcon, ChatAltIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import Header from "../../pages/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Select from "react-select";

const HeroLand = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [currencyInputValue, setCurrencyInputValue] = useState("0");
  const [exchangeValue, setExchangeValue] = useState(0);
  const [swap, setSwap] = useState(false);
  const [value, setValue] = useState(0);

  const currencyValue = useRef();
  const exchangeValuePlacement = useRef();

  const coinData = async () => {
    const arr = [];
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

    const data = await response.json();

    data.map((user) => {
      return arr.push({
        value: user.current_price,
        label: user.name,
        img: user.image,
      });
    });
    setSelectedOption(arr);
  };

  useEffect(() => {
    coinData();
  }, []);

  // const { data, isSuccess } = useQuery("coin_list", coinData);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setValue(data[0].current_price);
  //   }
  // }, [isSuccess, data]);
  const colourStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "2px dotted green",
      fontSize: "12px",
      padding: "6% 3%",
      cursor: "pointer",
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "blue" : "white",
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "1%",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
    }),
  };

  const onChange = (e) => {
    setValue(e.value);
  };

  const onExchange = () => {
    if (!swap) {
      setExchangeValue(() => currencyInputValue / value);
    } else {
      setExchangeValue(() => currencyInputValue * value);
    }
  };

  const displayCurrency = () => {
    return <p className="flex items-center font-bold">$</p>;
  };

  const displayCoinList = () => {
    return (
      <Select
        styles={colourStyles}
        onChange={onChange}
        options={selectedOption}
        formatOptionLabel={(c) => (
          <div className="flex items-center gap-1">
            <img src={c.img} alt="name" className="w-4 h-4" />
            <span>{c.label}</span>
          </div>
        )}
      />
      // <select
      //   className="flex items-center font-bold bg-red-900 justify-end outline-0 border-0 py-2 w-full h-full"
      //   // onChange={(e) => {
      //   //   setValue(e.target.value);
      //   // }}
      // >
      //   {/* // <FaChevronDown />
      //   // {isSuccess && (
      //   //   <Fragment>
      //   //     {data.map((coin) => (
      //   //       <option
      //   //         key={coin.id}
      //   //         className="text-black text-base"
      //   //         label={coin.name}
      //   //         value={coin.current_price}
      //   //       >
      //   //         <img
      //   //           loading="lazy"
      //   //           src={coin.image}
      //   //           alt=""
      //   //           className="w-[1.4rem] h-[1.4rem] mr-3 rounded-full"
      //   //         />
      //   //       </option>
      //   //     ))}
      //   //   </Fragment>
      //   )} */}
      // </select>
    );
  };

  return (
    <Fragment>
      <Header>
        <div className="bg-cover bg-center bg-[url('/src/assets/heroBackground.webp')] bg-[#080A0C] text-white ">
          <div className="h-full  flex flex-col justify-center items-center px-3 lg:px-32 lg:flex-row lg:justify-between pb-5 pt-7">
            <div className=" lg:w-1/2 mt-28 lg:h-[30rem] flex flex-col justify-evenly items-center lg:items-start lg:text-start text-center ">
              <p className=" md:text-[18px] text-base flex items-center mb-4 lg:mb-0">
                Keep your Crypto on fire with the{" "}
                <ArrowRightOutlined className="ml-2 text-base text-[#54F0D1] " />
              </p>
              <h1 className="lg:text-[80px] md:text-[48px] sm:text-[30px] text-[24px] font-bold w-full mb-4 leading-none">
                Mooncod Bitcoin & Crypto Wallet
              </h1>
              <p className="md:text-[18px] sm:text-base text-xs mb-4">
                Your one-stop service platform to receive, trade and swap
                Bitcoin, Ethereum and 200+ crypto tokens
              </p>
              <div className="flex flex-col md:flex-row justify-evenly items-center">
                <a
                  href={"https://www.youtube.com/watch?v=ajw97svAF1Y"}
                  target="blank"
                  className="border-[1px] flex items-center rounded-full py-[12px] px-[18px] border-[#5F97FF] text-[#5F97FF] sm:text-base text-base font-bold md:mr-4"
                >
                  <CaretRightOutlined className="text-[#54F0D1] text-3xl mr-2" />{" "}
                  Watch Video
                </a>
                <Link
                  to={"/download"}
                  className="bg-gradient-to-r md:text-base font-bold from-[#008AED] to-[#54F0D1] rounded-full py-[16px] px-[20px] mt-4 md:mt-0"
                >
                  Get Moncod Now
                </Link>
              </div>
            </div>
            <div className="pt-[43px] xl:pr-28 lg:pr-12 relative">
              <div className="hidden lg:block w-[220px] h-[220px] bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-full absolute bottom-[-25px] -left-14 z-0"></div>
              <img
                src={IphoneOne}
                alt=""
                className=" z-10 relative w-56 h-auto"
              />
            </div>
          </div>
          <div className="xl:mx-32 mt-10 rounded-2xl px-4 md:px-12 py-10 bg-gradient-to-r from-[#7E7E8333] via-[#9D9DA067] to-[#4B4B564B] ">
            <div className="flex flex-col md:flex-row  justify-between relative mb-8">
              <p className=" md:text-4xl sm:text-3xl text-2xl font-bold ">
                Exchange
              </p>
              <div className="flex items-center">
                <p className=" mr-4 font-bold md:text-xl sm:text-base text-sm ">
                  1 Bitcoin
                </p>
                <ArrowRightOutlined className="mr-4 w-4 h-4" />
                <p className="font-bold md:text-xl sm:text-base text-sm  mr-4">
                  {/* {isSuccess
                    ? data[0].current_price.toLocaleString("en-US")
                    : "0"} */}
                </p>
                <p className="text-base mr-4 text-[#DAE0E7]">USD</p>
                <div className="bg-[#008AED] rounded-full flex items-center justify-center p-1">
                  <RefreshIcon className="w-4 h-4 " />
                </div>
                <div className="flex fixed bottom-1 md:right-20 z-[10000] right-4 items-center justify-center bg-gradient-to-r from-[#008AED] to-[#54F0D1] rounded-full p-4">
                  <ChatAltIcon className="w-4 h-4 mr-2" />
                  <p className="text-base">Help</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row justify-between"
              ref={exchangeValuePlacement}
            >
              <div className="flex bg-gradient-to-r from-[#ffffff40] to-[#ffffff20] bg-opacity-40 py-5 px-8 rounded-full w-full md:w-[32%] mb-5 md:mb-0 justify-between items-center relative">
                <p className="absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 rounded-full md:text-base text-sm font-semibold">
                  Pay
                </p>
                <input
                  className="font-bold w-full py-1 md:text-xl text-sm border-0 outline-0 bg-transparent"
                  type={"number"}
                  id="currency"
                  placeholder="value in USD"
                  ref={currencyValue}
                  onChange={() => {
                    setCurrencyInputValue(currencyValue.current.value);
                  }}
                />
                <div className="flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between">
                  {swap ? displayCoinList() : displayCurrency()}
                </div>
              </div>

              <div className="w-26 mx-auto flex mb-4 md:mb-0 justify-center items-center ">
                <button
                  className=" px-6  bg-gradient-to-r from-[#008AED] to-[#54F0D1] rounded-full md:py-2 py-2 font-bold text-base"
                  onClick={() => {
                    setSwap(!swap);
                  }}
                >
                  Swap
                </button>
              </div>
              <div className="flex bg-gradient-to-r from-[#ffffff40] to-[#ffffff20] bg-opacity-40 py-5 px-8 md:px-4 rounded-full w-full md:w-[32%] mb-5 md:mb-0 justify-between md:justify-evenly items-center relative">
                <p className="absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 left-5 rounded-full md:text-base text-sm font-semibold">
                  Get
                </p>
                <p className="font-bold md:text-xl text-sm exhangeValue">
                  {exchangeValue.toFixed(5)}
                </p>
                <div className="flex items-center  border-white border-l-2 w-fit justify-between">
                  {!swap ? displayCoinList() : displayCurrency()}
                </div>
                <div className=" flex justify-between">
                  <div>
                    {/* <input
            type='text'
            placeholder='amount of coin'
            onChange={() => {
              setValue(coinValue.current.value);
            }}
            value={coinValue}
            ref={coinValue}
            className='bg-red-800 border-none outline-none '
          /> */}
                  </div>
                  <div className=" flex"></div>
                </div>
              </div>

              <div className="w-auto md:w-[22%] px-2 flex justify-center items-center">
                <button
                  className="w-auto md:w-full px-8 flex justify-center items-center bg-gradient-to-r from-[#008AED]
                        to-[#54F0D1] rounded-full md:py-5 py-3 font-bold md:text-2xl sm:text-xl text-base"
                  onClick={onExchange}
                >
                  Convert
                </button>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </Fragment>
  );
};

export default HeroLand;
