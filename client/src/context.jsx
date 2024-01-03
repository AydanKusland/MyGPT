import { createContext, useContext, useState, useRef } from 'react'
import axios from 'axios'
import { clearedChat } from './utils'

const GlobalContext = createContext()
// const URL = NODE_ENV_

const loadFromCookies = () => {
	const chatsInStorage = localStorage.getItem('chats')
	if (chatsInStorage) return JSON.parse(chatsInStorage)
	return []
}

export const ContextProvider = ({ children }) => {
	// all chats
	const [chats, setChats] = useState(loadFromCookies)
	// current chat query
	const [query, setQuery] = useState('')
	// current chat
	const [currentChat, setCurrentChat] = useState(clearedChat)

	const [isLoading, setIsLoading] = useState(false)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	// const lastItem = useRef(null)

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
			} = await axios.post('/completions', {
				// } = await axios.post('http://localhost:8000/completions', {
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
			setQuery('')
		} catch (error) {
			console.log(error)
		}

		setIsLoading(false)
	}

	const deleteChat = id => {
		const newChats = chats.filter(item => item.id !== id)
		setChats(newChats)
		localStorage.setItem('chats', JSON.stringify(newChats))
	}

	const openChosenChat = id => {
		setCurrentChat(chats.find(item => item.id === id))
		setIsLoading(false)
		setModalIsOpen(false)
	}

	const openNewChat = () => {
		setCurrentChat(clearedChat)
		setQuery('')
		setIsLoading(false)
	}

	return (
		<GlobalContext.Provider
			value={{
				chats,
				isLoading,
				setGptVersion,
				handleSubmit,
				currentChat,
				setQuery,
				query,
				deleteChat,
				setModalIsOpen,
				modalIsOpen,
				openChosenChat,
				openNewChat
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
