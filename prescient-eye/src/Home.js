import React, {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion';
import video from './vid.mp4'

const Home = () => {

    const [showImage, setShowImage] = useState(false);

    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
        if (video.currentTime >= 5) {
        setShowImage(true)
        };

    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
    };
    }, []);

  return (
    <div className='w-full h-screen flex items-center space-x-6 p-6'>

        <div className='w-1/2 h-fit flex flex-col items-center space-y-2'>
            <div className='rounded-2xl overflow-hidden'>
                <video ref={videoRef} controls>
                <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='text-lg'>
                Live video feed
            </div>
        </div>

        <div className='flex items-center justify-center w-1/2 h-[75%] space border-2 border-black dark:border-white rounded-2xl p-4'>

            <motion.img initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'linear', duration: 3 }}
                src='https://pbs.twimg.com/media/FHEkN7GWUA4Xyjt?format=jpg&name=small'
                alt=''
                className='h-80 w-80'
            />

            <div className='bg-gray-600 p-4 max-w-[60%] h-[55%] flex flex-col justify-center shadow-2xl'>
                <div className='flex flex-col border-b py-4'>
                    <h1 className='text-2xl font-bold tracking-widest'>Shari Baloch</h1>
                    <p>Age: 30</p>
                </div>
                <div className='flex flex-col border-b py-4'>
                    <h1 className='text-lg font-bold tracking-widest'>NATIONALITY</h1>
                    <p className=''>Pakistani</p>
                </div>
                <div className='flex flex-col border-b py-4'>
                    <h1 className='text-lg font-bold tracking-widest'>HISTORY</h1>
                    <p className='text-justify'>A native of Kech district in Balochistan, Shari was a primary school teacher. Having completed her B.Ed in 2014 and M.Ed in 2018, she completed her masters in zoology from the University of Balochistan and an MPhil from the llama Iqbal Open University.</p>
                </div>
                <div className='text-lg flex flex-col py-4'>
                    <h1 className='font-bold tracking-widest'>ORGANIZATION</h1>
                    <p className='text-sm'>Balochistan Liberation Army</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Home