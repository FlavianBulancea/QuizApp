import React from 'react'
//import QuestionService from '../services/QuestionService'
import { url } from '../env'
import Axios from 'axios'



const Home = (props) => {

    Axios.get(url.questions)
    .then((res) => {
        console.log(res.data)
    });

    const goToGategories = () => {
        const { history } = props;
        history.push('categories');
    };

    return(
        <div>
            <button className='play-button' onClick={() => goToGategories()}>PLAY</button>
            <button className='high-score'>HIGH SCORES</button>
        </div>
    )
    
    

}

export default Home;