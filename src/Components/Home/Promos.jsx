import React from 'react';
import img from '../../images/mobile.png';
import {FiUser} from 'react-icons/fi'
function Promos() {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry rounded'>
      <div className='grid lg:gird lg:grid-cols-2 lg:gap-10 items-center'>
      <div className='flex lg:gap-10 gap-6 flex-col'>
        <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium leading-relaxed'>
        Download Your Movies Watch Offline.<br/>
        Enjoy On Your Mobile
        </h1>
        <p className='text-text text-sm xl:text-base leading-6 xl:leading-8 '>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries..
        </p>
        <div className='flex gap-4 md:text-lg text-sm'>
          <div className="flex-colo bg-black text-subMain px-6 py-3 rounded-md font-semibold">HD 4K</div>
          <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded-md">
            <p><FiUser/></p>
            <p className='font-semibold'>2K</p>
          </div>
        </div>
      </div>
      <div className='flex lg:gap-10 gap-6 flex-col'>
          <img src={img} className='w-full object-contain'/>
      </div>
      </div>
    </div>
  )
}

export default Promos