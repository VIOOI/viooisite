import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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
				document.title = 'Фреймворки';
		})();
	}, [])
	return (
	<>
		<div className="flex">
			<div className="mr-center w-6/12 h-screen overflow-y-scroll pl-14 p-5">
				<Outlet />
			</div>
					<AnimatePresence >
			<motion.div className="w-6/12 h-screen bg-image-frameworks text-site-300 flex justify-center items-center text-site-100 relative"
					initial='hidden'
					animate='visible'
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
					<Link to='/skils' className='text-2xl font-code absolute bottom-10 right-10 text-site-100'>{`<— Назад`}</Link>
			</motion.div>
					</AnimatePresence >
		</div>
	</>
	)
}

