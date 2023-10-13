import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Filter from '../Components/Movies/Filter'
import { MoviesData } from '../Data/MoviesData'
import Movies from '../Components/Home/Movies'
import { CgSpinner } from 'react-icons/cg'

function MoviesList() {
  const MaxPage = 8
  const [page,setPage] = useState(MaxPage)
  const HandleLoadingMore = () =>{
    setPage(page+MaxPage)
  }


  return (
    <Layout>
        <div className='min-h-screen container px-2 my-6 mx-auto'>
            <Filter/>
            <h1 className='text-xl font-semibold'>Total <span className='text-subMain'>{MoviesData.length}</span> items Found</h1>
            <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
              {MoviesData.slice(0,page).map((movie,index)=>(
                <Movies data={movie} key={index}/>
              ))}
            </div>
            <div className='w-full flex-colo md:my-20 my-10'>
                <button onClick={HandleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font=semibold border border-subMain bg-main'>
                   Loading More <CgSpinner className='animate-spin'/>
                </button>
            </div>
        </div>
    </Layout>
  )
}

export default MoviesList