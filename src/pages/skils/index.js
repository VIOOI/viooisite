import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { MSkils } from '../../components/skils'
import { Outlet } from 'react-router-dom'

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
	return (
	<>
		<div className="skils_page">
			<div className="skils_info">
				<Outlet />
			</div>
			<motion.div className="skils_list"
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					>
				<ul>
					<MSkils custom={1} variants={skilsAnimation} name={'ReactJS'} discription={'Javascript'} link='/skils/react' />
					<MSkils custom={2} variants={skilsAnimation} name={'NextJS'} discription={''} link='/skils/next' />
					<MSkils custom={3} variants={skilsAnimation} name={'TailwindCSS'} discription={'HTML / CSS'} link='/skils/tailwind' />
					<li className="my-10"> 
						<NavLink to='/frameworks'>
							<h1 className='text-2xl font-code font-medium text-site-300'>{`Фраймворки -->`}</h1>
						</NavLink>
					</li>
				</ul>
			</motion.div>
		</div>
	</>
	)
}
