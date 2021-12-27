import React from 'react'
import './blog.css'
import { useContext } from 'react'
import DataContext from './context/DataProvider'
import {Link} from 'react-router-dom'

export default function Nav() {
    const {search,setSearch} = useContext(DataContext)
    return (
        <nav>
            <ul className='navbar'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/post'><li>Post</li></Link> 
                <Link to='/about'><li>About</li></Link>
            </ul>
                <input type='text' className='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search' />
            
        </nav>
    )
}
