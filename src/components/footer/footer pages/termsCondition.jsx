import React, { Fragment } from 'react'
import Header from '../../pages/Header'

export default function TermsConditions() {
  return (
    <Fragment>
        <div>
            <Header>
                <div className="lg:px-32 lg:py-[82px] md:px-20 md:py-10 py-6 text-center px-7  flex flex-col justify-between items-center bg-[#080A0C] bg-[url('/src/assets/sectionBackground.webp')] bg-cover bg-center text-white">
                    <p className='md:py-8 py-16 md:text-3xl md:w-3/5 w-4/5 text-2xl font-bold'>Mooncod Crypto and Market Place Terms and Conditions</p>
                    <p className='md:text-lg text-sm font-normal md:w-[61%] w-[80%]'>You can always read our Terms of Service in full, but we know you’re busy so here are the highlight</p>
                    
                    
                    <p className='text-justify my-6 md:w-[70%] w-[90%]'>Mooncod Technologies, Inc. ("Mooncod", the "Company", "we", "us" or "our") is a blockchain services company focused on providing decentralised technologies such as token exchange and Decentralised wallets. Mooncod hosts a top-level domain website, https://mooncod.com/, that provides information regarding Mooncod and its service offerings, as well as subdomains for Mooncod wallet and important product information.
                    <br /><br />
                    Mooncod makes available particular software services, including Mooncod mobile wallet application and web app version (the "Wallet" or the "App"). The Wallet enables users to <br/> <br /> (i) store locally on their own devices, tokens, cryptocurrencies and other crypto or blockchain-based digital assets (collectively, "Digital Assets"); <br /> (ii) link to decentralised applications, including, without limitation, decentralised exchanges (collectively "Dapp(s)"); <br /> (iii) from the App user interface, swap assets on a w; <br /> (iv) view addresses and information that are part of digital asset networks and broadcast transactions; and <br /> (v) additional functionality as may be added to the App from time to time (collectively the "Services").
                    <br /> <br />
                    These Terms of Service (these "Terms" or this "Agreement") <br /> <br /> (i) contain the terms and conditions that govern your access to and use of the Site and Services and <br /> (ii) constitute a legally binding agreement between us and you and/or the entity you represent ("you", "your" or "user").
                    </p>
                    {/* <div className='flex justify-between items-center w-full'>
                        <p>Please read and accept the terms and conditions before proceeding</p>
                        <div>
                            <button className='bg-[#686868] py-3 px-16 rounded-3xl'>Cancel</button>
                            <button className='bg-gradient-to-r from-[#008AED] to-[#54F0D1] ml-5  py-3 px-16 rounded-3xl'>Accept</button>
                        </div>
                    </div> */}
                </div>
            </Header>
        </div>
    </Fragment>
  )
}
