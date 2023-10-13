import React from 'react'
import SlideBar from './SlideBar'
import { Input } from '../../Components/Single/UsedInputs'

function Password() {
  return (
    <SlideBar>
        <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>Change Password</h1>
            <Input label="Previous Password" placeholder="*****" bg={true} type="password"/>                
            <Input label="New Password" placeholder="*****" bg={true} type="password"/>                
            <Input label="Confirm Password" placeholder="*****" bg={true} type="password"/>                
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-end items-center my-4'>
                <button className='bg-main transitions hover:bg-subMain flex-rows gap-4 text text-white border border-subMain py-3 px-4 rounded-lg w-full sm:w-auto'>
                    Change Password
                </button>
            </div>
        </div>
    </SlideBar>
  )
}

export default Password