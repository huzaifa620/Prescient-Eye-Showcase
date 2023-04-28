import React, {useState, useEffect, useRef} from 'react'
import Typewriter from './Typewriter';
import "./styles.css";
import { motion, useScroll } from "framer-motion";

import vid1 from './vid.mp4'
import vid2 from './blast.mp4'
import vid3 from './vid.mp4'
import vid4 from './blast.mp4'
import vid5 from './vid.mp4'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img1.png'

const Home = () => {

    const [showImage, setShowImage] = useState(false);
    const [vidSrc, setVidSrc] = useState([vid1, 1])
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [section, setSection] = useState([1,0,0,0])

    const [vids, setVids] = useState([vid1, vid2, vid3, vid4, vid5])
    const [imgs, setImgs] = useState([img1, img2, img3, img4, img5])

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    const [nationality, setNationality] = useState(null)
    const [history, setHistory] = useState(null)
    const [org, setOrg] = useState(null)
    const [img, setImg] = useState('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')

    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => {
            if (video.currentTime >= 3) {
                setShowImage(true)
                setName('Shari baloch')
                setAge('30')
                setNationality('Pakistani')
                setOrg('Balochistan Liberation Army')
                setHistory("The bomber was identified as Shari Baloch, a 30-year-old female and secondary school science teacher from Kech District in Balochistan. She held bachelor's and master's degrees in education from the Allama Iqbal Open University, and had also obtained a master's degree in zoology from the University of Balochistan.")
                setImg('https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1651173337105.jpg-org')
            };
        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <div className='flex flex-col pb-12'>
            <div className='w-full h-fit flex flex-col xl:flex-row items-center xl:space-x-6 py-6 px-[2%] xl:px-[5%]'>

                <div className='w-full xl:w-1/2 h-fit flex flex-col items-center space-y-2'>
                    <div className='rounded-2xl overflow-hidden'>
                        <video ref={videoRef} autoPlay muted key={vidSrc[0]}>
                            <source src={vidSrc[0]} type="video/mp4" />
                        </video>
                    </div>
                    <div className='text-lg font-semibold text-black dark:text-white'>
                        Live video feed of Camera {vidSrc[1]}
                    </div>
                </div>

                <div className='flex flex-col xl:flex-row items-center justify-center w-full xl:w-1/2 h-fit rounded-2xl p-4 space-y-4'>
                    
                    { name ? 
                        <motion.img initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: 'linear', duration: 3 }}
                            src={img}
                            alt=''
                            className='h-44 md:h-80 w-full md:w-80 object-contain md:object-cover rounded-3xl xl:rounded-none xl:rounded-l-3xl'
                        /> 
                        :
                        <img src={img} alt='' className='h-44 md:h-80 w-full md:w-80 object-contain md:object-cover rounded-3xl xl:rounded-none xl:rounded-l-3xl' />
                    }

                    <div className='dark:text-[#f1f3f2] text-[#141414] p-4 w-full xl:max-w-[60%] xl:min-w-[60%] h-fit xl:h-[65%] flex flex-col justify-center rounded-3xl shadow-2xl'>
                        <div className='flex flex-col border-b border-[#141414] dark:border-[#f1f3f2] py-4'>
                            <h1 className='text-2xl font-bold tracking-widest'> {name ? <Typewriter text={name} delay={200} /> : "-" } </h1>
                            <p className='text-base'>Age: {age ? <Typewriter text={age} delay={500} /> : "-" }</p>
                        </div>
                        <div className='flex flex-col border-b border-[#141414] dark:border-[#f1f3f2] py-4'>
                            <h1 className='text-lg font-bold tracking-widest'>NATIONALITY</h1>
                            <p className='text-base'> { nationality ? <Typewriter text={nationality} delay={200} /> : "-" } </p>
                        </div>
                        <div className='flex flex-col border-b border-[#141414] dark:border-[#f1f3f2] py-4'>
                            <h1 className='text-lg font-bold tracking-widest'>ORGANIZATION</h1>
                            <p className='text-sm'> {org ? <Typewriter text={org} delay={200} /> : "-" } </p>
                        </div>
                        <div className='text-lg flex flex-col py-4'>
                            <h1 className='text-lg font-bold tracking-widest'>HISTORY</h1>
                            <p className='text-justify text-lg'> { history ? <Typewriter text={history} delay={50} /> : "-" } </p>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className="flex w-full flex-col lg:flex-row items-center justify-center">

                <div className="flex flex-col lg:flex-row items-start justify-center w-full">
                    <svg id="progress" className="dark:stroke-white stroke-black" width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="opacity-30 dark:stroke-white stroke-black" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollXProgress }}
                        />
                    </svg>

                    <ul ref={ref} className='cam scrollbar-thin scrollbar-track-teal-800/30 dark:scrollbar-track-[#fff3] scrollbar-thumb-[#141414] dark:scrollbar-thumb-[#f1f3f2]'>
                        
                        <li className="cam rounded-3xl flex flex-col items-center justify-center space-y-8 p-4 md:p-0">
                            <p className='text-4xl font-bold'>24/7 Live Video Feed From Different Angles</p>
                            <ul className='text-justify space-y-4'>
                                <li>
                                    Continuous monitoring using multiple cameras provides proactive survilleance and enables Law Enforcemnet Agencies (LEAs) to deliver quick response to breaches.
                                </li>
                                <li>
                                    Effective automated system built to mitigate human errors and biases that results in security leaks.
                                </li>
                            </ul>
                        </li>

                        {vids.map((vid, ind) => (

                            <li key={ind} className="cam rounded-3xl flex flex-col items-center space-y-4">

                                <p className='text-xl font-bold text-black dark:text-white'>Camera {ind+1}</p>
                                <img src={imgs[ind]} alt='' className={`w-full h-full object-cover rounded-2xl ${vidSrc[1] === ind+1 && 'border-8 border-green-600'}`} onClick={() => {setVidSrc([vid, ind+1]);}} />

                            </li>

                        ))}
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Home