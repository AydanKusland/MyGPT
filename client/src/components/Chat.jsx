import { useGlobalContext } from '../context'
import styled from 'styled-components'

export default function Chat() {
	const { currentChat } = useGlobalContext()
	return (
		<Wrapper>
			{currentChat.messages.map((message, index) => (
				<div className='wholeMessage' key={index}>
					<div className='role'>{message.role}:</div>
					<div>
						{message.content.split('\n').map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</div>
				</div>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 78vh;
	margin-bottom: 2rem;
	padding: 1.5rem 2rem;
	font-size: 1.8rem;
	line-height: 2;
	overflow-y: auto;
	gap: 1rem;
	.wholeMessage {
		background-color: var(--secondary-background);
		display: flex;
		align-items: center;
		gap: 2.2rem;
		padding: 1.3rem 1.7rem;
		border-radius: 7px;
	}
	.role {
		flex-basis: 8rem;
		text-transform: capitalize;
		text-align: center;
	}
`
