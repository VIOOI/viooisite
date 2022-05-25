import { forwardRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Framework = forwardRef( ({ name, discription, link, onClick }, ref) => {
	let location = useLocation()
	return(
		<li className="my-10" ref={ref}> 
			<Link to={location.pathname === link ? '/skils' : link}>
				<h1 className={'text-3xl font-code font-medium text-white' + 
					( location.pathname === `/frameworks/${name.toLowerCase()}` ? ' text-blue-400' : '' )}
					onClick={onClick ?? null}
					>{name}</h1>
			</Link>
				<h2 className='font-code text-sm text-site-300'>{discription ?? null}</h2>
		</li>
	)
} )
export const MFramework = motion(Framework)
