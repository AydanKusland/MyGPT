import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const History = () => {
	const { setCurrentChat, chats, deleteChat } = useGlobalContext()
	return (
		<Wrapper>
			{chats.map(chat => {
				const { id, title } = chat
				return (
					<article key={id}>
						<p
							onClick={() => setCurrentChat(chats.find(item => item.id === id))}
						>
							{title}
						</p>
						<i className='icon' onClick={() => deleteChat(id)}>
							<FontAwesomeIcon icon={faTrashCan} />
						</i>
					</article>
				)
			})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	flex-direction: column;
	gap: 1.5rem;
	overflow-y: scroll;
	article {
		display: flex;
		gap: 1rem;
		padding: 0rem 0.7rem;
		min-height: 4.2rem;
		i {
			font-size: 1.7rem;
			display: none;
		}
		&:hover {
			background-color: var(--primary-background);
			border-radius: 5px;
		}
		&:hover .icon {
			display: grid;
			place-items: center;
			cursor: pointer;
		}
		p {
			height: 100%;
			cursor: pointer;
			font-size: 1.4rem;
			text-transform: capitalize;
			text-align: center;
			overflow-y: hidden;
			display: grid;
			place-items: center;
		}
	}
	&::-webkit-scrollbar {
		width: 0.3rem;
	}
`

export default History
