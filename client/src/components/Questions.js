import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';

import { url } from '../env'
import Axios from 'axios'

const Questions = () => {
    const [answers, setAnswers] = useState([])

    let questions = JSON.parse(localStorage.getItem('QuestionList'));
    let {id} = useParams()

    useEffect(() => {
        const storeAnswers = () => {
            Axios.get(url.answers+id, {id})
            .then((res) => {
                setAnswers(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })  
        }
        storeAnswers()
    }, [id]);

    const checkAnswer = (answer) => {
        if (answer === true) {
            console.log("bv ba")
        }
    }

    const showAnswers = () => {
        console.log(answers)
    }
    
    return (
        <div>
            {questions?.map(item => {
                if (id == item.id)
                    return (
                        <div key={item.id}>
                            <div>{item.question}</div>
                            {answers.map(ans => {
                                return(
                                    <div key={ans.id}>
                                        <button onClick={() => checkAnswer(ans.correct)}>
                                            {ans.answer}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>

                    )
            } )}
            <button onClick={() => showAnswers()}>AERFEFEFREfr</button>
        </div>
    )
}


export default Questions;