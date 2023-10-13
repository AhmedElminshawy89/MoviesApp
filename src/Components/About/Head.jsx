import React from 'react';
import head from '../../images/head.png'

function Head({title}) {
  return (
    <div className='w-full bg-deepGray lg:h-64 h-40E relative overflow-hidden rounded-md'>
        <img src={head} alt="aboutUs" className='w-full h-full object-cover'/>
        <div className='absolute top-0 right-0 left-0 bottom-0 w-full flex-colo bg-black bg-opacity-50'>
            <h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>{title}</h1>
        </div>
    </div>
  )
}

export default Head