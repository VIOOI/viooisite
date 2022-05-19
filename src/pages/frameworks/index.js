import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { MFramework } from '../../components/framewor'
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

export const FrameworksPage = () => {
	return (
	<>
		<div className="frameworks_page">
			<div className="frameworks_info">
				<Outlet />
			</div>
			<motion.div className="frameworks_list relative"
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					>
				<ul>
					<MFramework custom={1} variants={skilsAnimation} name={'Redux-toolkit'} discription={''} link='redux-toolkit' />
					<MFramework custom={2} variants={skilsAnimation} name={'React-router'} discription={''} link='react-router' />
					<MFramework custom={3} variants={skilsAnimation} name={'Framer-motion'} discription={''} link='framer-motion' />
				</ul>
					<Link to='/skils' className='text-2xl font-code absolute bottom-5 right-5'>{`<— Назад`}</Link>
			</motion.div>
		</div>
	</>
	)
}

