import React, { useState }from 'react'

import { connect } from 'react-redux'
import { url } from '../env'

import Axios from 'axios'


const Results = ({score}) => {
    const [yourName, setYourName] = useState('')

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    const constructData = (score, date, name) => {
        let dataSet = {
            score: score,
            date: date,
            username: name
        }
        console.log(dataSet)
        sendData(dataSet)
    }

    const sendData = (dataSet) => {
        console.log(dataSet)
        Axios.post(url.score, {dataSet})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }

    return (
        <div>
            <div>
                {score}
            </div>
            <input 
            type="text" 
            name='name' 
            placeholder='Full Name'  
            onChange={e=> setYourName(e.target.value)} />
            <button onClick={() => console.log(dateTime)}>erfefwefw</button>
            <button onClick={() => constructData(score, dateTime, yourName )}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      score: state.scoreReducer.score,
    }
}
  
export default connect(mapStateToProps)(Results)
