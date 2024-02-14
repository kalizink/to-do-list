import React, { useState } from "react";

export default function ToDoForm(props) {
	const [input, setInput] = useState(``);

	function handleChange(event) {
		setInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
	}

	return (
		<div className="ToDoForm">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add a to do"
					value={input}
					name="text"
					className="todo-input"
					onChange={handleChange}
				/>
				<input type="submit" value="Add Todo" />
			</form>
		</div>
	);
}
