import Header from './Header'
import Home from './Home';

function App() {
  return (
    <div className="bg-[#f1f3f2] bg-gradient-to-b dark:from-[#141414] dark:to-[#1a1a1a] dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-teal-800/20 scrollbar-thumb-teal-700 text-sm">

      <Header />

      <section id='home' className='snap-center'>
        <Home />
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
