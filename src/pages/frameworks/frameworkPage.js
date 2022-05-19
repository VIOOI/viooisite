import { useParams } from 'react-router-dom'

export const FrameworkDescription = () => {
	const { name } = useParams()
	console.log( name )
	return (
	<div className="flex justify-center items-center h-screen font-extrabold"> 
			<h1 className="text-5xl font-code">{ name }</h1>
	</div>
	)
}
