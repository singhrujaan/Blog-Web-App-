// import { createContext } from "react/cjs/react.development";
import { createContext } from "react";
import { useState, useEffect } from 'react';
import api from '../api/posts';

const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    // const navigate=useNavigate();
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const result = await api.get('/posts')
          setPosts(result.data)
        } catch (err) {
          console.log(err.message)
        }
      }
      fetchPosts();
    }, [])

    useEffect(() => {
        const result = posts.filter((post) => ((post.title).toLowerCase()).includes(search.toLowerCase())
          || ((post.body).toLowerCase()).includes(search.toLowerCase()))
        setSearchResults(result.reverse())
      }, [posts, search])

      const handleDelete = async (id) => {
        try {
          await api.delete(`/posts/${id}`)
          const deletePost = posts.filter(post => post.id !== id);
          setPosts(deletePost);
    
        } catch (err) {
          console.log(err.message)
        }
      }
      const handleEdit = async (id) => {
        const updatedPost = { id, title: editTitle, datetime: new Date(), body: editBody };
        try {
          const response = await api.put(`/posts/${id}`, updatedPost);
          setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
          setEditTitle('');
          setEditBody('');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPost = { id, title: postTitle, body: postBody, datetime: new Date() };
        try {
          const result = await api.post('/posts', newPost)
          const finalPost = [...posts, result.data];
          setPosts(finalPost);
          setPostTitle('')
          setPostBody('')
        } catch (err) {
          console.log(err.message)
        }
        // navigate.push('/')
      }


    return(
    <DataContext.Provider value={{
        search, setSearch,searchResults,handleSubmit,setPostBody,postBody,postTitle,setPostTitle, posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle,handleDelete
    }}>
        {children}
    </DataContext.Provider>
)}
    
export default DataContext;