import { forwardRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Framework = forwardRef( ({ name, discription, link }, ref) => {
	let location = useLocation()
	return(
		<li className="my-10" ref={ref}> 
			<NavLink to={location.pathname === link ? '/skils' : link}>
				<h1 className={'text-3xl font-code font-medium' + 
					( location.pathname === `/frameworks/${name.toLowerCase()}` ? ' text-white' : '' )
					}>{name}</h1>
			</NavLink>
				<h2 className='font-code text-sm text-site-300'>{discription ?? null}</h2>
		</li>
	)
} )
export const MFramework = motion(Framework)
