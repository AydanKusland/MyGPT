import { useGlobalContext } from '../context'
import CurrentChat from './CurrentChat'

export default function ChatContainer() {
	const {
		isLoading,
		handleSubmit,
		query,
		setQuery,
		setGptVersion,
		gptVersion
	} = useGlobalContext()
	return (
		<main className='main'>
			<h1>MyGPT</h1>
			<div id='output'>{isLoading ? 'LOADING...' : <CurrentChat />}</div>
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
				<option value='gpt-3.5-turbo-1106'>GPT - 3.5 Turbo</option>
				<option value='gpt-4-1106-preview'>GPT - 4 Turbo</option>
			</select>
		</main>
	)
}
