import React from 'react'
import SlideBar from './SlideBar'
import Uploader from '../../Components/dashboardcomponents/Uploader'
import { Input } from '../../Components/Single/UsedInputs'

function Profile() {
  return (
    <SlideBar>
        <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>Profile</h1>
            <Uploader/>
            <Input label="FullName" placeholder="Ahmed Elsaied" bg={true} type="text"/>                
            <Input label="Email" placeholder="netflixo@gmail.com" bg={true} type="email"/>   
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
                <button className='bg-subMain transitions hover:bg-main flex-rows gap-4 text text-white border border-subMain py-3 px-4 rounded-lg w-full sm:w-auto'>
                    Delete Account
                </button>
                <button className='bg-main transitions hover:bg-subMain flex-rows gap-4 text text-white border border-subMain py-3 px-4 rounded-lg w-full sm:w-auto'>
                    Update Profile
                </button>
            </div>
        </div>
    </SlideBar>
  )
}

export default Profile