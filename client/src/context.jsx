import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { clearedChat } from './utils'

const GlobalContext = createContext()

const loadFromCookies = () => {
	const chatsInStorage = localStorage.getItem('chats')
	if (chatsInStorage) return JSON.parse(chatsInStorage)
	return []
}

export const ContextProvider = ({ children }) => {
	// all chats
	const [chats, setChats] = useState(loadFromCookies)
	// current chat query
	const [query, setQuery] = useState('4 examples with ')
	// current chat
	const [currentChat, setCurrentChat] = useState(clearedChat)

	const [isLoading, setIsLoading] = useState(false)

	// choose GPT version
	const [gptVersion, setGptVersion] = useState('gpt-4-1106-preview')

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)

		// Making new message array
		const messages = [...currentChat.messages, { role: 'user', content: query }]

		try {
			// Sending query to server
			const {
				data: { responseMessage, id }
			} = await axios.post('https://gpt-server-40zn.onrender.com/completions', {
				model: gptVersion,
				messages
			})

			// Construct and update chat
			const updatedChat = {
				id: currentChat.id || id,
				title:
					currentChat.title || `${responseMessage.content.substring(0, 40)}...`,
				messages: [...messages, responseMessage]
			}
			setCurrentChat(updatedChat)

			// Construct and update chats
			const newChats = [
				updatedChat,
				...chats.filter(item => item.id !== updatedChat.id)
			]
			setChats(newChats)

			// Update local storage
			localStorage.setItem('chats', JSON.stringify(newChats))
		} catch (error) {
			console.log(error)
		}

		setIsLoading(false)
		setQuery('')
	}

	const deleteChat = id => {
		console.log('delete Chat', id)
		const newChats = chats.filter(item => item.id !== id)
		setChats(newChats)
		localStorage.setItem('chats', JSON.stringify(newChats))
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
				setCurrentChat,
				deleteChat
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
