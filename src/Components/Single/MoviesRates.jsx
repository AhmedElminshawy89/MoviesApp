import React from 'react'
import Titels from '../Home/Titels'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Message, Select } from './UsedInputs'
import { useState } from 'react'
import Rating from '../Home/Rating'
import { UsersData } from '../../Data/MoviesData'
import { MoviesData } from '../../Data/MoviesData'

function MoviesRates({movie}) {

  const Ratings = [
    {
      title:'0 - Poor',
      value:0
    },
    {
      title:'1 - Fair',
      value:1
    },
    {
      title:'2 - Good',
      value:2
    },
    {
      title:'3 - Very Good',
      value:3
    },
    {
      title:'4 - Excellent',
      value:4
    },
    {
      title:'5 - Masterpiece',
      value:5
    },
  ]
 const [rating,setRating] = useState(0)
  return (

    <div className='my-12'>
        <Titels title="Reviews" Icon={BsBookmarkStarFill}/>
        <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 sm:p-20 rounded'>
            <div className='xl:col-span-2 w-full flex flex-col gap-8'>
              <h3 className='text-2xl font-semibold'>
                Review"{movie.name}"
              </h3>
              <p className='text-sm leading-7 font-medium text-border'>
                Write a review for this movie. It will be posted on this page. 
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              </p>
              <div className='text-sm w-full'>
                  <Select option={Ratings} label="Select Ratings" onChange={(e)=>setRating(e.target.value)}/>
              </div>
              <div className="flex mt-4 text-lg gap-2 text-star">
                <Rating value={rating}/>
              </div>
              <Message label="Message" placeholder="Make it short and sweet..."/>
              <button className='text-white bg-subMain py-3 flex-colo transitions rounded border border-subMain hover:bg-transparent'>Submit</button>
            </div>
            <div className='col-span-3 flex flex-col gap-6'>
                <h3 className='text-xl text-text font-semibold'>Reviews (56)</h3>
                <div className='w-full flex flex-col bg-main overflow-y-scroll gap-6 rounded-lg md:p-12 p-6 h-header'>
                    {UsersData.map((user,i)=>(
                        <div key={i} className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800'>
                          <div className='col-span-2 hidden md:block'>
                            <img src={user.img} alt={user.name} className='w-full h-24 rounded-lg object-cover'/>
                          </div>
                          <div className='col-span-7 flex flex-col gap-2'>
                            <h2>{user.name}</h2>
                            <p className=' text-text text-xs font-medium leading-6 '>
                              {user.desc}
                            </p>
                          </div>
                          <div className='col-span-3 flex-rows text-star border-l border-border text-xs gap-1 '>
                              <Rating value={user.rate}/>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoviesRates