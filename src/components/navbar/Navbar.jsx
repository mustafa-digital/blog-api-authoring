/**
 * -------------- NAVBAR ----------------
 * This component renders a nav bar that links to the authoring site pages: Home, View Posts, Create New Post, View My Posts
 */

import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>
      <h1>Home</h1>
      <h2>
        <Link to="post">View Posts</Link>
      </h2>
      <h2>New Post</h2>
      <h2>Comments</h2>
    </nav>
  )
}

export default Navbar;