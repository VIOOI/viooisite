import { NavLink, useLocation } from 'react-router-dom'

export const Framework = ({ name, discription, link }) => {
	let location = useLocation()
	return(
		<li className="my-10"> 
			<NavLink to={location.pathname === link ? '/skils' : link}>
				<h1 className={'text-3xl font-code font-medium' + 
					( location.pathname === '/skils' ? ' text-white' : '' )
					}>{name}</h1>
			</NavLink>
				<h2 className='font-code text-sm text-site-300'>{discription ?? null}</h2>
		</li>
	)
}
