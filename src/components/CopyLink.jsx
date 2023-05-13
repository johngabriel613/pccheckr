import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink} from "@fortawesome/free-solid-svg-icons"
import { CreateBtn, ShareBtn } from './Buttons'

const CopyLink = () => {
  return (
    <div className="w-full">
      <h2 className="text-sm font-semibold mb-2">
        Share your build to your friends!
      </h2>
      <div className="w-full flex flex-col gap-3 text-sm md:flex-row">
        <div className="w-full flex items-center gap-2 smallbtn rounded-md bg-gray-100">
          <FontAwesomeIcon icon={faLink} />
          <p className="line-clamp-1 break-all">
            https://pcchecker.netlify.app/Mz7skla
          </p>
        </div>
        <div className="flex gap-3">
          <ShareBtn />
          <CreateBtn />
        </div>
      </div>
    </div>
  );
}

export default CopyLink
