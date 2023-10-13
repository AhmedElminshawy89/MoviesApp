import React from 'react'
import SlideBar from '../SlideBar'
import Table from '../../../Components/dashboardcomponents/Table'
import { MoviesData } from '../../../Data/MoviesData'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'

function Dashboard() {
    const DashboardData = [
        {
            bg:'bg-orange-600',
            icon:FaRegListAlt,
            title:"Total Movies",
            total:90
        },
        {
            bg:'bg-blue-700',
            icon:HiViewGridAdd,
            title:"Total Categories",
            total:8
        }
        ,
        {
            bg:'bg-green-600',
            icon:FaUser,
            title:"Total User",
            total:134
        }
    ]
  return (
    <SlideBar>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((data,i)=>(
                <div key={i} className='p-4 rounded bg-main border border-border grid grid-cols-4 gap-4 '>
                    <div className={`col-span-1 rounded-full p-2 h-12 w-12 flex-colo ${data.bg}`}>
                        <data.icon className='text-xl'/>
                    </div>
                    <div className='col-span-3'>
                        <h2 className='text-xl font-bold'>{data.title}</h2>
                        <p className='text-xl font-bold'>{data.total}</p>
                    </div>
                </div>
            ))}
        </div>
        <h3 className='text-md text-border mb-3 font-medium italic mt-6'>Recent Movies</h3>
        <div>
            <Table data={MoviesData.slice(0,5)} admin={false}/>
        </div>
    </SlideBar>
  )
}

export default Dashboard