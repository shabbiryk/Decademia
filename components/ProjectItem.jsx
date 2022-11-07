import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const ProjectItem = ({ title, backgroundImg, projectUrl, projDesc, fundedAmt, fundedBy,stage }) => {
  return (
    <div className='items-center justify-center cursor-pointer w-full shadow-xl shadow-gray-400 rounded-lg p-3 group '>
      <Image className='rounded-md bg-contain bg-center' src={backgroundImg} alt='/' />
      <div className='flex justify-start '>
        <h3 className='text-2xl text-gray-900 tracking-wider hover:underline '>{title}</h3>
      </div>
        <h3 className='rounded-full  bg-blue-100 text-green-800 w-2/3 p-4 text-center mt-4 mb-2 '>{stage} </h3>

      <div className=' justify-start items-center  '>
        <p className='text-xl mt-2 text-slate-400 tracking-wide '>{projDesc}</p>
        <br />
        <Link href="/ProjectDetails">
          <button className="text-center py-3 w-full rounded-lg  text-white font-bold text-xl cursor-pointe hover:text-white-400">
            More Info
          </button>
        </Link>
      </div>
      <br />

      <div className='relative grid mt-1 justify-start items-center  '>
        <h3 className='text-xl text-gray-900  text-center'>{fundedAmt}</h3>
        <p> {fundedBy}</p>
      </div>

    </div>
  )
}

export default ProjectItem