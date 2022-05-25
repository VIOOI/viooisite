import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { supabase } from '../openDatabase'

export const Post = ({ isOpenPost = false, id, tags, title, description, date }) => {
	const [ tag, setTag ] = useState([])
	const [ fullTags, setTags ] = useState([])
	const [ postTags, setPostTags ] = useState([])
	const [ link, setLink ] = useState('')

	let datePost = new Date(date)

	tags.then(data => {
		setTag(data)
	})
	const ArrTags = () => {
		let e = []
		tag.map( t => {
			let tagst = fullTags[t.tags - 1].tags
			e = [...e, tagst]
		} )

		setPostTags( e );
	}

	useEffect(() => {
		ArrTags()
	}, [fullTags])

	useEffect(() => {

		if ( window.matchMedia('(max-width: 1024px)').matches ){
			setLink(`/m/blog/${id}`)
		} else {
			setLink(`${id}`)
		}
		( async function fethTags () {
			let { data: tags } = await supabase
				.from('tags')
				.select('*')
			setTags(tags)
		})();

	}, [])

	return (
			<Link to={`${link}`}>
			<div className={"min-h-[40px] w-full p-5 rounded-lg hover:bg-site-200 transition duration-300" + 
				( isOpenPost ? ' bg-site-200' : '' )
			}>
				<h2 className="text-3xl font-extrabold">{ title }</h2>
				<p className="text-sm text-site-300 leading-4">{ description }</p>

			<div className="flex justify-start items-center gap-x-2 mt-3">
				<time 
					dateTime={`${datePost.getDay()}.${datePost.getMonth()}.${datePost.getFullYear()}`}
					className="text-xs"
					>
					{`${datePost.getDay()}.${datePost.getMonth()}.${datePost.getFullYear()}`}
				</time>
			{
			postTags.map( ( tagg, index ) => {
					return (
						<span key={index} className="bg-blue-400 rounded py-0.5 px-2 text-xs">{ tagg }</span>
					)
			})
			}
			</div>
			</div>
		</Link>
	)
}
