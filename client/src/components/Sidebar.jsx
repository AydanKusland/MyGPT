import { useGlobalContext } from '../context'

export default function Sidebar() {
	const { chats } = useGlobalContext()
	return (
		<aside className='side-bar'>
			<button className='newChatButton' onClick={() => console.log('new chat')}>
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
				<p>Made For S3 Company</p>
			</footer>
		</aside>
	)
}
