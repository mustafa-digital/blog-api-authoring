import { useState } from 'react'
import './App.css'

/**
 * -------------- COMPONENTS ----------------
 */
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <h1>Blog Author Homepage</h1>
    <p>Here you can create and edit blog posts, publish or unpublish, or handle comments.</p>
    </>
  )
}

export default App
