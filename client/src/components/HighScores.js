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
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      score: state.scoreReducer.score,
    }
}
  
export default connect(mapStateToProps)(HighScores)
