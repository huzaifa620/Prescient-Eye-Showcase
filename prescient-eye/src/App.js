import Header from './Header'

function App() {
  return (
    <div className="bg-[#f1f3f2] dark:bg-[#141414] dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-teal-800/20 scrollbar-thumb-teal-700 text-sm">

      <Header />

      <section id='home' className='snap-center'>
        HOME
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
