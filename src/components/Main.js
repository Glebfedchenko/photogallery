import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'

const Main = () =>
    <div>
        <h1 className='text-center'><Link to='/'>Photo Gallery</Link></h1>
        <Grid/>
    </div>

export default Main