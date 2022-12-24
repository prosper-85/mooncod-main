import React, { Fragment } from 'react'
import phoneOne from '../../../assets/tradephone1.webp'
import phoneTwo from '../../../assets/tradephone2.webp'
import phoneThree from '../../../assets/tradephone3.webp'
import appStore from '../../../assets/appStore.webp'
import playStore from '../../../assets/playStore.webp'
import bitcoinWallet from '../../../assets/bitcoinWallet.webp'
import { Link } from 'react-router-dom'

const Manage = () => {
  return (
    <Fragment>
        <div className="bg-[url('/src/assets/manageBackground.webp')] bg-center bg-cover text-white flex flex-col items-center justify-center text-center py-16 lg:px-32 relative">
            <div className='lg:w-1/2 w-4/5 justify-center items-center'>
              <p className='lg:text-5xl md:text-3xl text-2xl font-bold mb-4'>Trade Anywhere with the Mooncod App</p>
              <p className='md:text-lg sm:text-base text-xs mb-6 '>Full access to the market nd your assets on the go. Maintain the best experience with iOS, and android support</p>
            </div>
            <div className='flex justify-around'>
                <div className='w-[30%]'><img src={phoneOne} alt="" className='h-auto' /></div>
                <div className='w-[30%] lg:pt-32 pt-12'><img src={phoneTwo} alt="" className='h-auto' /></div>
                <div className='w-[30%] lg:pt-5 pt-3'><img src={phoneThree} alt=""  className='h-auto'/></div>
            </div>
            <div className='text-left bg-gradient-to-r from-[#EF96FF] via-[#FF56A9] to-[#FFAA6C] md:py-6 py-3 md:px-10 px-5 rounded-[10px] m-4'>
              <p className='md:text-4xl sm:text-3xl text-2xl md:mb-5 mb-2 font-bold'>You can do much more with Mooncod</p>
              <ul className=' list-disc text-left '>
                <li className='md:text-base text-xs'>Never lose sight of the market with timely notifications.</li>
                <li className='md:text-base text-xs'>Huge variety of tokens supported and compatible with numerous dApps.</li>
                <li className='md:text-base text-xs'>Windows support and the best mobile UX and security.</li>
                <li className='md:text-base text-xs'>Industry-leading security and financial stability to keep your identity and funds safe and secure.</li>
              </ul>
              <div className='md:my-5 my-2'>
                <Link to='/download' className='bg-gradient-to-r from-[#008AED] to-[#54F0D1] text-xs md:text-base md:py-3 py-2 px-10 md:px-14 rounded-full'>Download Wallet</Link>
              </div>
            </div>

            <div className='bg-gradient-to-r from-[#008AED] to-[#54F0D1] flex lg:flex-row flex-col w-[90%] justify-between lg:py-12 p-3 lg:px-12 relative rounded-2xl lg:mt-36 md:mt-24 mt-16 mx-4'>
              <div className='w-3/5 text-left'>
                <p className='lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold'>Give more out of crypto with Mooncod</p>
                <div className='flex mt-7'>
                    <Link to="/download" className='bg-black p-2 rounded-md'>
                      <img src={appStore} alt="" />
                    </Link>
                    <Link to="/download" className='bg-black ml-4 p-2 rounded-md'>
                      <img src={playStore} alt="" />
                    </Link>
                </div>
              </div>
              <div className='static'>
                <div className='sm:absolute flex sm:justify-end sm:items-end sm:bottom-20 sm:right-5'>
                  <img src={bitcoinWallet} alt="" className='md:w-[80%] sm:w-[50%] h-au' />
                </div>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Manage