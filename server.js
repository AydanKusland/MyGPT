import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import axios from 'axios'

const app = express()

app.use(express.json())
app.use(cors())

export const customFetch = axios.create({
	baseURL: 'https://api.openai.com/v1/chat/completions',
	headers: {
		Authorization: `Bearer ${process.env.VITE_OPEN_AI_API_KEY}`,
		'Content-Type': 'application/json'
	}
})

export const gptRequest = async (req, res) => {
	try {
		const { model, messages } = req.body
		const { data } = await customFetch.post('', {
			model,
			messages,
			max_tokens: 2000
			// temperature: 1
		})
		const responseMessage = data.choices[0].message
		const id = data.id
		console.log(data.usage)
		// Create ID if first message in the chat
		res.status(200).json({ responseMessage, id })
	} catch (error) {
		const status = error.response?.status || 333
		console.log(error.response || error)
		res.status(status).json(error)
	}
}
app.post('/completions', gptRequest)

const PORT = 8000
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})
