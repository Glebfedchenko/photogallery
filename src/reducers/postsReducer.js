import posts from '../data/posts'

export const postsReducer = (state = posts, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}