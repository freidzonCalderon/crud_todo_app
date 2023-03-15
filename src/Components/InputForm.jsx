import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaPlus } from "react-icons/fa";

const InputForm = ({ todosHandler }) => {
	const [userInput, setUserInput] = useState({
		id: Date.now(),
		task: "",
		completed: false,
	});

	const submitHandler = (e) => {
		e.preventDefault();
		todosHandler(userInput);
		setUserInput({
			id: Date.now(),
			task: "",
			completed: false,
		});
	};

	return (
		<div className="container-fluid">
			<form onSubmit={submitHandler} className="container1">
				<input
					className="form-control"
					type="text"
					placeholder="Type a To Do..."
					onChange={(e) => {
						setUserInput({ ...userInput, task: e.target.value });
					}}
					value={userInput.task}
					required
				/>
				<button className="col btn btn-primary" type="submit">
					<FaPlus />
				</button>
			</form>
		</div>
	);
};

export default InputForm;
