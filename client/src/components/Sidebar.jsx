import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { clearedChat } from '../utils'

export default function Sidebar() {
	const { chats, setCurrentChat } = useGlobalContext()
	return (
		<Wrapper>
			<button onClick={() => setCurrentChat(clearedChat)}>New Chat</button>
			<div className='history'>
				{chats.map(chat => {
					const { id, title } = chat
					return (
						<>
							<p
								key={id}
								onClick={() =>
									setCurrentChat(chats.find(item => item.id === id))
								}
							>
								{title}
							</p>
							{/* Delete Icon */}
						</>
					)
				})}
			</div>
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
	flex: 1 15rem;
	button {
		border: solid 0.5px rgba(255, 255, 255, 0.5);
		background-color: transparent;
		border-radius: 5px;
		padding: 1rem;
		margin: 1.5rem;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 700;
	}
	.history {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 1rem;
		padding-left: 1.3rem;
		height: 100%;
		p {
			cursor: pointer;
			padding: 1rem;
			font-size: 1.4rem;
			text-transform: capitalize;
		}
	}
	footer {
		padding: 1rem;
		margin: 1rem;
		border-top: solid 0.5px rgba(255, 255, 255, 0.5);
		text-align: center;
		font-size: 1.4rem;
		font-weight: 700;
	}
`
