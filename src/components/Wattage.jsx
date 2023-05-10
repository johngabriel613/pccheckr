import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Wattage = () => {
  return (
    <div className='w-full flex items-center justify-between bg-yellow-500 text-white smallbtn rounded-md text-sm'>
      <div className='flex items-center gap-2'>
      <FontAwesomeIcon icon={faBolt} />
      <p>Estimated Wattage:</p>
      </div>
      <p>&gt;600watts</p>
    </div>
  )
}

export default Wattage
