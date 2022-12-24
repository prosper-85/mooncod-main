import React, { Fragment } from 'react'
import emailjs from 'emailjs-com'
import Header from '../../pages/Header'
import Example from './modalSuccess'
import { useState } from 'react'
import { Loader } from '../../pages/Explore'

const Support = () => {
    const [submit, setSubmit] = useState(false)
    const [load, setLoaderState] = useState(false)

    const sendEmail=(e)=>{
        e.preventDefault()
setLoaderState(true)
        emailjs.sendForm("service_qldwygh", "template_u1fe6vc", e.target, "mG0Wc3avis-PiQsdY")
            .then(res=> {
            setLoaderState(false)
                setSubmit(!submit)})
    }
    

  return (
    <Fragment>
        <Header>
            <div className="bg-[#080A0C] text-white lg:px-32 md:px-20 px-6 pt-32 pb-20 flex justify-center items-center">
                <div className=' bg-gradient-to-br lg:w-2/3 w-full from-[#008AED] to-[#54F0D1] p-[1px] rounded-lg '>
                    <div className=" bg-[#080a0c] rounded-lg p-5">
                        <p className='text-center text-2xl my-5 font-bold'>Send Us Your Feedback</p>
                        <form action="" onSubmit={sendEmail}>
                            <div className='w-full'>
                                <p className='mb-4 font-bold'>Feedback Type</p>
                                <div>
                                    <div className='w-full  mb-2'>
                                        <input type="text" name='feedbackType'  placeholder='Suggestion, Question, or Complaint?' className='bg-inherit border-[.5px] border-white outline-none p-3 w-full' required/>
                                    </div>
                                    {/* <div className='w-full border-[.5px] border-white p-3 mb-2'>
                                        <input type="radio"/>
                                        <label htmlFor="">Complaint</label>
                                    </div>
                                    <div className='w-full border-[.5px] border-white p-3 mb-2'>
                                        <input type="radio"/>
                                        <label htmlFor="">Question</label>
                                    </div> */}
                                </div>
                            </div>
                            <div>
                                <p className='mb-4 font-bold'>Describe Feedback</p>
                                <div>
                                    <textarea name="message" id="" cols="30" rows="10" className='w-full border-[.5px] border-white bg-inherit p-3 mb-2 outline-none text-white' required></textarea>
                                </div>
                            </div>
                            <div>
                                <p className='mb-4 font-bold'>Name</p>
                                <div className='flex flex-col md:flex-row justify-between'>
                                    <input type="text" name='firstName' placeholder='First Name' className='md:w-1/2 mx-[2px] w-full mb-2 bg-inherit border-[.5px] border-white outline-none p-3' required/>
                                    <input type="text" name='lastName' placeholder='Last Name' className='md:w-1/2 mx-[2px] w-full mb-2 bg-inherit border-[.5px] border-white outline-none p-3' required />
                                </div>
                            </div>
                            <div>
                                <p className='mb-4 font-bold'>E-mail</p>
                                <input type="email" name='user_email' placeholder='Your Email' className='bg-inherit border-[.5px] border-white outline-none p-3 w-full'/>
                            </div>
                            <div className='flex items-center justify-center py-8'>
                                <button className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white cursor-pointer ' type='submit' placeholder='Send Feedback' >
                                {load ?<Loader/>:'Submit'}
                                </button>
                            </div>
                            {
                                submit && <Example header={'Email Sent Successfully'} paragraph='                          Thank you for your feedback, we promise to get back to you soon
                                '/>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </Header>
    </Fragment>
  )
}

export default Support