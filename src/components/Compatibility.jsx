import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Compatibility = () => {
  return (
    <div className='w-full smallbtn text-icon bg-green-100 text-green-800 rounded-md text-sm'>
      <FontAwesomeIcon icon={faCircleInfo} />
      <p>No Compatibility issues found.</p>
    </div>
  )
}

export default Compatibility
