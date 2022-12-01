import Container from "../Container/Container";
import styles from './NavBar.modules.scss';

const navBar = () => {
  return (
    <nav className='navBar'>
      <Container>
        <div className='wrapper'>
          <a href="/" className='navIcon'><i className='fa fa-tasks'></i></a>
          <ul>
            <li className='navLinks'><a href="/">Home</a></li>
            <li className='navLinks'><a href="/favorite">Favorite</a></li>
            <li className='navLinks'><a href="/about">About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default navBar