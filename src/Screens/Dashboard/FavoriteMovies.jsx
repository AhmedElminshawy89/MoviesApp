import React from 'react'
import SlideBar from './SlideBar'
import Table from '../../Components/dashboardcomponents/Table'
import { MoviesData } from '../../Data/MoviesData'

function FavoriteMovies() {
  return (
    <SlideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Favorites Movies</h2>
               <button className='bg-main transitions hover:bg-subMain flex-rows gap-4 text font-medium text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto'>
                    Delete All
                </button>
            </div>
            <Table data={MoviesData} admin={false}/>
        </div>
    </SlideBar>
  )
}

export default FavoriteMovies