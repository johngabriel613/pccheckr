import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListCheck, faArrowPointer, faComputer } from "@fortawesome/free-solid-svg-icons"

export const navLinks = [
  {
    'name': 'Home',
    'path': '/'
  },
  {
    'name': 'About',
    'path': 'about'
  },
  {
    'name': 'Components',
    'path': 'components',
    'dropdowns': [
      {
        'name': 'CPU',
        'path': 'components/cpu'
      },
      {
        'name': 'Motherboard',
        'path': 'components/motherboard'
      },
      {
        'name': 'GPU',
        'path': 'components/gpu'
      },
      {
        'name': 'Memory',
        'path': 'components/memory'
      },
      {
        'name': 'PSU',
        'path': 'components/psu'
      },
    ]
  },
  {
    'name': 'Get Started',
    'path': 'builder'
  },
]

export const steps = [
  {
    'id': <FontAwesomeIcon icon={faListCheck} />,
    'title': 'Plan',
    'desc': 'Determine your needs and budget. Use our compatibility checker to find parts that meet your requirements.'
  },
  {
    'id': <FontAwesomeIcon icon={faArrowPointer} />,
    'title': 'Choose',
    'desc': 'Select the best options for your build. Compare components to ensure they work together flawlessly.'
  },
  {
    'id': <FontAwesomeIcon icon={faComputer} />,
    'title': 'Build',
    'desc': 'With our compatibility checker, you can rest assured that all parts are compatible and your build will be successful.'
  }
]
