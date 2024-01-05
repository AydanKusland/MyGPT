import axios from 'axios'
import 'dotenv/config'

export const customFetch = axios.create({
	baseURL: 'https://api.openai.com/v1/chat/completions',
	headers: {
		Authorization: `Bearer ${process.env.VITE_OPEN_AI_API_KEY}`,
		'Content-Type': 'application/json'
	}
})
