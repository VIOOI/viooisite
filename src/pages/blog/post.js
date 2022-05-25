import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { supabase } from '../../openDatabase'

export const PostPage = () => {
	const [ post, setPost ] = useState([{post: ''}])
	const { number } = useParams()
	const [ isMobile, setIsMobile ] = useState(false)


	useEffect(() => {
		if ( window.matchMedia('(max-width: 1024px)').matches ){
			setIsMobile(true)
		}
		( async function fethPost () {
			let { data: blog } = await supabase
				.from('blog')
				.select('post,title')
				.eq('id', `${number}`)
				setPost(blog)
				document.title = `${blog[0].title}`;
		})();
	}, [number])

	return(
		<div className='relative'>
			<Link to={'/m/blog'} > 
				<div className='flex justify-center items-center w-14 h-14 rounded-full bg-site-400 text-white font-extrabold fixed bottom-5 right-5'>
					{' << '}
				</div>
			</Link>
			<ReactMarkdown children={post[0].post} remarkPlugins={[remarkGfm]} className='markdown' components={{
				code: Component,
			}} />
		</div>
	)
}

const Component = (props) => {
  return (
    <SyntaxHighlighter language={props.className} style={githubGist} >
			{ props.children[0] }
    </SyntaxHighlighter>
  );
};
