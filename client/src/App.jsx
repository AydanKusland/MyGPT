import { Sidebar, ChatContainer, Modal } from './components'
import styled from 'styled-components'

export default function App() {
	return (
		<Wrapper>
			<Modal />
			<Sidebar />
			<ChatContainer />
		</Wrapper>
	)
}

const Wrapper = styled.main`
	display: flex;
	height: 100vh;
`
