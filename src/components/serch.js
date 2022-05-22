import { BiSearch } from 'react-icons/bi'

export const Search = () => {
	return (
	<div className="relative"> 
		<BiSearch className='text-xl absolute top-1/4 left-5'/>
		<input type="text" className="bg-site-200 w-full p-1 px-2 pl-8 mx-3 rounded-md" />
	</div>
	)
}
