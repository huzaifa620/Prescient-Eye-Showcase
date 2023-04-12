import Header from './Header'
import Home from './Home';
import logo from './logo4.png'

function App() {
  return (
    <div className="bg-gradient-to-b from-[#f1f3f2] to-[#d6d8d6] dark:from-[#141414] dark:to-[#2b2a2a] dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-teal-800/20 scrollbar-thumb-[#141414] dark:scrollbar-thumb-[#f1f3f2] text-sm">

      <Header />

      <section id='home' className='snap-center'>
        <div className="relative bg-cover bg-center h-screen">
          <div className="absolute inset-0 mt-[11%] flex justify-center z-0 text-[300px] font-semibold opacity-10 text-black dark:text-white">
            {/* <img className='rounded-full h-32 w-32' src={logo} alt=''/> */}
            Prescient Eye
          </div>
          <div className="relative z-10">
            <Home />
          </div>
        </div>
      </section>

      <section id='features' className='snap-center'>
        FEATURES
      </section>

      <section id='diagnose' className='snap-center'>
        DIAGNOSE
      </section>

      <section id='about' className='snap-center'>
        ABOUT
      </section>

      <section id='contactUs' className='snap-start'>
        Contact Us
      </section>

    </div>
  );
}

export default App;
