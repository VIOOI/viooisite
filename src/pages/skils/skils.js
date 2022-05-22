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

export const Skils = () => {
	const [ desc, setDesc ] = useState('')
	const { skil } = useParams()
	console.log( skil )
	useEffect(() => {
		( async function fethPost () {
			let { data: skils, error } = await supabase
				.from('skils')
				.select('description')
				.eq('name', `${skil}`)
			console.log( skils[0].description )
			setDesc(skils[0].description)
		})();
	}, [skil])

	return(
				<ReactMarkdown children={desc} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} className='markdown' components={{
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

