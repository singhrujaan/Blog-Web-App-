
import './App.css';
import Home from './components/Blog/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/Blog/About';
import NewPost from './components/Blog/NewPost';
import PostPage from './components/Blog/PostPage';
import Missing from './components/Blog/Missing';
import Nav from './components/Blog/Nav';
import Footer from './components/Blog/Footer';
import Header from './components/Blog/Header';
import EditPost from './components/Blog/EditPost';
import {DataProvider} from './components/Blog/context/DataProvider'
function App() {
  

  
  return (
    <div className="App">
      
      <Router>
        <Header />
        <DataProvider>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route exact path='/post' element={<NewPost/>} />
          <Route path="/edit/:id" element={<EditPost/>} />
          <Route path='*' element={<Missing />} />
          <Route path='/post/:id' element={<PostPage/>} />
      </Routes>
      </DataProvider>
      <Footer />
    </Router>


    </div >
  );
}

export default App;



