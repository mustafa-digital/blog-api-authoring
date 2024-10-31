import styles from "./Input.module.css";

function Required() {
	return (
		<span
			className={styles.required}
			title="This field is required"
		>
			(*)
		</span>
	);
}

function ErrorTooltip({ errors }) {
	return (
		<div className={styles.errorWrapper}>
			<ul>
				{errors.map((error) => (
					<li>{error}</li>
				))}
			</ul>
		</div>
	);
}

function ControlledInput({
	handleChange,
	type,
	value,
	name,
	label = "No Label",
	errors = {},
	required = false,
	validationProps = {},
}) {
	return (
		<label>
			{`${label}`}
			{required && <Required />}
			<input
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				minLength={validationProps.minLength}
				maxLength={validationProps.maxLength}
				min={validationProps.min}
				max={validationProps.max}
				// placeholder="john@example.com"
				required
			></input>
			{errors.length > 0 && <ErrorTooltip errors={errors} />}
		</label>
	);
}

export default ControlledInput;
