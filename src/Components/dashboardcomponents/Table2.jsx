import React from 'react'
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa';
import {MdDelete} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { GoEye } from 'react-icons/go';
const Head = "text-xs text-left text-main font-bold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-now px-5 py-3";

const Rows=(movie,i,admin,OnEditFunc)=>{
    const date = new Date().toUTCString().slice(5,16)
    return(
        <tr key={i}> 
            {
                admin ? (
                    <>
                        <td className={`${Text}`}>
                            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                                <img src={movie.img} alt={movie.name}
                                className='h-16 w-16 rounded-full object-cover' />
                            </div>
                        </td>
                        <td className={`${Text}`}>{movie._id}</td>
                        <td className={`${Text}`}>{date}</td>
                        <td className={`${Text}`}>{movie.name}</td>
                        <td className={`${Text}`}>{movie.name}@gmail.com</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                            <button className='bg-subMain rounded flex-colo w-6 h-6 text-white'>
                                    <MdDelete/>
                            </button>
                        </td>
                    </>
                ):(
                    <>
                        <td className={`${Text}`}>{movie._id}</td>
                        <td className={`${Text}`}>{date}</td>
                        <td className={`${Text}`}>{movie.title}</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                            <>
                            <button onClick={()=>OnEditFunc(movie)} className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                                    Edit <FaEdit className='text-green-500'/>
                            </button>
                            <button className='bg-subMain rounded flex-colo w-6 h-6 text-white'>
                                    <MdDelete/>
                            </button>
                            </>
                        </td>
                    </>
                )
            }
        </tr>
    )
} 

function Table2({data,admin,OnEditFunc}) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-border divide-y divide-border'>
            <thead>
                {
                    admin ? (
                        <tr className='bg-dryGray'>
                            <th scope="col" className={`${Head}`}>IMAGE</th>
                            <th scope="col" className={`${Head}`}>ID</th>
                            <th scope="col" className={`${Head}`}>Date</th>
                            <th scope="col" className={`${Head}`}>FullName</th>
                            <th scope="col" className={`${Head}`}>Email</th>
                            <th scope="col" className={`${Head} float-right flex-rows gap-2`}>Actions</th>
                        </tr>
                    ):(
                    <tr className='bg-dryGray'>
                        <th scope="col" className={`${Head}`}>ID</th>
                        <th scope="col" className={`${Head}`}>Date</th>
                        <th scope="col" className={`${Head}`}>TITLE</th>
                        <th scope="col" className={`${Head} float-right flex-rows gap-2`}>Actions</th>
                    </tr>
                    )
                }
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {data.map((movie,i)=>Rows(movie,i,admin,OnEditFunc))}
            </tbody>
        </table>
    </div>
  )
}

export default Table2