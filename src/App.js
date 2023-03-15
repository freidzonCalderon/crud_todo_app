import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./Components/InputForm";
import EditForm from "./Components/EditForm";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editedTodo, setEditedTodo] = useState(null);

	const todosHandler = (todo) => {
		setTodos(todos.concat(todo));
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editMode = (todo) => {
		setIsEditing(true);
		setEditedTodo(todo);
	};

	const updatingTodo = (task) => {
		setTodos(
			todos.map((todo) =>
				todo.id === task.id ? { ...todo, task: task.task } : todo
			)
		);
	};

	return (
		<div className="App">
			<h1 className="mt-5">To Do Application</h1>

			{isEditing ? (
				<EditForm
					setIsEditing={setIsEditing}
					editedTodo={editedTodo}
					updatingTodo={updatingTodo}
				/>
			) : (
				<InputForm todosHandler={todosHandler} />
			)}

			{todos.length > 0 && (
				<TodoList
					todos={todos}
					toggleComplete={toggleComplete}
					deleteTodo={deleteTodo}
					editMode={editMode}
				/>
			)}
		</div>
	);
}

export default App;
