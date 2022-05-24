import { useEffect } from "react"

export const DecsriptionSkils = () => {
	useEffect( () => {
		document.title = 'Навыки';
	}, [] )
	return (
	<div className="flex justify-center items-center h-screen font-extrabold flex flex-col"> 
			<h1 className="text-5xl font-code">Описание моих основных возможностей</h1>
			<p className="font-code">Здесть представлены мои основные скилы которыми я пользовался и умею их использовать</p>
	</div>
	)
}
