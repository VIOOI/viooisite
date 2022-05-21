import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const supabaseUrl = 'https://bzsfgrkfcjubbiabbpqi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6c2ZncmtmY2p1YmJpYWJicHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5NzI4NTIsImV4cCI6MTk2ODU0ODg1Mn0.4mlbynWTUZM7i5ZK680TNFGai5ZIdCZvUdyx4whEdRk'
const supabase = createClient(supabaseUrl, supabaseKey)

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
