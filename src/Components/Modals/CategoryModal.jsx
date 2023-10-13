import React from 'react'
import MainModal from './MainModal'
import { Input } from '../Single/UsedInputs'

function CategoryModal({modelOpen,setModalOpen,category}) {
  return (
    <MainModal modelOpen={modelOpen} setModalOpen={setModalOpen}>
        <div className='inline-block  md:w-3/5 lg:w-2/5  sm:w-4/5 max-w-md p-6 my-8 overflow-y-auto h-full text-left align-middle border border-border bg-main text-white  rounded-2xl'>
            <h2 className='text-3xl font-bold'>{category?"Update":"Create"}</h2>
            <form className='flex flex-col gap-6 text-left mt-6'>
                <Input label="Category Name" placeholder={category ? category.title : "Action"} type="text" bg={false}/>
                <button   className='bg-subMain transitions hover:bg-main flex-rows gap-4 text font-medium text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto'>
                    {category?"Update":"Create"}
                </button>
            </form>
        </div>
    </MainModal>
  )
}

export default CategoryModal