import { Link } from 'react-router-dom'

import githubIcon from '../icon_sox/github.png'
import vkIcon from '../icon_sox/vk-logo.png'
import telegramIcon from '../icon_sox/telegram.png'
import linkedInIcon from '../icon_sox/linkedin.png'
import menu_open from '../icon_sox/menu_open.svg'
import menu_close from '../icon_sox/menu_close.svg'

export function Menu({ isOpen, setOpen }) {
	if ( isOpen ) {
		return(
			<> 
		<div className="w-screen h-screen fixed top-0 left-0 z-10 flex">
			<div className="menu" onClick={() => {
						setOpen();
						document.body.style.overflow = 'auto'
						}}>
				<img src={menu_close} alt="" className='w-10'/>
			</div>
			<div class="w-6/12 h-screen bg-site-100 flex flex-col justify-center items-center">
				<menu className='flex flex-col justify-center gap-y-5'>
					<Link to='/'><span className='font-code text-6xl font-bold'>Главная</span></Link>
					<Link to='/'><span className='font-code text-6xl font-bold'>Мои работы</span></Link>
					<Link to='/'><span className='font-code text-6xl font-bold'>Блог</span></Link>
					<div className='flex w-full justify-between'>
						<img src={githubIcon} alt="" className='w-10'/>
						<img src={vkIcon} alt="" className='w-10'/>
						<img src={telegramIcon} alt="" className='w-10'/>
						<img src={linkedInIcon} alt="" className='w-10'/>
					</div>
				</menu>
			</div>
		</div>
			</>
		)
	} else {
		return (
			<div className="menu" onClick={() => {
				setOpen() 
				document.body.style.overflow = 'hidden'
				}}>
				<img src={menu_open} alt="" className='w-10'/>
			</div>
		)
	}
}

// TODO Надо сделать чтобы меню открывалось
