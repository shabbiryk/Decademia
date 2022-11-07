import React from 'react';
import proj1 from '../public/assets/projects/proj1.jpeg'
import proj2 from '../public/assets/projects/proj2.png'
import ProjectItem from './ProjectItem';
import proj3 from "../public/assets/projects/proj3.jpeg"
import proj4 from "../public/assets/projects/proj4.gif"
import proj5 from "../public/assets/projects/proj6.gif"
import ResearchProjs from './ResearchProjs';
import { useState } from 'react';
import logo from "../public/assets/decademia.png"
import Image from 'next/image';
import DISLogo from "../discord.png"


const Projects = () => {
  const [prjectData, setProjectData] = useState();
    
  return (
    <div id='projects' className='w-full'>
      <div className=''>
        <h2>.</h2>
      </div>
      <div className='relative bottom-20 '>
        <div className='relative top-20 flex justify-center items-center'>
          <Image src={logo} height="400" width="400"></Image>
          </div>
      </div>
     
      <div className='flex justify-center relative bottom-20 items-center'>
        <a href="https://discord.gg/e8hTg4d9Fc">
          <Image src={DISLogo} className="" />
        </a>
      </div>
      <div className='mx-auto  flex justify-center items-center'>
        <h2>Discover Research Projects </h2>
      </div>

      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='flex'>
          <div className='flex m-8 p-2  w-1/3'>
            
            <input
              className=' border-2 rounded-full p-2 flex border-gray-300 '
              type='text'
              name='search'
              placeholder="Search Product"
            />
          </div>
          <div className='relative left-8 flex  m-5 p-2  w-1/5'>
          {/* dropdown1 */}
          <select className='border-2 rounded-full p-3 m-3 flex border-gray-300'>
          <option value="Sort by Newest first">Sort by Newest first</option>      
          <option value="Sort by Clinical Stage">Sort by Clinical Stage</option>
          </select>
            {/* dropdown2 */}
          <select className='border-2 rounded-full p-3 m-3 flex border-gray-300'>
          <option value="Sort by Newest first">Sort by Newest first</option>
          <option value="Sort by Clinical Stage">Sort by Clinical Stage</option>
          </select>
          {/* dropdown3 */}
          <select className='border-2 rounded-full p-3 m-3 flex border-gray-300'>
          <option value="Sort by Newest first">Sort by Newest first</option>
          <option value="Sort by Clinical Stage">Sort by Clinical Stage</option>
          </select>

          </div>
        </div>
        <hr />
        <div className='p-2'>
          <h1 className='text-xl ]'>
          </h1>
          <h2 className='py-4 tracking-widest  text-[#005071]'>  Projects</h2>
        </div>

        <div className='grid md:grid-cols-3 w-full  gap-6'>
          <ProjectItem
            title='Discovering Novel Autophagy Activators Ageing'
            backgroundImg={proj1}
            stage="Early Stage"
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. Dysfunctional autophagy. "
            fundedAmt="$27,000"
            fundedBy="Amount Request"
          />

          <ProjectItem
            title='Discovery of novel mitophagy activators for Alzheimer´s disease'
            backgroundImg={proj4}
            stage="Early Stage"
            projDesc="Turning up mitophagy via pharmaceutical approaches could improve brain health" 
            fundedAmt="$20,000"
            fundedBy="Amount Request"
          /><ProjectItem
            title='Universal Coronavirus mRNA Vaccine (UCV-mRNA)'
            backgroundImg={proj5}
            stage="Prclinical"
            projDesc="A functionally biosimilar mRNA prophylactic or therapeutic vaccine, or vaccine booster, to enable sustained immunity to current and future SARS-CoV-2 variants. "
            fundedAmt="$23,000"
            fundedBy="Amount Request"
          /><ProjectItem
            title='Autoimmune Disease Treatment Without Immune Suppression'
            backgroundImg={proj3}
            stage="Preclinical"
            projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
            fundedAmt="$32,000"
            fundedBy="Amount Request"
          /><ProjectItem
            title='Discovering a novel, alternative psilocybin production pathway'
            backgroundImg={proj2}
            stage="Research"
            projDesc="Mental Health
            Inflammation
            Neuroscience/Neurology
            Regenerative medicine
            Ageing "
            fundedAmt="$25,000"
            fundedBy="Amount Request"
          />
        </div>

        <div >
          <hr />
          <div className='p-2 mt-8'>
            <hr />
            <h1 className='text-xl ]'>
            </h1>
            <h2 className='py-4 tracking-widest  text-[#005071]'>All Research Projects</h2>
          </div>

          <div className='grid md:grid-cols-4 w-full  gap-6'>
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="USA"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="UAE"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="JAPAN"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="CHINA"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="RUSSIA"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="Clinical Trials"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="UK"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="FRANCE"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="SPAIN"
              fundedAmt="$ 23,890"
            />
            <ResearchProjs
              heading="preclinical"
              title="Discovering Novel Autophagy Activators Ageing"
              type="Liver Disease"
              projDesc="Ageing is associated with the decline in the capacity of the autophagy pathway to degrade dysfunctional. "
              researcher="Nike Ainsile"
              nationality="KORIA"
              fundedAmt="$ 23,890"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;