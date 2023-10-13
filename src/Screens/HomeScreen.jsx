import React from 'react'
import Layout from '../Layout/Layout'
import { Outlet } from 'react-router-dom'
import Banner from '../Components/Home/Banner'
import TopRated from '../Components/Home/TopRated'
import PopularMovie from '../Components/Home/PopularMovie'
import Promos from '../Components/Home/Promos'

function HomeScreen() {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-6'>
        <Banner/>
        <PopularMovie/>
        <Promos/>
        <TopRated/>
      </div>
    </Layout>
  )
}

export default HomeScreen