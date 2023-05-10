import React from 'react'
import { steps } from '../constants/data'

const ProcessCard = () => {
  return (
    <div className='flex flex-col gap-8 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl p-8 lg:p-16 lg:flex-row lg:text-start isolate'>
      {steps.map((step, index) => (
        <div key={step.title} className='relative grid gap-4 w-full'>
          <span className={`bg-white w-14 h-14 mx-auto grid place-items-center rounded-full text-xl text-blue-700 font-bold lg:mx-0 ${index == steps.length - 1 ? '' : 'line'}`}>{step.id}</span>
          <h2 className='font-bold text-3xl text-white'>{step.title}</h2>
          <p className='text-slate-100'>{step.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default ProcessCard
