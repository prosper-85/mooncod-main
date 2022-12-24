import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logomoon.webp";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Wallet from "../../assets/walletIcon.webp";
import Logo from "../../assets/faviconlogo.webp";

const CompanyDropdown = function ({ dropdownState }) {
  return (
    <div
      className={`${
        dropdownState ? "visible" : "invisible"
      } w-64 h-[8rem] rounded-lg shadow-lg dropdown flex items-center justify-evenly absolute top-[70%] right-60 duration-100 transition ease-in companydropdown`}>
      <Link
        to='/about'
        className='h-10 w-28 flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        About
      </Link>
      <Link
        to='/faq'
        className='h-10 w-28 cursor-pointer flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        FAQ
      </Link>
    </div>
  );
};

const DropDownLink = function (props) {
  return (
    <div
      className={` ${
        props.dropdownState ? "visible" : 'invisible'
      } w-[36rem] h-[8rem] rounded-lg shadow-lg dropdown flex items-center justify-evenly absolute top-[70%] left-[30%] duration-300 transition`}>
      <Link
        to='/'
        className='h-20 w-64 flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        <div>
          <img src={Logo} alt='Buy and Sell' />
        </div>
        <div>
          <h2 className='text-sm font-normal'>Buy and Sell</h2>
          <p className='text-xs font-thin mt-2'>Buy, sell and use crypto</p>
        </div>
      </Link>
      <Link
        to='/wallet'
        className='h-20 w-64 flex cursor-pointer items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        <div>
          <img src={Wallet} alt='Wallet' />
        </div>
        <div>
          <h2 className='text-sm font-normal'>Moodcod Wallet</h2>
          <p className='text-xs font-thin mt-2'>
            The best self-hosted crypto wallet
          </p>
        </div>
      </Link>
    </div>
  );
};


const Navigation = () => {
  const [nav, setNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };

  // handling mobile dropdown
  const [mobileDrop, setMobileDrop] = useState(true);
  const handleMobileDrop = () => setMobileDrop(!mobileDrop);

  //second mobile dropdown
  const [mobileDrop1, setMobileDrop1] = useState(true);
  const handleMobileDrop1 = () => setMobileDrop1(!mobileDrop1);

  return (
    <Fragment>
      <div
        className='bg-[181e25] fixed w-screen z-50'
        style={{ backdropFilter: "blur(85px)" }}
        onMouseLeave={() => {
          setShow(false);
          setShowDropdown(false)
        }}>
        <div className='bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-6 flex justify-between items-center top-0 right-0'>
          <div className='flex justify-between w-full py-2 lg:py-0 lg:w-1/4'>
            <Link to='/' className=' text-red-700 '>
              <img src={logo} alt='Mooncod' className='w-32 md:w-full' />
            </Link>
            <div className='lg:hidden' onClick={handleClick}>
              {
                nav ? (
                  <MenuIcon className='text-[#fff] w-7 cursor-pointer' />
                ) : null
                // <XIcon className='text-[#fff] w-7' />
              }
            </div>
          </div>
          <div className='hidden lg:flex w-2/4 align-middle justify-center py-2'>
            <ul className='flex w-full justify-between items-center '>
              <li>
                <Link
                  to='/explore'
                  className='hover:text-[#008AED] active:[#008AED] transition ease duration-300'>
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to='#'
                  className='relative hover:text-[#008AED] active:text-[#008AED]'
                  id='individual'
                  onMouseEnter={() => {
                    setShowDropdown(!showDropdown);
                    setShow(false);
                  }}
                 
                  >
                  Individuals
                  <span>
                    <DownOutlined className='text-xs ' />
                  </span>
                </Link>
              </li>
              <DropDownLink dropdownState={showDropdown} />
              <li>
                <Link
                  to='/wallet'
                  className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                  Wallet
                </Link>{" "}
              </li>
              <li>
                <Link
                  to='#'
                  // id='company'
                  className='relative hover:text-[#008AED] active:text-[#008AED]'
                  onMouseEnter={(e) => {
                    setShow(!show);
                    setShowDropdown(false);
                  }}
                >
                  Company
                  <span>
                    <DownOutlined className='text-xs ' />
                  </span>
                </Link>
                <CompanyDropdown dropdownState={show} />
              </li>
            </ul>
          </div>
          <Link
            to='/download'
            className='hidden lg:block  bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
            DOWNLOAD
          </Link>
        </div>
        <div
          className={
            nav
              ? "absolute left-0 translate-x-[200rem] transition linear duration-300"
              : "w-full h-screen top-0 translate-x-0 absolute z-[100000] flex lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2 transition ease-in-out duration-500"
          }>
          <XIcon
            className='text-white cursor-pointer w-7 absolute right-4 top-4'
            onClick={closeNav}
          />
          <ul className='flex flex-col h-full py-16 justify-evenly transition linear duration-300 items-center text-center px-6 '>
            <li className=' py-2 my-2 w-full'>
              <Link
                to='/explore'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'
                onClick={closeNav}>
                Explore
              </Link>
            </li>

            <li className='py-2 my-2 w-full'>
              <span
                className='flex items-center justify-center text-white font-bold cursor-pointer text-center hover:text-[#008AED] active:text-[#008AED]'
                onClick={handleMobileDrop}>
                Individuals <DownOutlined className='text-xs ml-1' />
              </span>
              <span
                className={
                  mobileDrop
                    ? "hidden"
                    : " transition ease-out duration-300 mt-4 py-6 rounded-l"
                }>
                <span className='block mb-3'>
                  <Link
                    to='/'
                    className='block py-3 w-full hover:bg-[#008AED] hover:shadow-lg  transition ease duration-300'>
                    Buy and Sell
                  </Link>
                </span>
                <span className='block'>
                  <Link
                    to='/wallet'
                    className='block py-3 w-full hover:bg-[#008AED] hover:shadow-lg  transition ease duration-300'>
                    Mooncod Wallet
                  </Link>
                </span>
              </span>
            </li>

            <li className=' py-2 my-2 w-full'>
              <Link
                to='/'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                Wallet
              </Link>{" "}
            </li>

            <ul className='py-2 mt-2 w-full'>
              <li
                to='/'
                className='flex items-center justify-center text-white font-bold cursor-pointer hover:text-[#008AED] active:text-[#008AED]'
                onClick={handleMobileDrop1}>
                Company <DownOutlined className='text-xs ml-1' />
              </li>
              <li
                className={
                  mobileDrop1
                    ? "hidden"
                    : "transition ease-out duration-300 mt-4 py-6 rounded-l"
                }>
                <span className='block mb-3'>
                  <Link
                    to='/about'
                    className='block py-3 w-full hover:bg-[#008AED] hover:sext-black transition ease duration-300'>
                    About
                  </Link>
                </span>
                <span className='block'>
                  <Link
                    to='/faq'
                    className='block py-3 w-full hover:bg-[#008AED] hover:text-black transition ease duration-300'>
                    FAQ
                  </Link>
                </span>
              </li>
            </ul>
            <Link
              to='/download'
              className='lg:hidden bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-4 rounded-full text-white w-64 mx-auto text-center '>
              DOWNLOAD
            </Link>
          </ul>
        </div>
      </div>

      {/* <Outlet /> */}
    </Fragment>
  );
};

export default Navigation;
