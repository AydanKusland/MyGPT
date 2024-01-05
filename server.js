import express from 'express'
import cors from 'cors'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { gptRequest } from './controllers/gpt_controllers.js'

const app = express()

app.use(express.json())
app.use(cors())

// Public folder
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/dist')))
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'))
})
app.post('/completions', gptRequest)
app.use((req, res, next) => {
	res.status(404).json(`Such Endpoint Doesn't Exist! Yours, Sergei`)
})

const PORT = 8000
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})
