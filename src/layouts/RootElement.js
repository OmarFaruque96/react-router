import {NavLink, Outlet} from 'react-router-dom';

export default function RootElement() {
  return (
    <div className='root-element'>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/careers">Careers</NavLink>
          </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
