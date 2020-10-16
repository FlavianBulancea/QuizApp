import { categoryTypes } from './actionTypes'

export const updateCategory = (questions) => {
    return {
        type: categoryTypes.UPLOAD_CATEGORIES,
        payload: questions
    }
}