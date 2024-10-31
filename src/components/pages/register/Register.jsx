/**
 * -------------- Register ----------------
 * This component renders the signup page
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import ControlledInput from "../../controlledinput/ControlledInput";

/* Import CSS Module */
import styles from "./Register.module.css";

function EmailInput() {
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);

	const handleChange = (event) => {
		// Validate email on change
		let validationErrors = [];
		if (!event.target.checkValidity()) {
			if (event.target.validity.typeMismatch) {
				validationErrors.push("Must be a valid email address.");
			}
		}

		if (validationErrors.length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors([]);
		}
		setEmail(event.target.value);
	};

	return (
		<ControlledInput
			type="email"
			name="email"
			label="Email"
			value={email}
			handleChange={handleChange}
			errors={errors}
			required={true}
		/>
	);
}

function UsernameInput() {
	const [username, setUsername] = useState();

	const handleChange = (event) => {
		setUsername(event.target.value);
	};

	const validationProps = {
		minLength: 6,
		maxLength: 30,
	};
	return (
		<ControlledInput
			type="text"
			name="username"
			label="Username"
			value={username}
			handleChange={handleChange}
			required={true}
			validationProps={validationProps}
		/>
	);
}

function PasswordInput() {
	const [password, setPassword] = useState();
	const handleChange = (event) => {
		setPassword(event.target.value);
	};

	const validationProps = {
		minLength: 6,
	};
	return (
		<ControlledInput
			type="password"
			name="password"
			label="Password"
			value={password}
			handleChange={handleChange}
			required={true}
			validationProps={validationProps}
		/>
	);
}

function PasswordConfirmInput() {
	const [passwordConfirm, setPasswordConfirm] = useState();
	const handleChange = (event) => {
		setPasswordConfirm(event.target.value);
	};
	const validationProps = {
		minLength: 6,
	};
	return (
		<ControlledInput
			type="password"
			name="password-confirm"
			label="Confirm Password"
			value={passwordConfirm}
			handleChange={handleChange}
			required={true}
			validationProps={validationProps}
		/>
	);
}

function RegisterForm({ handleSubmit }) {
	return (
		<form
			action="/register"
			method="POST"
			onSubmit={handleSubmit}
			className={styles.form}
		>
			<EmailInput />
			<UsernameInput />
			<PasswordInput />
			<PasswordConfirmInput />
			<button
				className={styles.registerBtn}
				type="submit"
			>
				Register
			</button>
		</form>
	);
}

function Register() {
	// const [email, setEmail] = useState();
	// const [username, setUsername] = useState();
	// const [password, setPassword] = useState();
	// const [passwordConfirm, setPasswordConfirm] = useState();

	// const handleEmailChange = (event) => {
	// 	const newEmail = event.target.value;
	// 	//validate the email here
	// 	let validationErrors = {};
	// 	// if (newEmail.length < )

	// 	setEmail(event.target.value);
	// };

	// const handleUsernameChange = (event) => {
	// 	setUsername(event.target.value);
	// };

	// const handlePasswordChange = (event) => {
	// 	setPassword(event.target.value);
	// };

	// const handlePasswordConfirmChange = (event) => {
	// 	setPasswordConfirm(event.target.value);
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
	};

	return (
		<div className={styles.wrapper}>
			<h1>Register an Account</h1>
			<RegisterForm handleSubmit={handleSubmit} />
			<p>
				Already have an account? Click <Link to="/login">here</Link> to log in
			</p>
		</div>
	);
}

export default Register;
