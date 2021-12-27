import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from './context/DataProvider'
export default function PostPage() {
    const {posts,handleDelete} = useContext(DataContext)
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString()===id)
    return (
        <div>
            {post && 
                    <>
                        <h2>{post.title}</h2>    
                        <p>{post.datetime}</p>    
                        <p>{post.body}</p>   
                        <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
                        <button type='submit' onClick={()=>handleDelete(post.id)}>delete</button>
                    </> 
            }
        </div>
    )
}
