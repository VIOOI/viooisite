import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bzsfgrkfcjubbiabbpqi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6c2ZncmtmY2p1YmJpYWJicHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5NzI4NTIsImV4cCI6MTk2ODU0ODg1Mn0.4mlbynWTUZM7i5ZK680TNFGai5ZIdCZvUdyx4whEdRk'
const supabase = createClient(supabaseUrl, supabaseKey)

export const FrameworkDescription = () => {
	const [ desc, setDesc ] = useState('')
	const { name } = useParams()
	console.log( name )
	useEffect(() => {
		( async function fethPost () {
			let { data: framework, error } = await supabase
				.from('frameworks')
				.select('description')
				.eq('name', `${name}`)
			console.log( framework[0].description )
			setDesc(framework[0].description)
		})();
	}, [name])

	return(
		<div className=''>
				<ReactMarkdown children={desc} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} className='markdown' components={{
					code: Component,
				}} />
		</div>
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

