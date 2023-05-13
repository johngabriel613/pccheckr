import React from 'react'
import Table from '../components/Table'
import Summary from '../components/Summary'
import CopyLink from '../components/CopyLink'
import Wattage from '../components/Wattage'
import Compatibility from '../components/Compatibility'


const Builder = () => {
  return (
    <div className='container grid gap-3'>
      <div className='bg-white grid gap-3'>
        <CopyLink/>
        <div className='flex flex-col gap-3 lg:flex-row lg:items-end'>
        <Wattage/>
        <Compatibility/>
        </div>
      </div>
      <div className='flex flex-col gap-12 lg:flex-row '>
      <Table/>
      <Summary/>
      </div>
    </div>
  )
}

export default Builder
