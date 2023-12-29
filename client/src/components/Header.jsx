import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NewChatButton from './NewChatButton'

const Header = () => {
	const { setModalIsOpen } = useGlobalContext()
	return (
		<Wrapper>
			<FontAwesomeIcon
				icon={faBars}
				className='modal-open-icon'
				onClick={() => setModalIsOpen(true)}
			/>
			MyGPT
			<div className='smallScreenOpenChatButton'>
				<NewChatButton />
			</div>
		</Wrapper>
	)
}
export default Header

const Wrapper = styled.h1`
	font-size: 4rem;
	font-weight: 600;
	padding: 1rem 0 1rem 0;
	@media (min-width: 768px) {
		font-size: 5rem;
	}
	.modal-open-icon {
		color: white;
		font-size: 3.5rem;
		position: absolute;
		left: 2rem;
		top: 1.4rem;
		cursor: pointer;
		border: none;
		background-color: var(--primary-background);

		@media (min-width: 768px) {
			display: none;
		}
	}
	.smallScreenOpenChatButton {
		position: fixed;
		right: 1rem;
		top: 1.7rem;
		width: 6rem;
		height: 6rem;
		@media (min-width: 768px) {
			display: none;
		}
	}
`
