import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { MoviesData } from '../Data/MoviesData'
import MoviesRates from '../Components/Single/MoviesRates'
import MoviesInfo from '../Components/Single/MoviesInfo'
import MoviesCast from '../Components/Single/MoviesCast'
import Titels from '../Components/Home/Titels'
import { BsCollectionFill } from 'react-icons/bs'
import Movies from '../Components/Home/Movies'

function SingleMovie() {
    const {id} = useParams()
    const movie = MoviesData.find((movie)=>movie.name===id)
    const relatedMovies = MoviesData.filter((m)=>m.category===movie.category)
  return (
    <Layout>
        <MoviesInfo movie={movie}/>
        <div className='container mx-auto min-h-screen px-2 my-6'>
          <MoviesCast/>
          <MoviesRates movie={movie}/>
          <div className='my-16'>
              <Titels title="Related Movies" Icon={BsCollectionFill}/>
              <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                {relatedMovies.map((m,i)=>(
                  <Movies key={i} data={movie}/>
                ))}
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default SingleMovie