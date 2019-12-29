import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-cd2f2.firebaseio.com/'
})
