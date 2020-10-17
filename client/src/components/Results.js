import React, { useState }from 'react'

import { connect } from 'react-redux'
import { url } from '../env'

import Axios from 'axios'


const Results = ({score, questions}) => {
    const [yourName, setYourName] = useState('')

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const constructData = (score, date, username) => {

        if(username === ''){
            alert('Please enter a name')
        } else {

            Axios.post(url.score, {score,date,username})
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert(err)
                })
            window.location.href = '/'
        }

    }


    return (
        <div className='home-div'>
            <div className='score'>
                You answered {score} questions correctly out of {questions?.length}
            </div>
            <div className='div-with-input'>
                <input 
                type="text" 
                name='name'
                maxLength="20" 
                placeholder='Full Name'  
                onChange={e=> setYourName(e.target.value)}
                className='input-name'
                required />
            </div>
            <button className='submit-button' onClick={() => constructData(score, date, yourName )}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      score: state.scoreReducer.score,
      questions: state.categoryReducer.questions,
    }
}
  
export default connect(mapStateToProps)(Results)
