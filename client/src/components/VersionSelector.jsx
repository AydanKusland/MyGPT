import styled from 'styled-components'
import { useGlobalContext } from '../context'

const VersionSelector = () => {
	const { setGptVersion, gptVersion } = useGlobalContext()
	return (
		<Wrapper onChange={e => setGptVersion(e.target.value)} value={gptVersion}>
			<option value='gpt-4-1106-preview'>GPT - 4 Turbo</option>
			<option value='gpt-3.5-turbo-1106'>GPT - 3.5 Turbo</option>
		</Wrapper>
	)
}
export default VersionSelector

const Wrapper = styled.select`
	background-color: transparent;
	border: transparent;
	padding: 1.8rem;
	font-size: 1.6rem;
	font-weight: 700;

	option {
		background-color: var(--primary-background);
		border: none;
	}
`
