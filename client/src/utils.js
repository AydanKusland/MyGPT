const DEV = import.meta.env.DEV

export const clearedChat = {
	id: '',
	title: '',
	messages: []
}

export const URL = DEV ? 'http://localhost:8000/completions' : '/completions'

export const placeholder = DEV ? '4 examples with ' : ''

export const loadFromLocalStorage = () => {
	const chatsInStorage = localStorage.getItem('chats')
	if (chatsInStorage) return JSON.parse(chatsInStorage)
	return []
}

export const updateLocalStorage = newChats =>
	localStorage.setItem('chats', JSON.stringify(newChats))
