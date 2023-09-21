import { START_NEW_CHAT, CONTINUE_OLD_CHAT, SET_IS_LOADING } from './actions.js'
import { customFetch } from './customFetch.js'

// const initialState = {
// 	currentChat: {
// 		title: '',
// 		lastQuery: '',
// 		lastResponse: '',
// 		dialogue: []
// 	},
// 	allChats: [],
// 	isLoading: false,
// 	modelsToChooseFrom: ['gpt-3.5-turbo', 'gpt-4'],
// 	currentModel: 'gpt-3.5-turbo'
// }

export default async function reducer(state, action) {
	switch (action.type) {
		case START_NEW_CHAT: {
			console.log('From Start New Chat')
			const message = action.payload.query
			try {
				const { data: response } = await customFetch.post('', {
					message
				})
				const dialogue = [
					{ role: 'user', content: message },
					{ role: 'assistant', content: response }
				]
				const allChats = [...state.allChats, dialogue]
				return {
					...state,
					currentChat: {
						...state.currentChat,
						title: action.payload.query,
						dialogue
					},
					allChats,
					isLoading: false
				}
			} catch (error) {
				console.log(error)
				// add a toast or error class!
				return { ...state, isError: true, isLoading: false }
			}
		}
		case CONTINUE_OLD_CHAT: {
			// try {
			// 	const message = [
			// 		...state.currentChat.dialogue,
			// 		{ role: 'user', content: action.payload.query }
			// 	]
			// 	const { data: response } = await customFetch.post('', { message })
			// 	console.log(response)
			// } catch (error) {
			// 	console.log(error)
			// 	// add a toast or error class!
			// }
			return state
		}
		case SET_IS_LOADING: {
			console.log('From Set Is Loading')
			return { ...state, isLoading: true, isError: false }
		}
		default:
			return state
	}
}
