import React from 'react'
import Layout from '../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { MoviesData } from '../Data/MoviesData'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa'
import v from '../images/movie.mp4'

function WatchPage() {
    const {id} = useParams()
    const movie = MoviesData.find((movie)=>movie.name===id)
    const [play,setPlay] = useState(false)
  return (
    <Layout>
        <div className='container mx-auto p-6 mb-12 bg-dry'>
            <div className='flex flex-wrap mb-6 gap-2 bg-main rounded justify-between border border-gray-800 p-6'>
                <Link to={`/movie/${movie.name}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                    <BiArrowBack className='text-2xl'/> {movie.name}
                </Link>
                <div className='flex justify-end sm:w-auto w-full gap-5'>
                    <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white px-4 py-2 rounded text-sm'>
                        <FaHeart/>
                    </button>
                    <button className='bg-subMain flex-rows gap-2 hover:bg-transparent border border-subMain transitions text-white rounded px-8 py-3 text-sm'>
                        <FaCloudDownloadAlt/> Download
                    </button>
                </div>
            </div>
            {
                play ? (
                    <video controls autoPlay={play} className='w-full h-screen rounded'>
                        <source scr={v} type='video/mp4' title={movie.name}/>
                    </video>
                ):(
                    <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                        <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                            <button onClick={()=>setPlay(true)} className='bg-subMain hover:text-main transitions flex-colo border border-subMain text-white rounded-full w-20 h-20 font-medium text-xl'>
                                <FaPlay/>    
                            </button>                        
                        </div>
                        <img src={movie.image} alt={movie.name} className='w-full h-full object-cover rounded-lg ' />
                    </div>
                )
            }
        </div>
    </Layout>
  )
}

export default WatchPage