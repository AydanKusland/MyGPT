import { useState } from 'react'
import { customFetch } from './customFetch'

export default function App() {
	// all chats
	const [chats, setChats] = useState([])
	// current chat query
	const [query, setQuery] = useState('')
	// current chat
	const [currentChat, setCurrentChat] = useState([])

	const [isLoading, setIsLoading] = useState(false)
	// choose GPT version
	const [gptVersion, setGptVersion] = useState('gpt-3.5-turbo')

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const newMessage = [...currentChat, { role: 'user', content: query }]
			// Sending query to server
			const { data: response } = await customFetch.post('', {
				model: gptVersion,
				messages: newMessage
			})
			setCurrentChat(prev => [
				...prev,
				{ role: 'user', content: query },
				response
			])
			// response is {"role": "assistant", "content": ""}
			// setChats(prev => [...prev, []])
		} catch (error) {
			console.log(error)
			// add a toast or error class!
		}
		setIsLoading(false)
		setQuery('')
	}

	const handleHistory = id => {
		console.log(id)
	}

	return (
		<div className='topLevelContainer'>
			<aside className='side-bar'>
				<button
					className='newChatButton'
					onClick={() => console.log('new chat')}
				>
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
			<main className='main'>
				<h1>MyGPT</h1>
				<div id='output'>
					{isLoading
						? 'LOADING...'
						: currentChat.map((message, index) => (
								<p key={index}>
									<span>{message.role}</span> &nbsp;
									{message.content}
								</p>
						  ))}
				</div>
				<form className='input-container' onSubmit={handleSubmit}>
					<input
						type='text'
						name='query'
						id='query'
						value={query}
						onChange={e => setQuery(e.target.value)}
					/>
					<button type='submit' id='submit'>
						{'\u27a2'}
					</button>
				</form>
				<select
					name='gptVersion'
					id='gptVersion'
					onChange={e => setGptVersion(e.target.value)}
					value={gptVersion}
				>
					<option value='gpt-3.5-turbo'>GPT - 3.5 Turbo</option>
					<option value='gpt-4'>GPT - 4</option>
				</select>
			</main>
		</div>
	)
}
