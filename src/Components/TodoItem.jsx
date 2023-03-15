import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editMode }) => {
	const [isCompleted, setIsCompleted] = useState(todo.completed);

	const completeCheckHandler = () => {
		setIsCompleted(!isCompleted);
		toggleComplete(todo.id);
	};
	return (
		<div className="todo-Container">
			<form className="container">
				<input
					className="form-check-input"
					type="checkbox"
					name={todo.id}
					id={todo.id}
					onChange={completeCheckHandler}
				/>

				<label
					className={
						isCompleted
							? "form-check-label text-decoration-line-through text-secondary"
							: "form-check-label"
					}
					htmlFor={todo.id}
				>
					{todo.task}
				</label>
				<button
					onClick={() => editMode(todo)}
					type="button"
					className="btn btn-outline-secondary"
				>
					<FaPencilAlt />
				</button>
				<button
					onClick={() => deleteTodo(todo.id)}
					type="button"
					className="btn btn-outline-danger"
				>
					<FaTrashAlt />
				</button>
			</form>
		</div>
	);
};

export default TodoItem;
