import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import {
	clearedChat,
	URL,
	loadFromLocalStorage,
	updateLocalStorage,
	placeholder
} from './utils'

const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
	// all chats
	const [chats, setChats] = useState(loadFromLocalStorage)
	// current chat query
	const [query, setQuery] = useState(placeholder)
	// current chat
	const [currentChat, setCurrentChat] = useState(clearedChat)

	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [modalIsOpen, setModalIsOpen] = useState(false)
	// const lastItem = useRef(null)

	// choose GPT version
	const [gptVersion, setGptVersion] = useState('gpt-4-1106-preview')

	const handleSubmit = async e => {
		e.preventDefault()
		setErrorMessage('')
		setIsLoading(true)

		// Making new message array
		const messages = [...currentChat.messages, { role: 'user', content: query }]

		try {
			// Sending query to server
			const {
				data: { responseMessage, id }
			} = await axios.post(URL, {
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
			updateLocalStorage(newChats)
			setQuery('')
		} catch (error) {
			if (error.response?.data) setErrorMessage(error.response.data)
			else console.log(error)
		}

		setIsLoading(false)
	}

	const deleteChat = id => {
		const newChats = chats.filter(item => item.id !== id)
		setChats(newChats)
		updateLocalStorage(newChats)
	}

	const openChosenChat = id => {
		setCurrentChat(chats.find(item => item.id === id))
		setErrorMessage('')
		setModalIsOpen(false)
		setIsLoading(false)
	}

	const openNewChat = () => {
		setCurrentChat(clearedChat)
		setErrorMessage('')
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
				openNewChat,
				errorMessage
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
