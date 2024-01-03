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
				<h4>MyGPT</h4>
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
	.modal-open-icon {
		color: white;
		font-size: 3rem;
		cursor: pointer;
		border: none;
		background-color: var(--primary-background);
		margin-left: 1rem;

		@media (min-width: 768px) {
			display: none;
		}
	}
	h4 {
		margin: 0 auto;
	}
	#smallScreenOpenChatButton {
		display: grid;
		button {
			font-size: 1.4rem;
			width: 6rem;
			padding: 1rem;
			text-align: center;
			font-weight: 600;
			border: 1px solid var(--secondary-background);
		}
		@media (min-width: 768px) {
			display: none;
		}
	}
`
