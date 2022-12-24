import React, { Fragment } from 'react'
// import { FaUserPlus } from 'react-icons/fa'
// import {GiBank, GiSellCard} from 'react-icons/gi'
import CryptoIcons from '../../../assets/cryptoIcons.webp'
import stepPerson from '../../../assets/stepsPerson.webp'
import stepBank from '../../../assets/stepsBank.webp'
import stepHand from '../../../assets/stepsHand.webp'

const Steps = () => {
  return (
    <Fragment>
        <div className="lg:py-20 md:py-10 py-5 lg:px-32 md:px-7 px-4 flex flex-col justify-center items-center bg-[#080A0C] bg-[url(/src/assets/stepsBackground.webp)] bg-center bg-cover text-white">
            <div className='flex flex-col items-center justify-center w-4/6 text-center'>
                <p className='lg:text-5xl md:text-4xl text-xl font-bold pb-4'>Initiate trade with three easy steps</p>
                <p className='md:text-lg text-xs'>Explore your risk appetite and choices, create a Mooncod account and build your portfolio from the wide variety of available assets.</p>
            </div>
            <div className='flex flex-col md:flex-row lg:py-24 md:py-16 py-8 justify-between items-center w-full'>
                <div className='flex flex-col justify-center items-center md:mb-0 mb-6'>
                    <img src={stepPerson} alt='' className='text-[80px] text-[#008AED] md:mb-9 mb-4'/>
                    <p>Create an Account</p>
                </div>
                <div className='hidden md:block w-[15%] h-[2px] bg-white'></div>
                <div className='flex flex-col justify-center items-center md:mb-0 mb-6'>
                    <img src={stepBank} alt='' className='text-[80px] text-[#008AED] md:mb-9 mb-4'/>
                    <p>Link your bank account</p>
                </div>
                <div className='hidden md:block w-[15%] h-[2px] bg-white'></div>
                <div className='flex flex-col justify-center items-center md:mb-0 mb-6'>
                    <img src={stepHand} alt='' className='text-[80px] text-[#008AED] md:mb-9 mb-4'/>
                    <p>Start Buying $ Selling</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <p className='lg:text-5xl md:text-4xl sm:text-2xl lg:w-1/2 text-xl font-bold pb-4 text-center'>For smart traders who like profit</p>
                <img src={CryptoIcons} alt="" className='lg:my-32 md:my-24 sm:my-12 my-9'/>
            </div>

        </div>
    </Fragment>
  )
}

export default Steps