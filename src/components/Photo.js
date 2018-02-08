import React from 'react'
import { Link, Route } from 'react-router-dom'
import SinglePhoto from './SinglePhoto'

const Photo = ({ post, comments, i }) =>
    <div className='col-md-4 col-sm-4 col-lg-4' id='photocontainer'>
        <Link to={`/post/${post.code}`}>
            <img className='img-responsive' src={post.display_src} alt="" />
        </Link>
        <p>{post.caption}</p>
        <button className='btn'>
            &hearts;{post.likes}
        </button>
        <button className='btn'>
            &#x1f4ac;{comments[post.code] ? comments[post.code].length : `No comments yet`}
        </button>
        <Route path={`/post/${post.code}`} component={SinglePhoto}/>
    </div>

export default Photo
