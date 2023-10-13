import React from 'react'
import Titels from '../Home/Titels'
import { FaUserFriends } from 'react-icons/fa'
import {Swiper,SwiperSlide} from 'swiper/react';
import { UsersData } from '../../Data/MoviesData'

function MoviesCast() {
  return (
    <div className='my-12'>
      <Titels title='Casts' Icon={FaUserFriends}/>
      <div className='mt-10'>
        <Swiper loop={true}
        spaceBetween = {10}
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
        }}>
          {UsersData.map((user,index)=>(
            <SwiperSlide key={index}>
              <div className='w-full p-3 italic text-text rounded flex-colo bg-main border border-gray-800'>
                <img src={user.img} alt={user.name}  className='w-full h-64 object-cover rounded mb-4'/>
                <p>{user.name}</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MoviesCast