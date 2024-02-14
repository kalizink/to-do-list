import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoApp from "./ToDoApp.js";

export default function ToDoList() {
	const [todos, setTodos] = useState([]);

	function addTodo(todo) {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		console.log(...todos);
	}

	return (
		<div className="ToDoList">
			<h1>What's the plan for today?</h1>
			<ToDoForm onSubmit={addTodo} />
			<ToDoApp />
		</div>
	);
}
