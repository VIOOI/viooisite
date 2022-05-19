import { NavLink, Link } from 'react-router-dom'

import { Framework } from '../../components/framewor'
import { Outlet } from 'react-router-dom'

export const FrameworksPage = () => {
	return (
	<>
		<div className="frameworks_page">
			<div className="frameworks_info">
				<Outlet />
			</div>
			<div className="frameworks_list relative">
				<ul>
					<Framework name={'Redux-toolkit'} discription={''} link='redux-toolkit' />
					<Framework name={'React-router'} discription={''} link='react-router' />
					<Framework name={'Framer-motion'} discription={''} link='framer-motion' />
				</ul>
					<Link to='/skils' className='text-2xl font-code absolute bottom-5 right-5'>{`<— Назад`}</Link>
			</div>
		</div>
	</>
	)
}

