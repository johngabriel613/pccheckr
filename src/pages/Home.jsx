import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProcessCard from '../components/ProcessCard'

const Home = () => {
  return (
    <div className='relative grid gap-10'>
      <section className='pt-5'>
        <div className='w-full h-2/3 pattern-wavy pattern-blue-500 pattern-bg-white 
        pattern-size-32 pattern-opacity-20 md:h-full absolute left-0 top-[-150px]'>
        </div>
        <div className='container text-center flex flex-col gap-6'>
        <h1 className='fluid-h1 font-black animate__animated animate__fadeInUp'>
          Plan, Choose, & 
          <span className='text-gradient'> Build</span>.
        </h1>
        <p className='text-slate-600 leading-relaxed text-sm md:text-base max-w-[700px] mx-auto animate__animated animate__fadeInUp animate__delay-2s'>"Discover the best parts that <span className='text-gradient'>fit your budget</span>, and start building your dream PC today! With our compatibility checker, <span className='text-gradient'>you can build with confidence</span>."</p>
        <div className='flex flex-col justify-center gap-4 md:gap-6 md:flex-row md:items-center animate__animated animate__fadeInUp animate__delay-3s'>
          <Link className='cta largebtn text-sm md:text-base' to='builder'>Get Started</Link>
          <Link className='cta-secondary largebtn text-sm flex justify-center items-center gap-2 md:text-base' to='components'>
            Browse All PC Components 
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        </div>
      </section>
      <section className=''>
        <div className='container'>
          <ProcessCard/>
        </div>
      </section>
    </div>
  )
}

export default Home
