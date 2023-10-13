import React, { useEffect } from 'react'
import SlideBar from '../SlideBar'
import { FaPlus } from 'react-icons/fa'
import { CategoriesData } from '../../../Data/CategoriesData'
import Table2 from '../../../Components/dashboardcomponents/Table2'
import CategoryModal from '../../../Components/Modals/CategoryModal'
import { useState } from 'react'

function Categories() {
    const [modelOpen,setModalOpen]=useState(false)
    const [category,setCategory] = useState()

    const OnEditFunc = (id) =>{
        setCategory(id)
        setModalOpen(!modelOpen)
    }
    useEffect(()=>{
        if(modelOpen===false){
            setCategory()
        }
    },[modelOpen])
  return (
    <SlideBar>
        <CategoryModal modelOpen={modelOpen} setModalOpen={setModalOpen} category={category}/>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Categories</h2>
               <button  onClick={()=>setModalOpen(true)}
               className='bg-subMain transitions hover:bg-main flex-rows gap-4 text font-medium text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto'>
                    <FaPlus/> Create
                </button>
            </div>
            <Table2 data={CategoriesData}  admin={false} OnEditFunc={OnEditFunc}/>
        </div>
    </SlideBar>
  )
}

export default Categories