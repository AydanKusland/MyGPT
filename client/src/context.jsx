import { createContext, useContext, useState } from 'react'
import { customFetch } from './customFetch'

const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
	// all chats
	const [chats, setChats] = useState([])
	// current chat query
	const [query, setQuery] = useState('4 most used phrases with chinese word ')
	// current chat
	const [currentChat, setCurrentChat] = useState({ id: '', messages: [] })

	const [isLoading, setIsLoading] = useState(false)

	// choose GPT version
	const [gptVersion, setGptVersion] = useState('gpt-4-1106-preview')

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const messages = [
				...currentChat.messages,
				{ role: 'user', content: query }
			]
			// Sending query to server
			const {
				data: { responseMessage, id }
			} = await customFetch.post('', {
				model: gptVersion,
				messages
			})

			setCurrentChat(prev => ({
				id: prev.id || id,
				messages: [...messages, responseMessage]
			}))
			// setChats(prev => [...prev, currentChat])
		} catch (error) {
			console.log(error)
			// add a toast or error class!
		}
		setIsLoading(false)
		setQuery('')
	}

	return (
		<GlobalContext.Provider
			value={{
				chats,
				setChats,
				isLoading,
				setGptVersion,
				handleSubmit,
				currentChat,
				setQuery,
				query,
				setCurrentChat
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
