import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

export const Search = ({ value, setValue, filterPosts }) => {
	const [ isOpen, setIsOpen ] = useState(true)

	return (
	<div className="relative"> 
		<BiSearch className='text-xl absolute top-[25%] left-3'/>
		<input 
				type="text" 
				className="bg-site-200 w-full p-2 pr-2 pl-10 font-code rounded-md"
				onChange={ event => setValue( event.target.value ) }
				onClick={ () => {
					setIsOpen(true)
				}}
				value={value}
			/>
			<ul className='absolute left-0 top-12 bg-site-200 shadow-md w-full rounded-md max-h-[200px] overflow-auto'>
					{
						value && isOpen
						? filterPosts.map( post => {
						return(
							<li 
								key={post.id}
								className='font-code py-2 px-4 hover:bg-[#E5E5E5] cursor-pointer transition-colors duration-100'
								onClick={ event => {
									setValue(event.target.textContent);
									setIsOpen(false)
								} }
							>
								{ post.title }
							</li>
						)
					} )
					: null
					}
			</ul>
	</div>
	)
}
