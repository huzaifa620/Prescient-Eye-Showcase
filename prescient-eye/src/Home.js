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
        <div className='w-full h-screen flex items-center space-x-6 p-6 font-serif'>

            <div className='w-1/2 h-fit flex flex-col items-center space-y-2'>
                <div className='rounded-2xl overflow-hidden'>
                    <video ref={videoRef} controls muted>
                    <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className='text-lg text-red-500 font-semibold'>
                    Live video feed
                </div>
            </div>

            <div className='flex items-center justify-center w-1/2 h-[75%] space border-2 border-black dark:border-white rounded-2xl p-4'>

                <motion.img initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'linear', duration: 3 }}
                    src='https://i.guim.co.uk/img/media/9aacc4e4d293add824ee516e5bde4e80256d070e/836_0_3103_1863/master/3103.jpg?width=620&quality=85&dpr=1&s=none'
                    alt=''
                    className='h-80 w-80 object-cover'
                />

                <div className='dark:bg-gray-600 bg-gray-400 p-4 max-w-[60%] h-[55%] flex flex-col justify-center shadow-2xl'>
                    <div className='flex flex-col border-b-2 py-4'>
                        <h1 className='text-2xl font-bold tracking-widest'>Hasna Aït Boulahcen</h1>
                        <p>Age: 26</p>
                    </div>
                    <div className='flex flex-col border-b-2 py-4'>
                        <h1 className='text-lg font-bold tracking-widest'>NATIONALITY</h1>
                        <p className=''>French</p>
                    </div>
                    <div className='flex flex-col border-b-2 py-4'>
                        <h1 className='text-lg font-bold tracking-widest'>HISTORY</h1>
                        <p className='text-justify'>Hasna Aït Boulahcen was a French-Moroccan woman who was born on January 1, 1989, in Clichy-la-Garenne, a suburb of Paris, France. She was known for her involvement in the November 2015 Paris attacks, which claimed the lives of 130 people.</p>
                    </div>
                    <div className='text-lg flex flex-col py-4'>
                        <h1 className='font-bold tracking-widest'>ORGANIZATION</h1>
                        <p className='text-sm'>ISIS (Daesh)</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home