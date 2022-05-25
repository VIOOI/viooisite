import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import githubIcon from '../icon_sox/github.png'
import vkIcon from '../icon_sox/vk-logo.png'
import telegramIcon from '../icon_sox/telegram.png'
import linkedInIcon from '../icon_sox/linkedin.png'
import menu_open from '../icon_sox/menu_open.svg'
import menu_close from '../icon_sox/menu_close.svg'

export function Menu({ isOpen, setOpen }) {
	let location = useLocation()
	let widthMenu = '';

	const regPath = /\/blog\/.*/
	const toggleMenu = () => {
		setOpen();
		document.body.style.overflow = isOpen ? 'auto' : 'hidden'
	}
	if (	window.matchMedia('(max-width: 1024px)').matches ){
		widthMenu = '100vw'
	} else {
		if ( regPath.test(location.pathname) ) {
			widthMenu = '35vw'
		} else {
			widthMenu = '50vw'
		}
	}
		return(
			<> 
		<div className={ "fixed top-0 left-0 z-10 flex" + 
				( isOpen ? ' w-screen h-screen' : '' )
				}>
			<div className="flex flex-col gap-y-2 fixed top-10 left-10 z-10 cursor-pointer" onClick={() => { toggleMenu() }}>
				<img src={( isOpen ? menu_close : menu_open )} alt="" className='w-10'/>
			</div>
				<AnimatePresence>
						{
						isOpen && (
			<motion.div
							initial={{ width: 0, opacity:0 }}
							animate={{ width: widthMenu, opacity:1 }}
							exit={{ width: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}

							class={"h-screen bg-site-100 flex flex-col justify-center items-center" + 
												(regPath.test(location.pathname) ? ' w-full lg:w-4/12' : ' w-full lg:w-6/12')
							}>
				<menu className='flex flex-col justify-center gap-y-5'>
					<Link to='/' onClick={() => { toggleMenu() }}><span className='font-code text-6xl font-bold'>Главная</span></Link>
					<Link to='/' onClick={() => { toggleMenu() }}><span className='font-code text-6xl font-bold text-site-200'>Мои работы</span></Link>
					<Link to='/blog' onClick={() => { toggleMenu() }}><span className='font-code text-6xl font-bold'>Блог</span></Link>
					<div className='flex w-full justify-between'>
						<a href='https://github.com/VIOOI' onClick={() => { toggleMenu() }}> <img src={githubIcon} alt="" className='w-10'/> </a>
						<a href='https://vk.com/wladimil_b' onClick={() => { toggleMenu() }}> <img src={vkIcon} alt="" className='w-10'/> </a>
						<a href='https://t.me/Vl00l' onClick={() => { toggleMenu() }}> <img src={telegramIcon} alt="" className='w-10'/> </a>
						<a href='https://www.linkedin.com/in/vladimir-belov-083111206/' onClick={() => { toggleMenu() }}> <img src={linkedInIcon} alt="" className='w-10'/> </a>
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
