import React from 'react'
import Layout from '../Layout/Layout'
import logo from '../images/logo.png'
import { Input } from '../Components/Single/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

function LogIn() {
  return (
    <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 flex-colo md:w-3/5 flex-colo gap-8 p-14 bg-dry rounded-lg border border-border'>
                <img src={logo} alt="logo" className='w-full h-12 object-contain mb-6' />
                <Input label="Email" placeholder="netflixo@gmail.com" bg={true} type="email"/>                
                <Input label="Password" placeholder="*****" bg={true} type="password"/>   
                <Link to="/dashboard" className='bg-subMain transitions border border-subMain hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                  <FiLogIn/> Sign In   
                </Link>  
                <p className='text-center text-border'>
                Don't have an account? {" "}
                <Link to='/register' className='text-dryGray font-semibold ml-2'>Sign Up</Link>
                </p>           
            </div>
        </div>
    </Layout>
  )
}

export default LogIn