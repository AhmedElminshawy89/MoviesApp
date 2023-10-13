import React from 'react';
import Titels from './Titels';
import {BsBookmarkStarFill} from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import { MoviesData } from '../../Data/MoviesData';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Rating';
// import { Navigation,Autoplay } from 'swiper';

function TopRated() {

  return (
    <div className=''>
      <Titels title='Top Rated' Icon={BsBookmarkStarFill}/>
      <div className='mt-10'>
        <Swiper 
        slidesPerView={4} 
        spaceBetween={40}
        autoplay={true}
        speed={1000}
        loop={true}
        breakpoints={{
          0:{
            slidesPerView:1
          },
          400:{
            slidesPerView:2
          },
          786:{
            slidesPerView:3
          },
          1024:{
            slidesPerView:4
          },
          1280:{
            slidesPerView:5
          },
        }}
        >
          {MoviesData.map((movie,index)=>(
            <SwiperSlide key={index}>
              <div className='relative  p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={movie.titleImg} alt={movie.name} className='w-full h-full object-cover rounded-lg'/>
                  <div className='absolute hoveres transitions p-4 gap-6 text-center bg-black bg-opacity-70 top-0 bottom-0 right-0 left-0'>
                    <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30'>
                      <FaHeart/>
                    </button>
                    <Link to={`/movies/${movie.name}`} className='font-semibold text-xl truncated line-clamp-2'>
                      {movie.name}
                    </Link>
                    <div className='flex gap-2 text-star'>
                      <Rating value={movie.rate}/>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopRated