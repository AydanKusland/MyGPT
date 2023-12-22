import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { Loading, Chat, VersionSelector } from './index'

export default function ChatContainer() {
	const { isLoading, handleSubmit, query, setQuery } = useGlobalContext()
	return (
		<Wrapper>
			<h1>MyGPT</h1>
			{isLoading ? <Loading /> : <Chat />}
			<div className='main-bottom-container'>
				<form onSubmit={handleSubmit}>
					<textarea
						value={query}
						required
						onChange={e => setQuery(e.target.value)}
					/>
					<button type='submit' id='submit'>
						{'\u27a2'}
					</button>
				</form>
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
	.main-bottom-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	form {
		width: 100%;
		max-width: 60vw;
		position: relative;
	}
	textarea {
		border: none;
		background-color: rgba(255, 255, 255, 0.5);
		width: 100%;
		font-size: 2rem;
		padding: 1.1rem;
		border-radius: 7px;
		box-shadow: rgba(0, 0, 0, 0.05) 0 54px 55px,
			rgba(0, 0, 0, 0.05) 0 -12px 30px, rgba(0, 0, 0, 0.05) 0 4px 6px,
			rgba(0, 0, 0, 0.05) 0 12px 3px, rgba(0, 0, 0, 0.09) 0 -3px 5px;
		resize: none;
		&:focus {
			outline: none;
		}
	}
	#submit {
		position: absolute;
		top: 0.5rem;
		right: -6rem;
		font-size: 4.2rem;
		color: #b4c556;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
`
