import { Sidebar, ChatContainer } from './components'
import styled from 'styled-components'

export default function App() {
	return (
		<Wrapper>
			<Sidebar />
			<ChatContainer />
		</Wrapper>
	)
}

const Wrapper = styled.main`
	display: flex;
	height: 100vh;
`
