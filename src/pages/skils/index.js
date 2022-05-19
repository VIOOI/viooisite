import { NavLink } from 'react-router-dom'

import { Skils } from '../../components/skils'
import { Outlet } from 'react-router-dom'

export const SkilsPage = () => {
	return (
	<>
		<div className="skils_page">
			<div className="skils_info">
				<Outlet />
			</div>
			<div className="skils_list">
				<ul>
					<Skils name={'ReactJS'} discription={'Javascript'} link='/skils/react' />
					<Skils name={'NextJS'} discription={''} link='/skils/next' />
					<Skils name={'TailwindCSS'} discription={'HTML / CSS'} link='/skils/tailwind' />
					<li className="my-10"> 
						<NavLink to='/frameworks'>
							<h1 className='text-2xl font-code font-medium text-site-300'>{`Фраймворки -->`}</h1>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</>
	)
}
