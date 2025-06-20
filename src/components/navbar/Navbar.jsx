import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnGitHub/btnDarkMode/BtnDarkMode'
import './navbar.css'

function Navbar() {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>My</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Home
							</NavLink>
						</li>

						<li className='nav-list__item'>
							<NavLink
								to='/projects'
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/certificates'
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Certificates
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
