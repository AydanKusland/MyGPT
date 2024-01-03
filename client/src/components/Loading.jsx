import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
to{
 transform:rotate(360deg);
}
`

const Loading = styled.div`
	width: 32rem;
	height: 3rem;
	border-radius: 50%;
	border: 5px solid var(--primary-text);
	border-top-color: var(--secondary-background);
	animation: ${spinner} 1s linear infinite;
`

export default Loading
