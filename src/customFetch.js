import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY

export const customFetch = axios.create({
	baseURL: 'https://api.openai.com/v1/chat/completions',
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json'
	}
})

export const gpt_3_5_Request = async requestMessage => {
	try {
		const { data } = await customFetch.post('', {
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: requestMessage }],
			max_tokens: 500
		})
		return data.choices[0].message.content
	} catch (error) {
		console.log(error)
	}
}
