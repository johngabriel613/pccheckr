import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const ChooseBtn = ({component}) => {
  return <button className="cta text-xs">
    + Choose a {component}
  </button>
}

export const ViewBtn = () => {
  return <button className="cta-secondary smallbtn text-sm">
    View Details
  </button>
}

export const DeleteBtn = () => {
  return <button className="cta-delete">
    <FontAwesomeIcon icon={faTrashCan}/>
  </button>
}