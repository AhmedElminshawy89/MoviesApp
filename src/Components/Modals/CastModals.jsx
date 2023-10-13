import React from 'react'
import MainModal from './MainModal'
import { Input } from '../Single/UsedInputs'
import Uploader from '../dashboardcomponents/Uploader'

function CastModals({modelOpen,setModalOpen,cast}) {
  return (
    <MainModal modelOpen={modelOpen} setModalOpen={setModalOpen}>
        <div className='inline-block  md:w-3/5 lg:w-2/5  sm:w-4/5 max-w-md p-6 my-8 overflow-y-auto h-full text-left align-middle border border-border bg-main text-white  rounded-2xl'>
            <h2 className='text-3xl font-bold'>{cast?"Update Cast":"Create Cast"}</h2>
            <form className='flex flex-col gap-6 text-left mt-6'>
                <Input label="Cast Name" placeholder={cast ? cast.name : "Jon Doe"} type="text" bg={false}/>
                <div className='flex flex-col gap-2'>
                    <p className="text-border font-semibold mb-2">Cast Image</p>
                    <Uploader/>  
                    <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                        <img src={cast?cast.img:""} className='w-full h-full object-cover rounded' />
                    </div>
                 </div>   
                <button   className='bg-subMain transitions hover:bg-main flex-rows gap-4 text font-medium text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto'>
                    {cast?"Update":"Add"}
                </button>
            </form>
        </div>
    </MainModal>
  )
}

export default CastModals