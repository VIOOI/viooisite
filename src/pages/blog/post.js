import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { supabase } from '../../openDatabase'

export const PostPage = () => {
	const [ post, setPost ] = useState([{post: ''}])
	const { number } = useParams()
	console.log( number )
	useEffect(() => {
		( async function fethPost () {
			let { data: blog } = await supabase
				.from('blog')
				.select('post')
				.eq('id', `${number}`)
				setPost(blog)
		})();
	}, [number])

	return(
				<ReactMarkdown children={post[0].post} remarkPlugins={[remarkGfm]} className='markdown' components={{
					code: Component,
				}} />
	)
}

const Component = (props) => {
	// console.log( props )
      // {value ?? ''}
    // <SyntaxHighlighter language={language ?? null} style={dark} >
  return (
    <SyntaxHighlighter language={props.className} style={githubGist} >
			{ props.children[0] }
    </SyntaxHighlighter>
  );
};
