import React , { useState, useEffect } from 'react'
import QuestionService from '../services/QuestionService'

const QuizComponent = (props) => {

    // constructor() {
    //     this.state = {
    //         questions:[]
    //     }
    // }
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        QuestionService.getQuestions().then((response) => {
            setQuestions(response.data)
        })
    }, []);


    
    return(
        <div>{questions.id}</div>
    )
    

}

export default QuizComponent;