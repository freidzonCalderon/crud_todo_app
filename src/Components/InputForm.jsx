import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaPlus } from "react-icons/fa";

const InputForm = () => {
	return (
		<div className="container-fluid">
			<form className="container1">
				<input
					className="form-control"
					type="text"
					placeholder="Type a To Do..."
				/>
				<button className="col btn btn-primary" type="submit">
					<FaPlus />
				</button>
			</form>
		</div>
	);
};

export default InputForm;
