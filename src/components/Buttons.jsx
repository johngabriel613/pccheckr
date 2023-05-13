import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faPlus, faShare} from "@fortawesome/free-solid-svg-icons"

export const ChooseBtn = ({component}) => {
  return <button className="cta smallbtn text-sm text-icon">
    <FontAwesomeIcon icon={faPlus}/>
    Choose a {component}
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

export const ShareBtn = () => {
  return (
    <button className="cta smallbtn w-full text-icon justify-center whitespace-nowrap">
      <FontAwesomeIcon icon={faShare} />
      Share to
    </button>
  );
}

export const CreateBtn = () => {
  return (
    <button className="cta-secondary smallbtn w-full text-icon justify-center whitespace-nowrap">
      <FontAwesomeIcon icon={faPlus} />
      Create new
    </button>
  );
}