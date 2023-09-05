import { useState } from 'react'
import { gpt_3_5_Request } from './customFetch'

export default function App() {
	const [query, setQuery] = useState('')
	const [chatResponse, setChatResponse] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()
		const response = await gpt_3_5_Request(query)
		setQuery('')
		setChatResponse(response)
	}

	return (
		<div className='topLevelContainer'>
			<aside className='side-bar'>
				<button className='newChatButton'>New Chat</button>
				<div className='history'></div>
				<nav>
					<p>Made For S3 Company</p>
				</nav>
			</aside>
			<main className='main'>
				<h1>MyGPT</h1>
				<p id='output'>{chatResponse}</p>
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
				<p className='info'>
					3 requests per minute. 200 request per day. GPT-3.5 Turbo.
				</p>
			</main>
		</div>
	)
}
