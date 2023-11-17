import axios from 'axios'

export const customFetch = axios.create({
	baseURL: 'https://gpt-server-40zn.onrender.com/completions'
	// baseURL: 'http://localhost:8000/completions'
})
