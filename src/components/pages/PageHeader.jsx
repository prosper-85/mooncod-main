import React from 'react'


const PageHeader = function (props){
    return(
        <div className="mx-auto w-full flex flex-col items-center justify-center px-4 md:px-0">
    <h4 className="text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center" >{props.header}</h4>
<p className="text-base font-body text-center text-white font-normal px-4 md:px-0 mt-3">{props.paragraph}</p>
    </div>
    )
}


export default PageHeader;