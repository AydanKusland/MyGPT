import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { clearedChat } from '../utils'
import History from './History'

export default function Sidebar() {
	const { setCurrentChat } = useGlobalContext()
	return (
		<Wrapper>
			<button onClick={() => setCurrentChat(clearedChat)}>New Chat</button>
			<History />
			<footer>
				<p>Made For ME!</p>
			</footer>
		</Wrapper>
	)
}

const Wrapper = styled.aside`
	background-color: var(--secondary-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-basis: 15rem;
	flex-grow: 1;
	max-width: 30rem;
	button {
		border: solid 0.5px rgba(255, 255, 255, 0.5);
		background-color: transparent;
		border-radius: 5px;
		padding: 1rem;
		margin: 2.6rem 1.5rem 2rem 1.5rem;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 700;
	}
	footer {
		padding: 1.5rem;
		border-top: solid 0.5px rgba(255, 255, 255, 0.5);
		text-align: center;
		font-size: 1.4rem;
		font-weight: 700;
	}
`
