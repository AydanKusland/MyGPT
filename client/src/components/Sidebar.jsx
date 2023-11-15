import { useGlobalContext } from '../context'

export default function Sidebar() {
	const { chats, setCurrentChat } = useGlobalContext()
	return (
		<aside className='side-bar'>
			<button className='newChatButton' onClick={() => setCurrentChat([])}>
				New Chat
			</button>
			<div className='history'>
				{chats.map((item, index) => (
					<p key={index} onClick={() => handleHistory(index)}>
						{item.query}
					</p>
				))}
			</div>
			<footer>
				<p>Made For ME!</p>
			</footer>
		</aside>
	)
}
