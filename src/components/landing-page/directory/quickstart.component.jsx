import React, { Fragment } from 'react'
import TwoMobile from '../../../assets/twinMobile2.webp'

const QuickStart = () => {
  return (
    <Fragment>
        <div className='lg:pt-28 py-4'>
            <div className='text-center flex flex-col items-center justify-center'>
                <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold pb-4'>Your Trusted Crypto Wallet</p>
                <p className='w-4/6'>Take complete control of your assets via our one-stop services platform with bank transfer and credit card compatibility, high execution speed and low fees.</p>
            </div>
            <div>
                <img src={TwoMobile} alt="phones" />
            </div>
        </div>
    </Fragment>
  )
}

export default QuickStart