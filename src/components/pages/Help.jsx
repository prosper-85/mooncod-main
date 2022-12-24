import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import SMS from "../../assets/sms.webp";


const Help =()=> {
    return(
        <Fragment>

            <Link to={'/support'} className='block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-8 py-4 rounded-full text-white flex items-center justify-between fixed bottom-24 left-[57%] md:left-[85%] z-10'>
              <img src={SMS} alt='appStore icon' className='mr-2' />
              {""}
              Help
            </Link>
        </Fragment>
    )
}


export default Help;