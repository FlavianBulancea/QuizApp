import axios from 'axios'

const QUIZ_REST_API_URL = 'http://localhost:8080/category/all'

class QuizService {

    getQuestions() {
        axios.get(QUIZ_REST_API_URL)
    }
}

export default new QuizService()