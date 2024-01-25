import { useGlobalContext } from '../context'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import userImg from '../user.png'
import assistantImg from '../assistant.png'
import Loading from './Loading'
import ReactMarkdown from 'react-markdown'

export default function Chat() {
	const { currentChat, isLoading } = useGlobalContext()
	const lastItem = useRef(null)
	useEffect(() => {
		lastItem.current.scrollIntoView()
	}, [currentChat])

	return (
		<Wrapper>
			{currentChat.messages.map((message, index) => (
				<div className='wholeMessage' key={index}>
					<img
						className='role'
						src={message.role === 'user' ? userImg : assistantImg}
					/>
					<span>:</span>
					<div>{<ReactMarkdown>{message.content}</ReactMarkdown>}</div>
				</div>
			))}
			<p id='lastItem' ref={lastItem}>
				{isLoading && <Loading />}
			</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 82vh;
	font-size: 1.8rem;
	overflow-y: scroll;
	line-height: 1.5;
	gap: 1rem;
	max-width: var(--max-width);
	@media (min-width: 768px) {
		padding: 0rem 1rem;
	}
	@media (min-width: 1024px) {
		line-height: 2;
	}
	.wholeMessage {
		background-color: var(--secondary-background);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.8rem;
		border-radius: 7px;
		span {
			margin-right: 1.4rem;
			font-size: 2rem;
		}
	}
	img {
		width: 3.6rem;
		display: inline;
	}

	#lastItem {
		min-height: 4rem;
		width: 4rem;
		height: 4rem;
		margin: 0rem auto;
	}
`
