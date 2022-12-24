import React, { Fragment } from 'react'
import Header from '../../pages/Header'

export const AboutPageHeader = function ({ header, paragraph }) {
    return (
      <div className='mx-auto w-full flex flex-col items-center justify-center px-4 md:px-0'>
        <h4 className='text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center lg:px-80 '>
          {header}
        </h4>
        <p className='text-base font-body text-center text-white font-normal px-4  md:px-0 lg:px-80 mt-3'>
          {paragraph}
        </p>
      </div>
    );
  };

const PageUi = () => {
    
  return (
    <Fragment>
        <Header>

        </Header>
        <div className="lg:px-32 lg:py-[82px] md:px-20 md:py-10 px-7 py-6 flex justify-between items-center bg-[#080A0C] bg-[url('/src/assets/sectionBackground.webp')] bg-cover bg-center text-white">
    
        </div>
    </Fragment>
  )
}

export default PageUi