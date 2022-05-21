import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import githubIcon from '../icon_sox/github.png'
import vkIcon from '../icon_sox/vk-logo.png'
import telegramIcon from '../icon_sox/telegram.png'
import linkedInIcon from '../icon_sox/linkedin.png'
import menu_open from '../icon_sox/menu_open.svg'
import menu_close from '../icon_sox/menu_close.svg'

export function Menu({ isOpen, setOpen }) {
	const toggleMenu = () => {
		setOpen();
		document.body.style.overflow = isOpen ? 'auto' : 'hidden'
	}
		return(
			<> 
		<div className={ "fixed top-0 left-0 z-10 flex" + 
				( isOpen ? ' w-screen h-screen' : '' )
				}>
			<div className="menu" onClick={() => { toggleMenu() }}>
				<img src={( isOpen ? menu_close : menu_open )} alt="" className='w-10'/>
			</div>
				<AnimatePresence>
						{
						isOpen && (
			<motion.div
							initial={{ width: 0, opacity:0 }}
							animate={{ width: '50vw', opacity:1 }}
							exit={{ width: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}

							class="w-6/12 h-screen bg-site-100 flex flex-col justify-center items-center">
				<menu className='flex flex-col justify-center gap-y-5'>
					<Link to='/' onClick={() => { toggleMenu() }}><span className='font-code text-6xl font-bold'>Главная</span></Link>
					<Link to='/' onClick={() => { toggleMenu() }}><span className='font-code text-6xl font-bold'>Мои работы</span></Link>
					<Link to='/blog' onClick={() => { toggleMenu() }}><span className='font-code text-6xl font-bold'>Блог</span></Link>
					<div className='flex w-full justify-between'>
						<img src={githubIcon} alt="" className='w-10'/>
						<img src={vkIcon} alt="" className='w-10'/>
						<img src={telegramIcon} alt="" className='w-10'/>
						<img src={linkedInIcon} alt="" className='w-10'/>
					</div>
				</menu>
			</motion.div>
						)
						}
				</AnimatePresence>
		</div>
			</>
		)
}

// TODO Надо сделать чтобы меню открывалось
