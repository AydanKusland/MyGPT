import { useState } from 'react'
import { customFetch } from './customFetch'

export default function App() {
	// all chats
	const [chats, setChats] = useState([])
	// current chat query
	const [query, setQuery] = useState('')
	// current GPT response
	const [chatResponse, setChatResponse] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)

		try {
			// Sending query to server
			const message = { role: 'user', content: query }
			const { data: response } = await customFetch.post('', [message])
			// response is {"role": "assistant", "content": ""}
			// making legit chat object:
			let currentChat = {
				id: new Date().getTime(),
				messages: [message[0], response]
			}
			console.log(currentChat)
			setChatResponse(response.content)
			// setChats(prev => [...prev, []])
		} catch (error) {
			console.log(error)
			// add a toast or error class!
		}
		setIsLoading(false)
		setQuery('')
	}

	const handleHistory = id => {
		setChatResponse(chats[id].response)
	}

	return (
		<div className='topLevelContainer'>
			<aside className='side-bar'>
				<button className='newChatButton' onClick={() => setChatResponse('')}>
					New Chat
				</button>
				<div className='history'>
					{chats.map((item, index) => (
						<p key={index} onClick={() => handleHistory(index)}>
							{item.query}
						</p>
					))}
				</div>
				<nav>
					<p>Made For S3 Company</p>
				</nav>
			</aside>
			<main className='main'>
				<h1>MyGPT</h1>
				<p id='output'>{isLoading ? 'LOADING...' : chatResponse}</p>
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
				<p className='info'>GPT-3.5 Turbo.</p>
			</main>
		</div>
	)
}
