import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSave } from "react-icons/fa";

const EditForm = () => {
	return (
		<div>
			<div className="container-fluid">
				<form className="container1">
					<input
						className="form-control"
						type="text"
						placeholder="Edit a To Do..."
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
