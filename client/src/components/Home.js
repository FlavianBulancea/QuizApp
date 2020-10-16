import React from 'react'




const Home = (props) => {

    const goToGategories = () => {
        const { history } = props;
        history.push('categories');
    };

    const goToScores = () => {
        const { history } = props;
        history.push('high-scores');
    };


    return(
        <div className='home-div'>
            <button className='play-button' onClick={() => goToGategories()}>PLAY</button>
            <button className='high-score' onClick={() => goToScores()}>HIGH SCORES</button>
        </div>
    )
    
    

}

export default Home;