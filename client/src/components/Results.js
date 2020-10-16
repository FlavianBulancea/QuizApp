import React, { useState }from 'react'

import { connect } from 'react-redux'
import { url } from '../env'

import Axios from 'axios'


const Results = ({score}) => {
    const [yourName, setYourName] = useState('')

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    const constructData = (score, date, name) => {

        Axios.post(url.score, {score,date,name})
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
            <button onClick={() => console.log(date)}>erfefwefw</button>
            <button onClick={() => constructData(score, date, yourName )}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      score: state.scoreReducer.score,
    }
}
  
export default connect(mapStateToProps)(Results)