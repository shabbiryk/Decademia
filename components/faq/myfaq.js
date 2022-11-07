import React, { useState } from 'react'

const MyFaq = ({ question, answer }) => {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className=' left-20'>
                <div className='relative left-80 mb-10  mt-4 shadow-2xl rounded-3xl shadow-gray-400  w-3/5 p-1 '>
                    <div className='text-center mt-6 w-3/5   relative content-center ' >
                        <h2 className=' w-full justify-self-start relative  text-2xl hover:underline'> {question}</h2>
                        <p onClick={() => setShow(!show)} className="text-3xl cursor-pointer text-end left-80 hover:text-blue-600 bottom-8 relative " > {show ? "⌄" : "^"}</p>
                    </div>
                    <div className='relative text-xl  flex justify-start content-start text-slate-500  tracking-wide '>
                        {show && <p className=" flex content-start "> {answer} </p>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyFaq