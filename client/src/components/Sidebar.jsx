import styled from 'styled-components'
import History from './History'
import NewChatButton from './NewChatButton'

export default function Sidebar() {
	return (
		<Wrapper>
			<NewChatButton />
			<History />
			<footer>
				<p>Made For You!</p>
			</footer>
		</Wrapper>
	)
}

const Wrapper = styled.aside`
	background-color: var(--secondary-background);
	display: none;

	@media (min-width: 768px) {
		display: flex;
		flex-basis: 15rem;
		flex-grow: 1;
		max-width: 30rem;
		flex-direction: column;
		justify-content: space-between;
	}

	footer {
		padding: 1.7rem;
		border-top: solid 0.5px rgba(255, 255, 255, 0.5);
		text-align: center;
		font-size: 1.5rem;
		font-weight: 700;
	}
`
