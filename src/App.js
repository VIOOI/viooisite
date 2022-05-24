import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Menu } from './components/menu'
import { CodeItem } from './components/codeItem'

export function App() {
	const [ isOpen, setOpen ] = useState(false)

	let location = useLocation()
	const pathReg = /\/frameworks(\/.*)?/

	const toggleMenu = () => setOpen( !isOpen ) 

	let skilsName = ''
	switch(location.pathname){
		case '/skils/reactjs':
			skilsName = 'ReactJS...'
			break;
		case '/skils/nextjs':
			skilsName = 'NextJS...'
			break;
		case '/skils/tailwindcss':
			skilsName = 'TailwindCSS...'
			break;
		default: 
			skilsName = 'Узнать подробнее...'
			break;
	}
	
	const scrollToBottom = () => {
		const pageHiedth = document.documentElement.scrollHeight 
		window.scrollTo({
			top: parseInt(pageHiedth),
			behavior: "smooth"
			})
	}

	useEffect( () => {
		document.title = "Главная";
		}, [] )
  return (
		<> 
			<Menu isOpen={isOpen} setOpen={() => { toggleMenu() }} />
			<div className="flex min-h-[700px]">
				<div className="w-6/12 h-screen relative flex flex-col justify-center items-center min-h-[700px]">
					<CodeItem code={'<body>'} className='absolute top-16 left-32' />
					<div className="flex flex-col gap-y-5">
						<div>
							<CodeItem code={'<h1>'} />
							<h1 className="text-7xl font-code font-extrabold ml-8 my-5">Белов <br /> Владимир</h1>
							<CodeItem code={'</h1>'} />
						</div>
						<div className="flex gap-x-5 items-center">
							<CodeItem code={'<h2>'} />
							<h2 className="font-code text-2xl">FrontEnd Development</h2>
							<CodeItem code={'</h2>'} />
						</div>
						<div>
							<CodeItem code={'<button name=«button»>'} />
							<button name="about" 
								onClick={scrollToBottom}
								className="bg-site-400 font-code text-site-100 px-14 py-5 rounded-xl my-5 ml-8"
								> {skilsName} </button>
							<CodeItem code={'</button>'} />
						</div>
					</div>
					<CodeItem code={'</body>'} className='absolute bottom-16 left-32' />
				</div>
				<div className={"w-6/12 h-screen bg-cover min-h-[700px]" +
					(pathReg.test(location.pathname) ? ' bg-site-400' : ' bg-image-home')
				}></div>
			</div>
		<Outlet />
</>
  );
}

