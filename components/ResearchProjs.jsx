import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ResearchProjs = ({ heading, title, type, researcher, nationality, projDesc, fundedAmt, fundedBy }) => {
    return (
        <div className='items-center justify-center cursor-pointer w-full shadow-xl shadow-gray-400 rounded-lg p-3 group '>
            <p className='flex justify-start text-gray-400 uppercase'> {heading}</p>
            <div className=' justify-start '>
                <h2 className='text-2xl mt-2 border-l justify-start text-gray-900 tracking-wider hover:underline '>{title}</h2>
            </div>
            <div className='rounded-full mt-2 bg-blue-100 text-green-800 w-1/2 p-2'>
                <h3>{type}</h3>
            </div>
            <div className=' justify-start items-center  '>
                <p className='text-xl mt-2 text-slate-400 tracking-wide '>{projDesc}</p>
                <br />
            </div>
            
            <hr />
            <div className='p-2 gap-3   grid grid-cols-2'>
                <h3 className=' text-xl top-2'>
                    {researcher}
                </h3>
                <h2 className='text-xl  top-2  '>
                    {nationality}
                </h2>
            </div>
            <hr />

            <div className='relative grid mt-2 justify-start items-center'>
                <p className='text-slate-400'>Funding Amount request </p>
                <div className='grid md:grid-cols-2 '>
                <h3 className='text-xl text-gray-900  '>{fundedAmt}</h3>
                    <h3 className='relative left-20  bg-white w-full text-center p-1 text-black rounded-full hover:bg-black hover:text-white  '> Save</h3>
                </div>
                <p> {fundedBy}</p>
            </div>


        </div>
    )
}

export default ResearchProjs