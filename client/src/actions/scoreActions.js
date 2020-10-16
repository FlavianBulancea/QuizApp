import { scoreTypes }  from './actionTypes'

export const updateScore = (score) => {
    return {
        type: scoreTypes.UPDATE_SCORE,
        payload: score
    }
}