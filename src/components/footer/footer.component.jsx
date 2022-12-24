import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logomoon.webp'
import { FacebookOutlined, RedditCircleFilled, TwitterOutlined, InstagramOutlined,} from '@ant-design/icons'
import {FaTelegram} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import Example from './footer pages/modalSuccess'

// import Telegram from '../../assets/telegram.svg'

const Footer = ({children}) => {
  const [submit, setSubmit] = useState(false)

  const date = new Date();
  const year = date.getFullYear()

  const sendEmail=(e)=>{
    e.preventDefault()
// setLoaderState(true)
    emailjs.sendForm("service_cerglzl", "template_u1fe6vc", e.target, "mG0Wc3avis-PiQsdY")
        .then(res=> {
        // setLoaderState(false)
            setSubmit(!submit)
          })
}
  
  return (
    <Fragment>
      
      <article className='px-3 bg-[#080A0C] pt-6 lg:pt-0'>
        <div className='bg-[#080A0C] text-white flex flex-col md:flex-row md:justify-evenly md:pt-24 pb-6 '>
          <div>
            <Link to='/faq' className=' md:text-lg font-medium mb-4 '>COMPANY</Link>
            <div>
              <ul>
                <li className='mb-4'>
                  <Link to='/about' className='md:text-base text-xs text-[#DAE0E7] font-medium' >About Moncod</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Affiliate</Link>
                </li>
                 <li className='mb-4'>
                  <a href='https://blog.mooncod.io' target='blank' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Blog</a>
                 </li>
                <li className='mb-4'>
                  <Link to='/' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Digital Asset Disclosures</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/policies' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Legal & Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=' md:text-lg font-medium mb-4 '>PRODUCTS</p>
            <div>
              <ul>
                <li className='mb-4'>
                  <Link to='download' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Desktop Wallet</Link>
                </li>
                <li className='mb-4'>
                  <Link to='download' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Mobile Wallet</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=' md:text-lg font-medium mb-4 '>SUPPORT</p>
            <div>
              <ul>
                <li className='mb-4'>
                  <Link to='support' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Support</Link>
                </li>
                <li className='mb-4'>
                  {/* <Link to='/' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Legal Inquires</Link> */}
                </li>
                {/* <li className='mb-4'>
                  <Link to='/' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Status</Link>
                </li> */}
                <li className='mb-4'>
                  <Link to='/terms' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Terms and Conditions</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='md:text-base text-xs text-[#DAE0E7] font-medium' >Enquires and Sponsorship</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=' md:text-lg font-medium mb-4 '>JOIN OUR COMMUNITY</p>
            <div className=''>
              <p className='w-80 mb-4 md:text-lg sm:text-sm text-xs'>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form action="" className='w-[80%] md:w-[60%] lg:w-full' onSubmit={sendEmail}>
                <input type="text" placeholder='Enter your email address' className=' bg-inherit appearance-none border-[#fff]  border-2 py-3 px-3 w-full md:w-72 rounded-full outline-none text-white mb-4'/>
                <br />
                <button className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] w-full md:w-72 py-3 rounded-full'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className=' pb-14 flex flex-col md:flex-row justify-between md:justify-center '>
          <div className='flex sm:flex-row flex-col items-start py-3  justify-start sm:items-center md:w-1/2'>
            <img src={logo} alt=""  className=' md:border-r-2 border-[#fff] pr-8 '/>
            <p className='text-white md:text-base sm:text-sm lg:mx-4 text-xs sm:pt-0 pt-4'>© <span>{year}</span> Moncod - All Rights Reserved</p>
          </div>
          <div className='text-white w-1/3 flex justify-evenly items-center'>
            <a href="https://www.facebook.com/moodcod452" target={'_blank'} rel="noreferrer">
            <FacebookOutlined/>
            </a>
            <a href="https://www.twitter.com/MoodcodWallet" target={'_blank'} rel="noreferrer">
            <TwitterOutlined/>
            </a>
            <a href="https://www.reddit.com/r/Moodcod" target={'_blank'} rel="noreferrer">
            <RedditCircleFilled/>
            </a>
            <a href="https://www.instagram.com/mooncodwallet" target={'_blank'} rel="noreferrer">
              <InstagramOutlined/>
            </a>
            <a href="https://t.me/mooncod" target={'_blank'} rel="noreferrer">
             <FaTelegram/>
            </a>

            {/* <GithubOutlined/> */}
            {/* <GoogleOutlined/> */}
            {/* <LinkedinFilled/> */}
            {/* <SlackOutlined/> */}
            {
                                submit && <Example paragraph='' header='Thank You For Subscripting to Our Newsletter'/>
                            }

          </div>
        </div>
      </article>
      
    </Fragment>
  )
}

export default Footer