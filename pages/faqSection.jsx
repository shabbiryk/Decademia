import React from 'react'
import Link from 'next/link';
import Faq from "../components/faq/faq"
import Submissionfaq from '../components/SubmissionFaq/Submissionfaq';




function faqSection() {

    return (
        <>
            <div className='relative top-20 h-screen'>
                <div className='mt-5 col-span-2 w-full h-auto shadow-3xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='relative top-20 p-4'>
                        <Faq />
                    </div>
                </div>
            </div>
            
            <div className='relative p-2 mt-20 w-full h-screen'>
                <div className='mt-5 col-span-2 w-full h-auto shadow-3xl shadow-gray-400 rounded-xl lg:p-4'>
                        <Submissionfaq />

                </div>
            </div>


        </>
    )
}


export default faqSection