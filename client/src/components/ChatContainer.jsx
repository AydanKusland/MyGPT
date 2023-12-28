import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { Loading, Chat, VersionSelector } from './index'
import Textfield from './Textfield'

export default function ChatContainer() {
	const { isLoading } = useGlobalContext()
	return (
		<Wrapper>
			<h1>MyGPT</h1>
			{isLoading ? <Loading /> : <Chat />}
			<div>
				<Textfield />
				<VersionSelector />
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 5 20rem;
	h1 {
		justify-self: start;
		font-size: 5rem;
		font-weight: 600;
		padding: 2rem 0 0 0;
	}
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`
