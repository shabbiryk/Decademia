import React, { useState } from 'react'
import MyFaq from './myfaq';

import { questions } from './questions'


const faq = () => {
    const [data, setData] = useState(questions);

  return (
    <div>
          <section className='relative mt-2 justify-start items-center'>
        <h1 className='text-4xl mb-10 text-center'>Frequently Asked Questions </h1>
        {    
            data.map((currElem)=> {
                const  {id} = currElem;
                return <MyFaq key={id} {...currElem}/>
                
            })
        }
        </section>
    </div>
  )
}

export default faq