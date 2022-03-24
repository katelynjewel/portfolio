import { NavLink } from 'react-router-dom'
function NavBar() {

  return(
    <div id='navbar'>
      <NavLink to='/#about'>
        About
      </NavLink>
      <NavLink to='/#projects'>
        Projects
      </NavLink>
      <NavLink to='/#contact'>
        Contact
      </NavLink>
    </div>
  )
}

export default NavBar