import React from 'react'
import SlideBar from '../SlideBar'
import { UsersData } from '../../../Data/MoviesData'
import Table2 from '../../../Components/dashboardcomponents/Table2'
import { FaPlus } from 'react-icons/fa'

function Users() {
  return (
    <SlideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Users</h2>
            </div>
            <Table2 data={UsersData}  admin={true}/>
        </div>
    </SlideBar>
  )
}

export default Users