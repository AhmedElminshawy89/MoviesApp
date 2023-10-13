import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/1.jpg'
import { FaHeart } from 'react-icons/fa'

function Movies({data}) {
  return (
    <>
        <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden'>
            <Link to={`/movie/${data.name}`} className='w-full'>
            <img src={data.image} alt={data.name} className='w-full h-64 object-cover'/>
            </Link>
            <div className='absolute bottom-0 right-0 left-0 p-5 gap-2 bg-main bg-opacity-60 flex-btn'>
                <span className='font-semibold truncate text-lg'>{data.name}</span>
                <button className='h-9 w-9 text-sm flex-colo transitions bg-subMain p-2 rounded hover:bg-transparent border-2 border-subMain '><FaHeart/></button>
            </div>
        </div>
    </>
  )
}

export default Movies