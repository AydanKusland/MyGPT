import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Textfield = () => {
	const { setQuery, query, handleSubmit } = useGlobalContext()
	return (
		<Wrapper onSubmit={handleSubmit}>
			<textarea
				value={query}
				required
				onChange={e => setQuery(e.target.value)}
			/>
			<button type='submit'>{'\u27a2'}</button>
		</Wrapper>
	)
}

const Wrapper = styled.form`
	width: 100%;
	max-width: 65vw;
	position: relative;
	textarea {
		background-color: rgba(255, 255, 255, 0.5);
		width: 100%;
		font-size: 2rem;
		padding: 1rem;
		border-radius: 7px;
		box-shadow: rgba(0, 0, 0, 0.1) 0 50px 50px, rgba(0, 0, 0, 0.1) 0 -12px 30px,
			rgba(0, 0, 0, 0.1) 0 4px 6px, rgba(0, 0, 0, 0.05) 0 12px 3px,
			rgba(0, 0, 0, 0.1) 0 -3px 5px;
		&:focus {
			outline: solid 2px white;
		}
	}
	button {
		position: absolute;
		top: 0.4rem;
		right: -6rem;
		font-size: 4.2rem;
		color: #b4c556;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
`

export default Textfield
