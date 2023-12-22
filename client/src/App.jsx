import { Sidebar, ChatContainer } from './components'
import styled from 'styled-components'

export default function App() {
	return (
		<TopContainer>
			<Sidebar />
			<ChatContainer />
		</TopContainer>
	)
}

const TopContainer = styled.div`
	display: flex;
	height: 100vh;
`
