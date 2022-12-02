import Container from "../Container/Container";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';


const navBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.wrapper}>
          <a href="/" className={styles.navIcon}><i className='fa fa-tasks'></i></a>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default navBar