import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NewChatButton from './NewChatButton'

const Header = () => {
	const { setModalIsOpen } = useGlobalContext()
	return (
		<Wrapper>
			<div className='center'>
				<FontAwesomeIcon
					icon={faBars}
					className='modal-open-icon'
					onClick={() => setModalIsOpen(true)}
				/>
				<h3>MyGPT</h3>
				<div id='smallScreenOpenChatButton'>
					<NewChatButton />
				</div>
			</div>
		</Wrapper>
	)
}
export default Header

const Wrapper = styled.div`
	width: 95%;
	.center {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 4rem;
		font-weight: 600;
		padding: 1rem 0 1rem 0;
		@media (min-width: 768px) {
			font-size: 5rem;
		}
	}
	h3 {
		margin: 0 auto;
	}

	.modal-open-icon {
		color: white;
		font-size: 3.5rem;
		cursor: pointer;
		border: none;
		background-color: var(--primary-background);
		margin-left: 1rem;

		@media (min-width: 768px) {
			display: none;
		}
	}
	#smallScreenOpenChatButton {
		display: grid;
		button {
			font-size: 1.5rem;
			width: 6rem;
			padding: 1rem;
			text-align: center;
			font-weight: bold;
		}
		@media (min-width: 768px) {
			display: none;
		}
	}
`
