import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { Fragment } from 'react'
import { useRef } from 'react'
import {IoClose} from 'react-icons/io5'

function MainModal({modelOpen,setModalOpen,children}) {
    const cancelButtonRef = useRef()
  return (
    <Fragment>
        <Transition show={modelOpen} as={Fragment} appear>
            <Dialog as='div' className="fixed inset-0 z-30 overflow-y-auto text-center" initialFocus={cancelButtonRef} onClose={()=>setModalOpen(false)}>
                <div className='min-h-screen px-4'>
                    <Transition.Child
                     as='div'
                     enter="ease-out duration-300" 
                      enterFrom='opacity-0 '
                     enterTo='opacity-100 '
                      leave="ease-in duration-200"
                       leaveFrom='opacity-200' 
                       leaveTo='opacity-0 '>
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60"/>
                        {children}
                    </Transition.Child>
                    <span className='inline-block h-screen align-middle' aria-hidde="true">
                            &#8203;
                      </span>
                      <Transition.Child
                     as='div'
                     enter="ease-out duration-300" 
                      enterFrom='opacity-0 scale-95'
                     enterTo='opacity-100 scale-100'
                      leave="ease-in duration-200"
                       leaveFrom='opacity-200' 
                       leaveTo='opacity-0 scale-95'>
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60"/>
                        {children}
                    </Transition.Child>
                    <div className='absolute right-5 top-5'>
                        <button onClick={()=>setModalOpen(false)} type='button'
                        className='inline-flex transitions justify-center px-4 py-2 text-base font-medium text-white bg-subMain rounded-md hover:bg-white hover:text-subMain'>
                            <IoClose/>
                        </button>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </Fragment>
  )
}

export default MainModal