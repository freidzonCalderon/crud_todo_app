import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./Components/InputForm";
import EditForm from "./Components/EditForm";
import TodoList from "./Components/TodoList";

function App() {
	return (
		<div className="App">
			<h1 className="mt-5">To Do Application</h1>

			<EditForm />
			<InputForm />
			<TodoList />
		</div>
	);
}

export default App;
