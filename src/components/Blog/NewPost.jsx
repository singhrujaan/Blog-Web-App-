import React from 'react'
import { useContext } from 'react'
import DataContext from './context/DataProvider'

export default function NewPost() {
    const {handleSubmit,setPostBody,postBody,postTitle,setPostTitle} = useContext(DataContext)
    return (
        <div className='newpost'>
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='text' placeholder='enter your title' value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}/><br/>
                <label>Body:</label>
                <textarea placeholder='enter your paragraph'  value={postBody} onChange={(e)=>setPostBody(e.target.value)}/>
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}
