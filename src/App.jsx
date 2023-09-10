import { useState } from 'react'
import { gpt_3_5_Request } from './customFetch'

export default function App() {
	const [chats, setChats] = useState([])
	const [query, setQuery] = useState('')
	const [chatResponse, setChatResponse] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)
		const response = await gpt_3_5_Request(query)
		setIsLoading(false)
		setChatResponse(response)
		setChats(prev => [...prev, { query, response }])
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
