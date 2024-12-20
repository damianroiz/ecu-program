import {NavLink} from 'react-router-dom'
import { RiShoppingCartLine } from "https://esm.sh/react-icons/ri";
import { IoSearchSharp } from "https://esm.sh/react-icons/io5";
import styles from './Navbar.module.css'
import Logo from "../ui/Logo";

function Navbar() {
    return (
      <header>
      <nav className={styles.nav}>
          <Logo className={'logo'} />
        <menu>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tuning">Tuning</NavLink>
          </li>
          <li>
            <NavLink to="/service-and-repairs">Service & Repairs</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </menu>
        <div className={styles.navbarIcons}>
          <div>
            <form className={styles.searchBox}>
              <input
                type="text"
                name="txt"
                onMouseOut="this.value=''; this.blur()"
              />
              <IoSearchSharp className={styles.searchIcon} />
            </form>
          </div>
          <div>
            <NavLink to="#">
              <RiShoppingCartLine className={styles.shoppingCartIcon} />
            </NavLink>
          </div>
        </div>
      </nav>
      </header>
    );
  }

  export default Navbar;



