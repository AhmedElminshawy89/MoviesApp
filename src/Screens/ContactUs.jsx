import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Components/About/Head';
import {FiMail, FiMapPin, FiPhoneCall} from 'react-icons/fi';

function ContactUs() {

  const ContactData = [
    {
      _id:1,
      title:'Email Us',
      info:'Interactively grow backend ideas for cross-platform models.',
      icon:FiMail,
      contact:'info@zpunet.com'
    },
    {
      _id:2,
      title:'Call Us',
      info:'Distinctively exploit optimal alignments for intuitive bandwidth.',
      icon:FiPhoneCall,
      contact:'+255 789 456 123'
    },
    {
      _id:3,
      title:'Location',
      info:'Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,',
      icon:FiMapPin,
      contact:''
    },
  ]
  return (
    <Layout>
      <div className='min-h-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us"/>
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 mt-10 lg:grid-cols-3 xl:gap-8'>
              {ContactData.map((contact,index)=>(
                <div key={index} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                  <span className='flex-colo w-20 h-20 rounded-full bg-main text-subMain text-2xl'>
                    {<contact.icon/>}
                  </span>
                  <h5 className='text-2xl font-semibold mb-2 '>{contact.title}</h5>
                  <p className='mb-0 text-sm text-text leading-7'>
                    <a href={`mailto:${contact.contact}`} className='text-blue-600 '>{contact.contact}</a>
                    {' '}
                    {contact.info}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs