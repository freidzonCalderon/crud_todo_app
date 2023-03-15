import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, editMode }) => {
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleComplete={toggleComplete}
					deleteTodo={deleteTodo}
					editMode={() => editMode(todo)}
				/>
			))}
		</div>
	);
};

export default TodoList;
