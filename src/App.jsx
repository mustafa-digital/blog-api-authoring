import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import './styles/reset.css';


/**
 * -------------- COMPONENTS ----------------
 */
// import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/pages/home/Home.jsx';
import Post from './components/pages/post/Post.jsx';
import NewPost from './components/pages/newpost/NewPost.jsx';
import Comment from './components/pages/comment/Comment.jsx';
import Layout from './components/layout/Layout.jsx';


/**
 * -------------- ROUTES ----------------
 */

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/post",
//     element: <Post />,
//   },
//   {
//     path: "/new-post",
//     element: <NewPost />,
//   },
//   {
//     path: "/comment",
//     element: <Comment />,
//   }
// ]);
function App() {
  return (
    <Layout> 
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/post" element={ <Post /> } />
        <Route path="/new-post" element={ <NewPost /> } />
        <Route path="/comment" element={ <Comment /> } />
      </Routes>
    </Layout>
  )
}

export default App;
