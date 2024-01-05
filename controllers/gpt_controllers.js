import { customFetch } from '../utils.js'

export const gptRequest = async (req, res) => {
	try {
		const { model, messages } = req.body
		console.time()
		const { data } = await customFetch.post('', {
			model,
			messages
			// max_tokens: 4097
			// temperature: 1
		})
		const responseMessage = data.choices[0].message
		const id = data.id
		console.timeEnd()
		console.log(model, data.usage)
		res.status(200).json({ responseMessage, id })
	} catch (error) {
		const { status, statusText } = error.response

		if (status === 429)
			res
				.status(status)
				.json(
					'We have run out of money! Contact His Highness Sir Sergei Tugov!'
				)
		else if (status === 401)
			res.status(status).json(error.response.data.error.message)
		else if (status === 400)
			res.status(status).json(error.response.data.error.message)
		else res.json(`Axios Error From My Server, ${status}, ${statusText}`)
		console.log(`${status}, ${statusText}`)
	}
}
