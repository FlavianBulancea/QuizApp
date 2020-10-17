import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';

import { url } from '../env'
import Axios from 'axios'
import { connect } from 'react-redux'

import { updateScore } from '../actions/scoreActions'


const Questions = ({dispatch, questions, history}) => {
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)

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

    const checkAnswer = (answer, question, questions) => {
        console.log(questions.indexOf(question))
        if(answer === true) {
            setScore(score+1)
            dispatch(updateScore(score+1))
        }
        if(questions.indexOf(question) === -1){
            history.push(`/results`)
        }else{
            history.push(`/questions/${question.id}`)
        }
    }




    return (
        <div className='home-div'>
            {questions.map((item,index) => {
                if (id == item.id) {
                    return (
                        <div key={item.id} className='question-div'>
                            <div className='index'>{index+1}/{questions.length}</div>
                            <div className='question-body'>{item.question}</div>

                            {answers.map(ans => {
                                return(
                                    <div key={ans.id} >
                                        <button className='answers' onClick={() => checkAnswer(ans.correct, questions[index+1], questions)}>
                                            {ans.answer}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>

                    )
                }
            } )}
        </div>
    )
}


const mapStateToProps = state => {
    return {
      questions: state.categoryReducer.questions,
    }
}
  
export default connect(mapStateToProps)(Questions)