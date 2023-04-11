import React, {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion';
import video from './vid.mp4'

const Home = () => {

    const [showImage, setShowImage] = useState(false);

    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    const [name, setName] = useState('-')
    const [age, setAge] = useState('-')
    const [nationality, setNationality] = useState('-')
    const [history, setHistory] = useState('-')
    const [org, setOrg] = useState('-')

    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => {
            if (video.currentTime >= 5) {
                setShowImage(true)
                setName('Hasna Aït Boulahcen')
                setAge('26')
                setNationality('French')
                setHistory('Hasna Aït Boulahcen was a French-Moroccan woman who was born on January 1, 1989, in Clichy-la-Garenne, a suburb of Paris, France. She was known for her involvement in the November 2015 Paris attacks, which claimed the lives of 130 people.')
                setOrg('ISIS (Daesh)')
            };

        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <div className='w-full h-screen flex items-center space-x-6 py-6 px-[5%] font-sans'>

            <div className='w-1/2 h-fit flex flex-col items-center space-y-2'>
                <div className='rounded-2xl overflow-hidden'>
                    <video ref={videoRef} controls muted>
                    <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className='text-lg font-semibold'>
                    Live video feed
                </div>
            </div>

            <div className='flex items-center justify-center w-1/2 h-[75%] rounded-2xl p-4'>

                <motion.img initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'linear', duration: 3 }}
                    src='https://i.guim.co.uk/img/media/9aacc4e4d293add824ee516e5bde4e80256d070e/836_0_3103_1863/master/3103.jpg?width=620&quality=85&dpr=1&s=none'
                    alt=''
                    className='h-80 w-80 object-cover'
                />

                <div className='bg-[#141414] dark:bg-[#f1f3f2] text-[#f1f3f2] dark:text-[#141414] p-4 max-w-[60%] min-w-[60%] h-[65%] flex flex-col justify-center shadow-2xl'>
                    <div className='flex flex-col border-b dark:border-[#141414] py-4'>
                        <h1 className='text-2xl font-bold tracking-widest'> {name} </h1>
                        <p className='text-base'>Age: {age}</p>
                    </div>
                    <div className='flex flex-col border-b dark:border-[#141414] py-4'>
                        <h1 className='text-lg font-bold tracking-widest'>NATIONALITY</h1>
                        <p className='text-base'> {nationality} </p>
                    </div>
                    <div className='flex flex-col border-b dark:border-[#141414] py-4'>
                        <h1 className='text-lg font-bold tracking-widest'>HISTORY</h1>
                        <p className='text-justify text-lg'> {history} </p>
                    </div>
                    <div className='text-lg flex flex-col py-4'>
                        <h1 className='font-bold tracking-widest'>ORGANIZATION</h1>
                        <p className='text-sm'> {org} </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home