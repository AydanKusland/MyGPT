import styled from 'styled-components'
import { useGlobalContext } from '../context'
const NewChatButton = () => {
	const { openNewChat } = useGlobalContext()
	return <Wrapper onClick={() => openNewChat()}>New Chat</Wrapper>
}
export default NewChatButton

const Wrapper = styled.button`
	display: grid;
	background-color: transparent;
	border: solid 1px rgba(255, 255, 255, 0.5);
	border-radius: 5px;
	cursor: pointer;
	font-size: 1.5rem;
	font-weight: 700;
	margin-top: 0.2rem;
	@media (min-width: 768px) {
		padding: 1rem;
		margin: 1.5rem 1.5rem 2rem 1.5rem;
	}
`
