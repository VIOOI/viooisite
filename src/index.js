import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './index.sass';
import './markdown.sass'

import { App } from './App';

import { SkilsPage } from './pages/skils'
import { DecsriptionSkils } from './pages/skils/description'
import { Skils } from './pages/skils/skils'

import { FrameworksPage } from './pages/frameworks'
import { FrameworkDescription } from './pages/frameworks/frameworkPage'

import { Blog } from './pages/blog'
import { PostPage } from './pages/blog/post'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter >
		<Routes>
			<Route path='/' element={ <App /> } >

				<Route path='/' element={ <Navigate to={'/skils'} replace /> } />
				<Route path='skils' element={ <SkilsPage /> } >
					<Route path='' element={ <DecsriptionSkils /> } />
					<Route path=':skil' element={ <Skils /> } />
				</Route>

				<Route path='frameworks' element={ <FrameworksPage /> } >
					<Route path=':name' element={ <FrameworkDescription /> } />
				</Route>


			</Route>

			<Route path='blog' element={ <Blog /> } >
				<Route path=':number' element={ <PostPage /> } />
			</Route>

		</Routes>
	 </BrowserRouter>
);
