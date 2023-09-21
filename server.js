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

// export const gpt_3_5_Request = async (req, res) => {
// 	try {
// 		const { data } = await customFetch.post('', {
// 			// model: 'gpt-3.5-turbo',
// 			model: 'gpt-4',
// 			messages: [{ role: 'user', content: req.body.message }],
// 			max_tokens: 500
// 		})
// 		const responseMessage = data.choices[0].message.content
// 		res.status(200).json(responseMessage)
// 	} catch (error) {
// 		res.status(400).json(error)
// 	}
// }
export const gpt_3_5_Request = async (req, res) => {
	try {
		const { data } = await customFetch.post('', {
			// model: 'gpt-3.5-turbo',
			model: 'gpt-4',
			messages: req.body.message,
			max_tokens: 500
		})
		console.log(data)
		const responseMessage = data.choices[0].message.content
		res.status(200).json(responseMessage)
	} catch (error) {
		res.status(400).json(error)
	}
}
app.post('/completions', gpt_3_5_Request)

const PORT = 8000
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})
