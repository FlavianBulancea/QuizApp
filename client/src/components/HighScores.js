import React , {useState, useEffect} from 'react'

import { connect } from 'react-redux'
import { url } from '../env'
import Axios from 'axios'



const HighScores = ({score}) => {

    const [first10, setFirst10] = useState([])

    useEffect(() => {
        const storeAnswers = () => {
            Axios.get(url.highScore)
            .then((res) => {
                setFirst10(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })  
        }
        storeAnswers()
    }, []);

    return (
        <div className='home-div'>
            <div className='high-scores'>High Scores:</div>
            {first10.map(item => {
                return (
                    <div className='high' key={item.id}>
                        <div className='username'>{item.username}</div>
                        <div className='user-score'>{item.score}</div>
                        <div className='date'>{item.date}</div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      score: state.scoreReducer.score,
    }
}
  
export default connect(mapStateToProps)(HighScores)
