import { NavLink, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

import { MFramework } from '../../components/framewor'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { supabase } from '../../openDatabase'

const frameworkAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ( {
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	} )
}

export const FrameworksPage = () => {
	const [ frameworks, setFrameworks ] = useState([])
	useEffect(() => {
		( async function fethPost () {
			let { data: frameworksBD, error } = await supabase
				.from('frameworks')
				.select('name')
			setFrameworks(frameworksBD)
			console.log( frameworksBD )
		})();
	}, [])
	return (
	<>
		<div className="frameworks_page">
			<div className="frameworks_info pl-14 p-5">
				<Outlet />
			</div>
			<div className="frameworks_list relative"
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					>
				<ul>
						{
						frameworks.map(( fram, index ) => {
							return(
								<MFramework 
									custom={index} 
									variants={frameworkAnimation} 
									name={fram.name.charAt(0).toUpperCase() + fram.name.slice(1)}
									discription={''} 
									link={fram.name}/>
							)
						})
						}
				</ul>
					<Link to='/' className='text-2xl font-code absolute bottom-5 right-5'>{`<— Назад`}</Link>
			</div>
		</div>
	</>
	)
}

