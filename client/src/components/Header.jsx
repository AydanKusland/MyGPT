import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	const { setModalIsOpen } = useGlobalContext()
	return (
		<Wrapper>
			MyGPT
			<button>
				<i className='icon' onClick={() => setModalIsOpen(true)}>
					<FontAwesomeIcon icon={faBars} />
				</i>
			</button>
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

	button {
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
	.icon {
		color: white;
		font-size: 3.5rem;
	}
`
