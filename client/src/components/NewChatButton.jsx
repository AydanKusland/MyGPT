import styled from 'styled-components'
import { useGlobalContext } from '../context'
const NewChatButton = () => {
	const { openNewChat } = useGlobalContext()
	return <Wrapper onClick={() => openNewChat()}>New Chat</Wrapper>
}
export default NewChatButton

const Wrapper = styled.button`
	border: solid 0.5px rgba(255, 255, 255, 0.5);
	background-color: transparent;
	border-radius: 5px;
	cursor: pointer;
	@media (min-width: 768px) {
		padding: 1rem;
		margin: 2.6rem 1.5rem 2rem 1.5rem;
		font-size: 1.5rem;
		font-weight: 700;
	}
`
