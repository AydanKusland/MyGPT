import { useGlobalContext } from '../context'
import styled from 'styled-components'

const Chat = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 78vh;
	margin-bottom: 2rem;
	padding: 0rem 2.2rem;
	font-size: 1.85rem;
	line-height: 1.5;
	overflow-y: auto;
	gap: 1.2rem;
`

export default function CurrentChat() {
	const { currentChat } = useGlobalContext()
	return (
		<Chat>
			{currentChat.messages.map((message, index) => (
				<div className='wholeMessage' key={index}>
					<p className='role'>{message.role}:</p>
					<div>
						{message.content.split('\n').map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</div>
				</div>
			))}
		</Chat>
	)
}
