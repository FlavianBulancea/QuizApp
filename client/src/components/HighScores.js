import React from 'react'

import { connect } from 'react-redux'


const HighScores = ({score}) => {
    return (
        <div>
            <div>
                {score}
            </div>
            <div>
                HIGH SCORES
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      score: state.scoreReducer.score,
    }
}
  
export default connect(mapStateToProps)(HighScores)
