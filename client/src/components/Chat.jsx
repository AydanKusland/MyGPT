import { useGlobalContext } from '../context'
import styled from 'styled-components'
import userImg from '../../public/user.png'
import assistantImg from '../../public/assistant.png'

export default function Chat() {
	const { currentChat } = useGlobalContext()
	return (
		<Wrapper>
			{currentChat.messages.map((message, index) => (
				<div className='wholeMessage' key={index}>
					<img
						className='role'
						src={message.role === 'user' ? userImg : assistantImg}
					/>
					<span>:</span>
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
	max-height: 83vh;
	margin-bottom: 1rem;
	font-size: 1.8rem;
	overflow-y: scroll;
	line-height: 1.5;
	gap: 1rem;
	max-width: var(--max-width);
	@media (min-width: 768px) {
		padding: 1rem;
	}
	@media (min-width: 1024px) {
		margin-bottom: 2.5rem;
		line-height: 2;
	}
	.wholeMessage {
		background-color: var(--secondary-background);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1rem;
		border-radius: 7px;
	}
	img {
		width: 3.5rem;
		display: inline;
	}
	span {
		margin-left: 0.3rem;
		margin-right: 1.5rem;
		font-size: 2.3rem;
	}
`
