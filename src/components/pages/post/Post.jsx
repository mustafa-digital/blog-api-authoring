/**
 * -------------- POST ----------------
 * This component fetches all posts from the API with GET "/all"
 * Then it renders the page with all of the posts
 */

import { useEffect, useState } from "react";

function Post() {
	const [posts, setPosts] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState();
	const URL = "localhost:3000/post/all";

	useEffect(async () => {
		let didCancel = false;
		const fetchPosts = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const result = await fetch(URL);

				if (!result.ok) {
					throw new Error("Failed to fetch.");
				}

				const data = await result.json();

				if (!didCancel) {
					setPosts(data.posts);
				}
			} catch (error) {
				if (!didCancel) {
					setIsError(true);
				}
			}
		};

		fetchPosts();
		setIsLoading(false);

		return () => {
			didCancel = true;
		};
	}, []);

	return (
		<>
			<h1>This is the post page.</h1>
			{isError && <div>Something went wrong...</div>}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{posts.map((post) => {
						<li>post</li>;
					})}
				</ul>
			)}
		</>
	);
}

export default Post;
