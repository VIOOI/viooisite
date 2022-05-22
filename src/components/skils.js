import { forwardRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Skils = forwardRef( ({ name, discription, link }, ref) => {
	let location = useLocation()
	return(
		<li className="my-10" ref={ref} > 
			<NavLink to={location.pathname == `/skils/${link}` ? '/skils' : link}>
				<h1 className={'text-5xl font-code font-medium' + 
					( location.pathname === '/skils' ? ' text-white' : '' )
					}>{name}</h1>
			</NavLink>
				<h2 className='font-code text-site-300'>{discription ?? null}</h2>
		</li>
	)
} )

export const MSkils = motion(Skils)
