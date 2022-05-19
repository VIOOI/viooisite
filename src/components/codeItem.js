
export const CodeItem = ({ code, className }) => {
	return (
		<div className={`home_code ${className ?? ''}`}> { code } </div>
	)
}
