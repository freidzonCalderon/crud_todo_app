import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const TodoItem = () => {
	return (
		<div className="todo-Container">
			<form className="container">
				<input
					className="form-check-input"
					type="checkbox"
					name="task"
					id="task"
				/>
				<label className="form-check-label" htmlFor="task">
					Do something
				</label>
				<button type="button" className="btn btn-outline-secondary">
					<FaPencilAlt />
				</button>
				<button type="button" className="btn btn-outline-danger">
					<FaTrashAlt />
				</button>
			</form>
		</div>
	);
};

export default TodoItem;
