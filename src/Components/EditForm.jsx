import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSave } from "react-icons/fa";

const EditForm = ({ setIsEditing, editedTodo, updatingTodo }) => {
	const [updatedTodo, setUpdatedTodo] = useState(editedTodo.task);

	const submitHandler = (e) => {
		e.preventDefault();
		updatingTodo({ ...editedTodo, task: updatedTodo });
		setIsEditing(false);
	};

	return (
		<div>
			<div className="container-fluid">
				<form onSubmit={submitHandler} className="container1">
					<input
						className="form-control"
						type="text"
						placeholder="Edit a To Do..."
						onChange={(e) => setUpdatedTodo(e.target.value)}
						value={updatedTodo}
						required
						autoFocus
					/>
					<button className="col btn btn-primary" type="submit">
						<FaSave />
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditForm;
