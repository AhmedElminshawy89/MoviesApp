import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../images/logo.png';


function Footer() {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({isActive})=>(isActive?'text-subMain':hover)
  const Links = [
    {
      title:'Company',
      links:[
        {
          name:'Home',
          link:'/'
        },
        {
          name:'About Us',
          link:'/about-us'
        },
        {
          name:'Contact Us',
          link:'/contact-us'
        },        {
          name:'Movies',
          link:'/movies'
        },
      ]
    },
    {
      title:'Top Categories',
      links:[
        {
          name:'Action',
          link:'#'
        },
        {
          name:'Romantic',
          link:'#'
        },
        {
          name:'Drama',
          link:'#'
        },        {
          name:'Historical',
          link:'#'
        },
      ]
    },
    {
      title:'My Account',
      links:[
        {
          name:'Dashboard',
          link:'/dashboard'
        },
        {
          name:'My Favorite',
          link:'/favorite'
        },
        {
          name:'Profile',
          link:'/profile'
        },        {
          name:'Change Password',
          link:'/password'
        },
      ]
    }
  ]
  return (
    <div className="bg-dry py-4 border=t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-7 py-10 justify-between">
          {Links.map((link,index)=>(
            <div key={index} className='col-span-1 md:col-span-2 xl:col-span lg:col-span-3 pb-3.5 sm:pb-0'>
              <h3 className='text-md lg:leading-7  font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
              <ul className='text-sm flex flex-col space-y-3'>
                {
                  link.links.map((l,i)=>(
                    <li key={i} className='flex items-baseline'>
                      <Link to={l.link} className={`text-border inline-block w-full ${hover}`}>{l.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))}
          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
            <Link to='/'>
              <img src={logo} alt='logo' className='w-2/4 object-contain h-12'/>
            </Link>
            <p className='leading-7 text-sm text-border mt-3 overflow-hidden'>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vitae.</span>
              <span className='block'>Tell:+255 754 661 423</span>
              <span>Email:info@zpunet.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer