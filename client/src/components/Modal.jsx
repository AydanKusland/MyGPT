import { useGlobalContext } from '../context'
import styled, { css } from 'styled-components'
import History from './History'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Modal = () => {
	const { modalIsOpen, setModalIsOpen } = useGlobalContext()

	return (
		<Wrapper modalIsOpen={modalIsOpen}>
			<FontAwesomeIcon
				className='close-icon'
				icon={faXmark}
				style={{ color: '#8e292b' }}
				onClick={() => setModalIsOpen(false)}
			/>
			<History />
		</Wrapper>
	)
}

const Wrapper = styled.aside`
	${({ modalIsOpen }) => {
		return modalIsOpen
			? css`
					display: flex;
			  `
			: css`
					display: none;
			  `
	}}
	position: fixed;
	width: 100%;
	background-color: var(--secondary-background);
	height: 100%;
	z-index: 10;
	line-height: 1;
	padding-top: 5rem;
	justify-content: space-around;
	@media (min-width: 768px) {
		/* display: none; */
	}
	.close-icon {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: none;
		background-color: var(--secondary-background);
		cursor: pointer;
		transition: all 1s ease;
		&:hover {
			transform: scale(1.2, 1.2);
		}
		font-size: 3.3rem;
		color: '#511f37';
	}
`

export default Modal
