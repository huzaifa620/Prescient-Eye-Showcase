import React, {useState} from 'react'
import Chart from './Chart'
import vid1 from './vid.mp4'
import vid2 from './blast.mp4'
import vid3 from './vid.mp4'
import vid4 from './blast.mp4'
import vid5 from './vid.mp4'

const Diagnose = () => {

  const [vidSrc, setVidSrc] = useState([vid1, 1])
  const [vids, setVids] = useState([vid1, vid2, vid3, vid4, vid5])

  return (
    <div className='flex w-full space-x-6 p-12 h-screen'>

      <div className='w-1/3 flex flex-col items-center justify-center space-y-12'>

        <img className='h-48 object-contain md:object-cover rounded-3xl' src='https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1651173337105.jpg-org' alt='' />

        <div className='dark:text-[#f1f3f2] text-[#141414] p-4 w-full flex flex-col rounded-3xl shadow-2xl overflow-y-auto h-[95%] scrollbar-thin scrollbar-track-teal-800/30 dark:scrollbar-track-[#fff3] scrollbar-thumb-[#141414] dark:scrollbar-thumb-[#f1f3f2]'>
          <div className='flex flex-col border-b dark:border-[#141414] py-4'>
              <h1 className='text-2xl font-bold tracking-widest'> Name: Shari Baloch </h1>
              <p className='text-base'> Age: 32 </p>
          </div>
          <div className='flex flex-col border-b dark:border-[#141414] py-4'>
              <h1 className='text-lg font-bold tracking-widest'>NATIONALITY</h1>
              <p className='text-base'> Pakistani </p>
          </div>
          <div className='flex flex-col border-b dark:border-[#141414] py-4'>
              <h1 className='text-lg font-bold tracking-widest'>ORGANIZATION</h1>
              <p className='text-sm'> Balochistan Liberation Army </p>
          </div>
          <div className='text-lg flex flex-col py-4'>
              <h1 className='text-lg font-bold tracking-widest'>HISTORY</h1>
              <p className='text-justify text-lg'>The bomber was identified as Shari Baloch, a 30-year-old female and secondary school science teacher from Kech District in Balochistan. She held bachelor's and master's degrees in education from the Allama Iqbal Open University, and had also obtained a master's degree in zoology from the University of Balochistan. A mother of two young children, the 30-year-old had posted a goodbye message on her Twitter account ten hours before she carried out the attack. The explosion triggered by the Baloch woman ripped through a van of the Confucius Institute at the University of Karachi, leaving three Chinese teachers dead and one injured and causing several Pakistani casualties.

              A native of Kech district in Balochistan, Shari was a primary school teacher. Having completed her B.Ed in 2014 and M.Ed in 2018, she completed her masters in zoology from the University of Balochistan and an MPhil from the llama Iqbal Open University.

              Her father served as a director in a government agency and was also a member of the district council for three years. Baloch's husband is a dentist while her brother-in-law a lecturer. One of her uncles is an author, a former professor and human rights campaigner, PTI reported. </p>
          </div>
        </div>

      </div>

      <div className='flex flex-col w-1/3 items-center justify-center h-full space-y-12'>

        <div className='rounded-2xl overflow-hidden'>
            <video autoPlay muted key={vidSrc[0]}>
                <source src={vid1} type="video/mp4" />
            </video>
        </div>

        <div className='flex text-lg font-semibold text-black dark:text-white space-x-6'>

          {vids.map((vid, ind) => (

            <div onClick={() => {setVidSrc([vid, ind+1]);}} className={`border rounded-3xl py-1 px-2 text-md cursor-pointer ${vidSrc[1] === ind+1 ? 'bg-[#f1f3f2] text-black hover:bg-black hover:text-[#f1f3f2]' : 'hover:bg-[#f1f3f2] hover:text-black'}`}> Camera {ind+1} </div>

          ))}

        </div>

      </div>

      <div className='w-1/3 flex flex-col items-center justify-center h-full space-y-12'>
        <div className='w-full'>
          <Chart />
        </div>
      </div>

    </div>
  )
}

export default Diagnose