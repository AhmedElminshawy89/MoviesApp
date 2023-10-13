import React from 'react'
import SlideBar from '../SlideBar'
import { MoviesData } from '../../../Data/MoviesData'
import Table from '../../../Components/dashboardcomponents/Table'
function MovieList() {
  return (
    <SlideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Movies List</h2>
               <button className='bg-main transitions hover:bg-subMain flex-rows gap-4 text font-medium text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto'>
                    Delete All
                </button>
            </div>
            <Table data={MoviesData} admin={true}/>
        </div>
    </SlideBar>
  )
}

export default MovieList