import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import Comments from './Comments'

const SinglePhoto = ({ match, comments, posts}) => {
    const i = posts.findIndex((post) => post.code === match.params.code)
    const post = posts[i]

    const postComments = comments[match.params.code] || []
    return (
        <div className='container text-center'>
        <h1 className='text-center'><Link to='/'>Photo Gallery</Link></h1>
            <div className="col-md-6">
                <img className='img-responsive' src={post.display_src} alt="" />
                <p>{post.caption}</p>
                <button className='btn'>
                    &hearts;{post.likes}
                </button>
                <button className='btn'>
                    &#x1f4ac;{comments[post.code] ? comments[post.code].length : `No comments yet`}
                </button>
            </div>
            <div className="col-md-6">
                {/* <Comments postComments={postComments} i={i} addComment={addComment}/> */}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    posts: state.posts,
    comments: state.comments
})

export default connect(mapStateToProps)(SinglePhoto)