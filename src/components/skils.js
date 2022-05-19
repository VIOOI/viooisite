import { NavLink, useLocation } from 'react-router-dom'

export const Skils = ({ name, discription, link }) => {
	let location = useLocation()
	return(
		<li className="my-10"> 
			<NavLink to={location.pathname === link ? '/skils' : link}>
				<h1 className={'text-5xl font-code font-medium' + 
					( location.pathname === '/skils' ? ' text-white' : '' )
					}>{name}</h1>
			</NavLink>
				<h2 className='font-code text-site-300'>{discription ?? null}</h2>
		</li>
	)
}
