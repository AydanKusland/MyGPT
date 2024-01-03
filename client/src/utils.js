export const clearedChat = {
	id: '',
	title: '',
	messages: []
}

export const URL = import.meta.env.DEV
	? 'http://localhost:8000/completions'
	: '/completions'

export const loadFromCookies = () => {
	const chatsInStorage = localStorage.getItem('chats')
	if (chatsInStorage) return JSON.parse(chatsInStorage)
	return []
}
