import React from 'react'
import { connect } from 'react-redux'
import Photo from './Photo'

const Grid = ({ posts, comments }) =>
    <div className='container text-center'>
    {posts.map((post, index) =>
            <Photo
                key={post.id}
                {...posts}
                post={post}
                i={index}
                comments={comments} />
        )}
    </div>
const mapStateToProps = (state) => ({
    posts: state.posts,
    comments: state.comments
})

export default connect(mapStateToProps)(Grid)