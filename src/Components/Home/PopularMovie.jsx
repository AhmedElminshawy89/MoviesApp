import React from 'react';
import Titels from './Titels';
import { BsCollectionFill } from 'react-icons/bs';
import { MoviesData } from '../../Data/MoviesData';
import Movies from './Movies';

function PopularMovie() {
  return (
    <div className='my-16'>
      <Titels title="Popular Movies" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {MoviesData.slice(0,8).map((movie,index)=>(
           <Movies key={index} data={movie}/>
        ))}
      </div>
    </div>
  )
}

export default PopularMovie