import React, { useState } from 'react'

const MySubmissionFaq = ({ question, answer }) => {

    const [show, setShow] = useState(false);
    return (
        <>
            

                <div className=' relative left-80 w-3/5 mb-10 text-center mt-4 shadow-2xl rounded-3xl shadow-gray-400   p-5 '>
                    <div className='text-start mt-6 w-full   relative content-center ' >
                        <h2 className=' w-full justify-self-start text-indent: 0.125rem; relative tracking-wide text-2xl hover:underline'> {question}</h2>
                    </div>
               
                    <div className='relative text-xl mb-2 flex  content-start text-slate-500  tracking-wide '>
                        {show && <p className=" flex text-start content-start "> {answer} </p>}
                    </div>
                </div>
            <div className=' relative bottom-3'>
                <p onClick={() => setShow(!show)} className="text-3xl cursor-pointer text-center  hover:text-blue-600 bottom-16 relative right-2" > {show ? "^" : "⌄"}</p>
            </div>


        </>
    )
}

export default MySubmissionFaq