import React from 'react';
import { Fragment } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import {BiTime} from 'react-icons/bi'

function FlexMovieItems({data}) {
  return (
    <Fragment>
    <div className='flex items-center gap-2 '>
        <span className='text-sm font-medium'>{data.category}</span>
    </div>
    <div className='flex items-center gap-2 '>
        <FaRegCalendarAlt className='text-subMain w-3 h-3'/>
        <span className='text-sm font-medium'>{data.year}</span>
    </div>
    <div className='flex items-center gap-2 '>
        <BiTime className='text-subMain w-3 h-3'/>
        <span className='text-sm font-medium'>{data.time}</span>
    </div>
    </Fragment>
  )
}

export default FlexMovieItems