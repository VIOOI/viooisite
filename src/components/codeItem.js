
export const CodeItem = ({ code, className }) => {
	return (
		<div className={`font-code text-site-300 text-xl ${className ?? ''}`}> { code } </div>
	)
}
