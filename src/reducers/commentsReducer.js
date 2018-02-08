import comments from '../data/comments'
export const commentsReducer = (state =comments , action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}