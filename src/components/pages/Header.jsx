import React from 'react'
import wallet from '../../assets/walletbackgroundgradient.webp'
import Navigation from '../navigation/navigation.component';

import '../../index.css'


//bg-[#181E25]
const Header =(props)=> {
    return (
        <header className="h-full w-full" style={{backgroundImage:{wallet}}}>
            <Navigation/>
        {props.children}
        </header>
    )
}

export default Header