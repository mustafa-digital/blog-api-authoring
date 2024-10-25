/**
 * -------------- NAVBAR ----------------
 * This component renders a nav bar that links to the authoring site pages: Home, View Posts, Create New Post, View My Posts
 */

import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

const pathName = {
	home: "/",
	post: "/post",
	newPost: "/new-post",
	comment: "/comment",
};

function Navbar() {
	const location = useLocation();

	return (
		<nav className={styles.nav}>
			<h1>
				<Link
					to={pathName.home}
					className={
						location.pathname === pathName.home ? styles.current : null
					}
				>
					Home
				</Link>
			</h1>
			<h2>
				<Link
					to={pathName.post}
					className={
						location.pathname === pathName.post ? styles.current : null
					}
				>
					View Posts
				</Link>
			</h2>
			<h2>
				<Link
					to={pathName.newPost}
					className={
						location.pathname === pathName.newPost ? styles.current : null
					}
				>
					New Post
				</Link>
			</h2>
			<h2>
				<Link
					to={pathName.comment}
					className={
						location.pathname === pathName.comment ? styles.current : null
					}
				>
					Comments
				</Link>
			</h2>
		</nav>
	);
}

export default Navbar;
