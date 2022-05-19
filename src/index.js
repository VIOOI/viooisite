import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './index.sass';

import { App } from './App';

import { SkilsPage } from './pages/skils'
import { ReactPage } from './pages/skils/react'
import { NextPage } from './pages/skils/next'
import { TailwindPage } from './pages/skils/tailwind'
import { DecsriptionSkils } from './pages/skils/description'

import { FrameworksPage } from './pages/frameworks'
import { FrameworkDescription } from './pages/frameworks/frameworkPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter >
		<Routes>
			<Route path='/' element={ <App /> } >

				<Route path='/' element={ <Navigate to={'/skils'} replace /> } />
				<Route path='skils' element={ <SkilsPage /> } >
					<Route path='' element={ <DecsriptionSkils /> } />
					<Route path='react' element={ <ReactPage /> } />
					<Route path='next' element={ <NextPage /> } />
					<Route path='tailwind' element={ <TailwindPage /> } />
				</Route>

				<Route path='frameworks' element={ <FrameworksPage /> } >
					<Route path=':name' element={ <FrameworkDescription /> } />
				</Route>

			</Route>
		</Routes>
	 </BrowserRouter>
);
