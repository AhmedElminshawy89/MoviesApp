import React from 'react';
import notfound from '../images/404.svg'
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img src={notfound} alt="NotFound" className='w-full h-96 object-contain'/>
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-semibold leading-6 text-border italic'>The page you are looking for does not exist. You may have mistyped the URL</p>
      <Link to='/' className='bg-subMain flex-rows gap-4 text-white font-medium py-2 px-4 rounded-md focus:bg-transparent border border-subMain'>
        <BiHomeAlt/> Back Home 
      </Link>
    </div>
  )
}

export default NotFound