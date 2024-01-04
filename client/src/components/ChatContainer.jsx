import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { Loading, Chat, VersionSelector, Header } from './index'
import Textfield from './Textfield'

export default function ChatContainer() {
	const { isLoading } = useGlobalContext()
	return (
		<Wrapper>
			<Header />
			<Chat />
			<div className='inputField'>
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
	max-width: var(--max-width);
	margin: 0 auto;
	.inputField {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`
