import { Link } from 'react-router-dom'
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

	const scrollToBottom = () => {
		let mql = window.matchMedia('(max-width: 1024px)');
		console.log( mql )
		if ( mql.matches ) {
			const pageHiedth = document.documentElement.scrollHeight 
			window.scrollTo({
				top: parseInt(pageHiedth),
				behavior: "smooth"
				})
		}
	}

	useEffect(() => {
		( async function fethPost () {
			let { data: frameworksBD } = await supabase
				.from('frameworks')
				.select('name')
				setFrameworks(frameworksBD)
				document.title = 'Фреймворки';
		})();
	}, [])
	return (
	<>
		<div className="flex flex-col-reverse lg:flex-row">
			<div className="mr-center w-full lg:w-6/12 h-screen overflow-y-scroll pl-14 p-5">
				<Outlet />
			</div>
					<AnimatePresence >
			<motion.div className="w-full lg:w-6/12 h-[50vh] lg:h-screen bg-center lg:bg-top bg-image-frameworks text-site-300 flex justify-center items-center relative"
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
									onClick={ scrollToBottom }
									link={fram.name}
									/>
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

