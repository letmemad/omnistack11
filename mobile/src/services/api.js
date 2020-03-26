import axios from 'axios'

const api = axios.create({
    baseURL: "http://192.168.9.105:3333/api"
})

export default api