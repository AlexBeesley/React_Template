import Styles from '../Styles/nav.module.scss'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className={Styles.nav}>
        {/* desktop nav */}
        <NavLink
          className={({ isActive }) =>
            isActive ? Styles.activelink : Styles.navlink
          }
          to="/"
        >
          {' '}
          Home{' '}
        </NavLink>

        {/* mobile nav */}
        <NavLink
          title="Home"
          className={({ isActive }) =>
            isActive ? Styles.activeicon : Styles.navicon
          }
          to="/"
        >
          {' '}
          <i className="fa-solid fa-house-user"></i>{' '}
        </NavLink>
      </div>
    </nav>
  )
}
