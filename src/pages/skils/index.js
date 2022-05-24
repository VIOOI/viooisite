import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import { MSkils } from '../../components/skils'
import { Outlet } from 'react-router-dom'

import { supabase } from '../../openDatabase'

const skilsAnimation = {
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

export const SkilsPage = () => {
	const [ skils, setSkil ] = useState([])
	useEffect(() => {
		( async function fethPost () {
			let { data: skilBD } = await supabase
				.from('skils')
				.select('name')
			setSkil(skilBD)
				document.title = 'Навыки';
		})();
	}, [])
	return (
	<>
		<div className="flex">
			<div className="mr-center w-6/12 h-screen overflow-y-scroll pl-14 p-5">
				<Outlet />
			</div>
					<AnimatePresence >
			<motion.div className="w-6/12 h-screen bg-site-400 text-site-300 flex justify-center items-center relative"
					initial='hidden'
					animate='visible'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					>
				<ul>
						{
						skils.map(( skil, index ) => {
							return(
								<MSkils 
									key={index}
									custom={index} 
									variants={skilsAnimation} 
									name={skil.name.charAt(0).toUpperCase() + skil.name.slice(1)}
									link={skil.name} 
								/>
							)
						})
						}
					<li className="my-10"> 
						<Link to='/frameworks'>
							<h1 className='text-2xl font-code font-medium text-site-100 absolute bottom-10 right-10'>{`Фраймворки -->`}</h1>
						</Link>
					</li>
				</ul>
			</motion.div>
					</AnimatePresence >
		</div>
	</>
	)
}
