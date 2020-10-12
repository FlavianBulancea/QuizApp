import React from 'react'
//import QuestionService from '../services/QuestionService'
import axios from 'axios'


const api = axios.create({
    categoryURL: 'http://localhost:8080/category/all'
})


class QuizComponent extends React.Component {

    constructor() {
        super()
        api.get('/').then(res => {
            console.log(res.data)
        })
    }
   
    render() {
        return(
            <div>hello</div>
        )
    }
    

}

export default QuizComponent;