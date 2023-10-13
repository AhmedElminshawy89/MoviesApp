import React from 'react'
import SlideBar from '../SlideBar'
import { Input, Message, Select } from '../../../Components/Single/UsedInputs'
import Uploader from '../../../Components/dashboardcomponents/Uploader'
import Filter from '../../../Components/Movies/Filter'
import { CategoriesData } from '../../../Data/CategoriesData'
import { FaEdit, FaUpload } from 'react-icons/fa'
import { UsersData } from '../../../Data/MoviesData'
import { MdDelete } from 'react-icons/md'
import CastModals from '../../../Components/Modals/CastModals'
import { useState } from 'react'
import { useEffect } from 'react'

function AddMovies() {
  const [modelOpen,setModalOpen] = useState(false)
  const [cast,setCast] = useState(null)

  useEffect(()=>{
    if(modelOpen===false){
      setCast()
    }
  },[modelOpen])
  return (
    <SlideBar>
      <CastModals modelOpen={modelOpen} setModalOpen={setModalOpen} cast={cast}/>
        <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>Create Movie</h1>
            <div className='w-full grid md:grid-cols-2 gap-6'>
              <Input label="Movies Title" placeholder="Game of Thrones" bg={true} type="text"/>                
              <Input label="Hours" placeholder="2hr" bg={true} type="text"/>                
              <Input label="Language Used" placeholder="English" bg={true} type="text"/>                
              <Input label="Year of Release" placeholder="2023" bg={true} type="number"/>                
              <div>
                <p className="text-border font-semibold mb-2">Image without Title</p>
               <Uploader/>  
              </div>   
              <div>
                <p className="text-border font-semibold mb-2">Image with Title</p>
               <Uploader/>  
              </div>  
         
            </div>
            <div className='w-full flex flex-col'>
             <Message label="Movie Description" placeholder="Make it short and sweet"/>  
            </div>
            <div className='w-full flex flex-col'>
              <Select label="Movie Category" option={CategoriesData}/>
            </div>
            <div>
                <p className="text-border font-semibold mb-2">Movie Video</p>
               <Uploader/>  
            </div>   
            <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
              <button onClick={()=>setModalOpen(true)} className='bg-main transitions  flex-rows gap-4 text text-white border border-subMain py-3 px-4 rounded-lg w-full sm:w-auto'>
                      <FaUpload/> Add Cast
              </button>
              <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                  {UsersData.map((user,index)=>(
                    <div key={index} className='p-4 italic text-xs text-text rounded flex-colo bg-main border border-border'>
                        <img src={user.img} alt={user.name} className='w-full h-full object-cover rounded'/>
                        <p>{user.name}</p>
                        <div className='flex-rows mt-2 w-full gap-2'>
                          <button className='w-6 h-6 flex-colo bg-dry text-subMain rounded border border-subMain border-dashed'>
                            <MdDelete/>
                          </button>
                          <button  onClick={()=> {
                             setCast(user)
                            setModalOpen(true)}}  className='w-6 h-6 flex-colo bg-dry text-green-600 rounded border border-subMain border-dashed'>
                            <FaEdit />
                          </button>
                        </div>
                    </div>
                  ))}
              </div>  
            </div>
            <div className='w-full flex flex-col'>
                  <button className='bg-subMain transitions hover:bg-main flex-rows gap-4 text text-white border border-subMain py-3 px-4 rounded-lg w-full sm:w-auto'>
                     <FaUpload/> Publish Movie
                  </button>
            </div>
        </div>
    </SlideBar>
  )
}

export default AddMovies