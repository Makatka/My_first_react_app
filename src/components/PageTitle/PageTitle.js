
import './PageTitle.modules.scss'

const PageTitle = (props) => {
  return (
    <h2 className='title'>{props.children}</h2>
  )
}

export default PageTitle