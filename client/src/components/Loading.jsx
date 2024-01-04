import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
to{
 transform:rotate(360deg);
}
`

const Loading = styled.span`
	display: inline-block;
	width: 70%;
	height: 70%;
	border-radius: 50%;
	border: 4px solid var(--input-arrow-color);
	border-top-color: var(--secondary-background);
	animation: ${spinner} 0.7s linear infinite;
`

export default Loading
