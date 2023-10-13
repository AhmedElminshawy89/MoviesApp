import React, { Fragment } from 'react';
import { useState } from 'react';
import { CategoriesData } from '../../Data/CategoriesData';
import { Listbox, Transition } from '@headlessui/react';
import { Selector } from 'heroicons-react';
import { FaCheck } from 'react-icons/fa';

const yearData = [
    {title:'Sort By Year'},
    {title:'1700-1800'},
    {title:'1800-1900' } ,
    {title:'1900-2000' } ,
    {title:'2000-2010' } ,
    {title:'2010-2030' } ,
]

const timesData = [
    {title:'Sort By Hours'},
    {title:'1-5 Hours'},
    {title:'5-10 Hours'},
    {title:'10-15 Hours'},
    {title:'15-20 Hours'},
]

const ratesData = [
    {title:'Sort By Rates'},
    {title:'1 Star  '},
    {title:'2 Star  '},
    {title:'3 Star  '},
    {title:'4 Star  '},
    {title:'5 Star  '},
]
function Filter() {

    const [category,setCategory] = useState({title:"Category"})
    const [year,setYear] = useState(yearData[0])
    const [time,setTime] = useState(timesData[0])
    const [rate,setRate] = useState(ratesData[0])

    const Filter =  [
        {
            value:category,
            onchange:setCategory,
            items:CategoriesData
        },
        {
            value:year,
            onchange:setYear,
            items:yearData
        },
        {
            value:time,
            onchange:setTime,
            items:timesData
        },
        {
            value:rate,
            onchange:setRate ,
            items:ratesData
        }
    ]

  return (
    <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
        {Filter.map((item,index)=>(
            <Listbox key={index} value={item.value} onChange={item.onchange}>
                <div className='relative'>
                    <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main py-4 pl-6 pr-10 text-lef rounded-md shadow-sm cursor-default focus:outline-none focus:border-dry sm:text-sm">
                        <span className='block truncate'>{item.value.title}</span>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none '>
                            <Selector className="h-5 w-5" aria-hidden="true"/>
                        </span>
                    </Listbox.Button>
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            {item.items.map((item,i)=>(
                                <Listbox.Option key={i} className={({active})=>`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                    active?"bg-subMain text-white":"text-main"}`} value={item}>
                                        {({selected})=>(
                                            <>
                                              <span className={`block truncated ${
                                                selected ? 'font-semibold':'font-normal'}`}>
                                                    {item.title}
                                            </span>
                                            {selected ? (
                                                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                                    <FaCheck className='h-5 w-5'/>
                                                </span>
                                            ):null}
                                            </>
                                        )}
                                </Listbox.Option>
                            ))}            
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        ))}
        
    </div>
  )
}

export default Filter