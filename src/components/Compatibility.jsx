import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Compatibility = () => {
  return (
    <div className='w-full flex items-center gap-2 smallbtn bg-green-50 text-green-800 rounded-md text-sm'>
      <FontAwesomeIcon icon={faCircleInfo} />
      <p>No Compatibility issues found.</p>
    </div>
  )
}

export default Compatibility
