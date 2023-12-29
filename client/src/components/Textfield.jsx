import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Textfield = () => {
	const { setQuery, query, handleSubmit } = useGlobalContext()
	return (
		<Wrapper onSubmit={handleSubmit}>
			<input value={query} required onChange={e => setQuery(e.target.value)} />
			<button type='submit'>{'\u27a2'}</button>
		</Wrapper>
	)
}

const Wrapper = styled.form`
	display: flex;
	width: 95%;
	box-shadow: rgba(0, 0, 0, 0.1) 0 50px 50px, rgba(0, 0, 0, 0.1) 0 -12px 30px,
		rgba(0, 0, 0, 0.1) 0 4px 6px, rgba(0, 0, 0, 0.05) 0 12px 3px,
		rgba(0, 0, 0, 0.1) 0 -3px 5px;
	@media (min-width: 1024px) {
		width: 98%;
	}
	input {
		background-color: rgba(255, 255, 255, 0.284);
		border-top-left-radius: 7px;
		border-bottom-left-radius: 7px;
		border: none;
		width: 100%;
		font-size: 2rem;
		padding: 1rem;
		&:focus {
			outline: none;
		}
	}
	button {
		border-top-right-radius: 7px;
		border-bottom-right-radius: 7px;
		font-size: 4rem;
		color: #b4c556;
		background-color: rgba(255, 255, 255, 0.284);
		border: none;
		cursor: pointer;
	}
`

export default Textfield
