/**
 * -------------- LOGIN ----------------
 * This component renders the login page
 */

function Login() {
	return (
		<form
			action="/login"
			method="POST"
		>
			<label>
				Username
				<input
					type="text"
					name="username"
				/>
			</label>
			<label>
				Password
				<input
					type="password"
					name="password"
				/>
			</label>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
