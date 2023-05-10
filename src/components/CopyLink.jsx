import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const CopyLink = () => {
  return (
    <div className='w-full'>
      <h2 className='text-sm font-semibold mb-2'>Share your build to your friends!</h2>
      <div className='w-full flex gap-3 text-sm'>
      <div className='w-full flex items-center gap-2 border-2 smallbtn rounded-md'>
        <FontAwesomeIcon icon={faLink} />
        <p className='line-clamp-1 break-all'>https://pcchecker.netlify.app/Mz7skla</p>
      </div>
      <button className='cta smallbtn'>
        Copy
      </button>
    </div>
    </div>
  )
}

export default CopyLink
