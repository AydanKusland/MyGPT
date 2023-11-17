import { useGlobalContext } from '../context'

export default function CurrentChat() {
	const { currentChat } = useGlobalContext()
	return (
		<div className='chat'>
			{currentChat.messages.map((message, index) => (
				<div className='wholeMessage' key={index}>
					<p className='role'>{message.role}:</p>
					<div className='response'>
						{message.content.split('\n').map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
