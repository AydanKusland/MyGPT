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
				<h5>MyGPT</h5>
				<div id='smallScreenOpenChatButton'>
					<NewChatButton />
				</div>
			</div>
		</Wrapper>
	)
}
export default Header

const Wrapper = styled.div`
	width: 98%;
	.center {
		display: flex;
		align-items: center;
		font-size: 4rem;
		@media (min-width: 768px) {
			font-size: 5rem;
			padding: 1rem 0 1rem 0;
		}
	}
	.modal-open-icon {
		color: white;
		font-size: 2.3rem;
		cursor: pointer;
		border: none;
		background-color: var(--primary-background);
		margin-left: 1rem;

		@media (min-width: 768px) {
			display: none;
		}
	}
	h5 {
		margin: 0 auto;
	}
	#smallScreenOpenChatButton {
		button {
			font-size: 1.2rem;
			width: 5rem;
			border: none;
		}
		@media (min-width: 768px) {
			display: none;
		}
	}
`
