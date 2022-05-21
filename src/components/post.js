import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bzsfgrkfcjubbiabbpqi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6c2ZncmtmY2p1YmJpYWJicHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5NzI4NTIsImV4cCI6MTk2ODU0ODg1Mn0.4mlbynWTUZM7i5ZK680TNFGai5ZIdCZvUdyx4whEdRk'
const supabase = createClient(supabaseUrl, supabaseKey)

export const Post = ({ isOpenPost = false, id, tags, title, description, date }) => {
	const [ tag, setTag ] = useState([])
	const [ fullTags, setTags ] = useState([])
	const [ postTags, setPostTags ] = useState([])

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

		( async function fethTags () {
			let { data: tags } = await supabase
				.from('tags')
				.select('*')
			setTags(tags)
		})();

	}, [])

	return (
			<div className={"min-h-[40px] w-full p-5 rounded-lg" + 
				( isOpenPost ? ' bg-site-200' : '' )
			}>
				<Link to={`${id}`}><h2 className="text-3xl font-extrabold">{ title }</h2></Link>
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
	)
}
