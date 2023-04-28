import Header from './Header'
import Home from './Home';
import logo from './logo4.png'
import Features from './Features';
import Diagnose from './Diagnose';
import About from './About';

function App() {
  return (
    <div className="bg-gradient-to-b from-[#f1f3f2] to-[#adadad] dark:from-[#141414] dark:to-[#494848] text-black dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-teal-800/20 scrollbar-thumb-[#141414] dark:scrollbar-thumb-[#f1f3f2] text-sm font-sans">

      <section id='home' className='border-b border-black dark:border-white'>
        <div className="relative bg-cover bg-center">
          <div className="absolute inset-0 mt-[5%] hidden md:flex justify-center z-0 text-[300px] font-semibold opacity-10 text-black dark:text-white">
            <img className='rounded-full' src={logo} alt='' />
          </div>
          <div className="relative z-10">
            <Header section={[1,0,0,0]} />
            <Home />
          </div>
        </div>
      </section>

      <section id='diagnose' className='border-b border-black dark:border-white'>
        <div className="relative bg-cover bg-center">
          <div className="absolute inset-0 mt-[5%] hidden md:flex justify-center z-0 text-[300px] font-semibold opacity-10 text-black dark:text-white">
            <img className='rounded-full' src={logo} alt='' />
          </div>
          <div className="relative z-10">
            <Header section={[0,0,0,1]} />
            <Diagnose />
          </div>
        </div>
      </section>

      <section id='features' className='border-b border-black dark:border-white'>
        <div className="relative bg-cover bg-center">
          <div className="absolute inset-0 mt-[5%] hidden md:flex justify-center z-0 text-[300px] font-semibold opacity-10 text-black dark:text-white">
            <img className='rounded-full' src={logo} alt='' />
          </div>
          <div className="relative z-10">
            <Header section={[0,0,1,0]} />
            <Features />
          </div>
        </div>
      </section>

      <section id='about' className='border-b border-black dark:border-white'>
        <div className="relative bg-cover bg-center">
            <div className="absolute inset-0 mt-[5%] hidden md:flex justify-center z-0 text-[300px] font-semibold opacity-10 text-black dark:text-white">
              <img className='rounded-full' src={logo} alt='' />
            </div>
            <div className="relative z-10">
              <Header section={[0,1,0,0]} />
              <About />
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
