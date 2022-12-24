import { ArrowRightOutlined } from '@ant-design/icons'
import React, { Fragment } from 'react'
import Chart from '../../../assets/chart.webp'
import QuickStart from './quickstart.component'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const BuyDirectory = () => {
    const coinMarkets = async  () =>{
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
        return response.json()
    }
    const {data,status} = useQuery('data market prices', coinMarkets)
   

  return (
    <Fragment>
        <div className="bg-[#0b1f33] bg-[url('/src/assets/buyBackground.webp')] bg-cover bg-center text-[#fff] lg:px-32 md:px-7 lg:py-28 md:py-12 py-5 flex flex-col items-center justify-center">
            <div className='text-center flex items-center justify-center flex-col sm:w-2/3 w-5/6'>
                <p className='lg:text-5xl md:text-4xl text-2xl font-bold pb-4'>Low Fees, Super fast swaps</p>
                <p className='md:text-lg text-base w-4/5 lg:pb-20 md:pb-11 pb-6'>Take complete control of your assets via our one-stop services platform with bank transfer and credit card compatibility, high execution speed and low fees.</p>
            </div>
            <div className='bg-[#101419] w-full h-auto md:rounded-3xl md:py-8 py-4 sm:px-9 px-4'>
            
             {status === 'success' && 
                    data.map((coin)=>{
                        let {name, symbol, current_price, price_change_percentage_24h} = coin
                        return <div key={coin.id} className='flex justify-between items-center border-b border-b-[#2B2C3B] md:text-2xl    sm:text-base text-xs font-bold py-5'>
                                    <div className='w-1/2 flex justify-between items-center pr-4'>
                                        <p className=' w-[30%] text-[8px] sm:text-xl '>{name}</p>
                                        <p className= 'w-[20%] text-[8px] text-[#3D8DFF] sm:text-xl uppercase'>{symbol}</p>
                                        <p className=' w-[30%] flex justify-end items-end text-[8px] sm:text-xl'>${current_price.toLocaleString('en-US')}</p>
                                    </div>
                                    <div className='w-1/2 flex justify-between items-center pl-4'>
                                        <p className={price_change_percentage_24h>0? 'text-[#0DBB7C]': 'text-red-900'}>
                                            {price_change_percentage_24h>0? '+': ''}
                                            {price_change_percentage_24h.toFixed(2)}
                                        </p>
                                        <img src={Chart} alt="" className='w-[30%]' />
                                        <Link to={'download'} className='flex items-center justify-center md:text-base text-[8px]'>
                                            Trade Now <ArrowRightOutlined className='ml-4 text-[2s0px]'/>
                                        </Link>
                                    </div>
                                </div>
                    })
                }
            
                {/* <div className='flex justify-between items-center border-b border-b-[#2B2C3B] md:text-2xl sm:text-base text-xs font-bold py-5'>
                    <div className='w-1/2 flex justify-between items-center pr-4'>
                        <p>Ethereum</p>
                        <p className='text-[#3D8DFF]'>ETH</p>
                        <p>$4,345.30</p>
                    </div>
                    <div className='w-1/2 flex justify-between items-center pl-4'>
                        <p className='text-[#0DBB7C]'>+4.36%</p>
                        <img src={Chart} alt="" className='w-[30%]' />
                        <p className='flex items-center justify-center md:text-base text-[8px]'>
                            Trade Now <ArrowRightOutlined className=' text-[7px]'/>
                        </p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-[#2B2C3B] md:text-2xl sm:text-base text-xs font-bold py-5'>
                    <div className='w-1/2 flex justify-between items-center pr-4'>
                        <p>Cardano</p>
                        <p className='text-[#3D8DFF]'>ADA</p>
                        <p>$1.89.30</p>
                    </div>
                    <div className='w-1/2 flex justify-between items-center pl-4'>
                        <p className='text-[#0DBB7C]'>+3.58%</p>
                        <img src={Chart} alt="" className='w-[30%]' />
                        <p className='flex items-center justify-center md:text-base text-[8px]'>
                            Trade Now <ArrowRightOutlined className=' text-[7px]'/>
                        </p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-[#2B2C3B] md:text-2xl sm:text-base text-xs font-bold py-5'>
                    <div className='w-1/2 flex justify-between items-center pr-4'>
                        <p>Wax</p>
                        <p className='text-[#3D8DFF]'>WAXP</p>
                        <p>$0.30</p>
                    </div>
                    <div className='w-1/2 flex justify-between items-center pl-4'>
                        <p className='text-[#EA3943]'>+1.68%</p>
                        <img src={Chart} alt="" className='w-[30%]' />
                        <p className='flex items-center justify-center md:text-base text-[8px]'>
                            Trade Now <ArrowRightOutlined className=' text-[7px]'/>
                        </p>
                    </div>
                </div>
                <div className='flex justify-between items-center md:text-2xl sm:text-base text-xs font-bold py-5'>
                    <div className='w-1/2 flex justify-between items-center pr-4'>
                        <p>Polkadot</p>
                        <p className='text-[#3D8DFF]'>DOT</p>
                        <p>$43.30</p>
                    </div>
                    <div className='w-1/2 flex justify-between items-center pl-4'>
                        <p className='text-[#0DBB7C]'>+1.68%</p>
                        <img src={Chart} alt="" className='w-[30%]' />
                        <p className='flex items-center justify-center md:text-base text-[8px]'>
                            Trade Now <ArrowRightOutlined className=' text-[7px]'/>
                        </p>
                    </div>
                </div> */}
            </div>
            <QuickStart/>
        </div>
        
    </Fragment>
  )
}

export default BuyDirectory