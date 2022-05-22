import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { supabase } from '../../openDatabase'

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

