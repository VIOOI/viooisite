import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Menu } from '../../components/menu'
import { Post } from '../../components/post'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bzsfgrkfcjubbiabbpqi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6c2ZncmtmY2p1YmJpYWJicHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5NzI4NTIsImV4cCI6MTk2ODU0ODg1Mn0.4mlbynWTUZM7i5ZK680TNFGai5ZIdCZvUdyx4whEdRk'
const supabase = createClient(supabaseUrl, supabaseKey)

export const Blog = () => {
	const [ isOpen, setOpen ] = useState(false)
	const [ posts, setPost ] = useState([])

	const toggleMenu = () => setOpen( !isOpen ) 

	useEffect(() => {
		( async function fethPost () {
			let { data: blog } = await supabase
				.from('blog')
				.select('id,title,description,created_at')
			// console.log( blog )
			setPost(blog)
		})();

	}, [])

	return (
		<> 
			<Menu isOpen={isOpen} setOpen={() => { toggleMenu() }} />

			

			<div className='blog_wrapper'>
				<div className='w-4/12 min-h-screen overflow-y-scroll flex flex-col gap-5 px-5 pl-24 pt-24'>
					{
					posts.map( post => {
						// let data = new Date(post.created_at)
						async function fethTags ( id ) {
							let { data: tags_blogs } = await supabase
								.from('tags_blogs')
								.select('tags,blogs')
								.eq('blogs', `${id}`)
							return tags_blogs
						}
						let tags = fethTags(post.id)
						return(
							<Post key={post.id} id={post.id} date={post.created_at} title={post.title} description={post.description} tags={tags} />
						)
					} )
					}
				</div>
				<div className='w-8/12 min-h-screen bg-site-100'>
					<Outlet />
				</div>
			</div>

		</>
	)
}
