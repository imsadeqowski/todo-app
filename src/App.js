import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));

    if (getTodos) {
      setTodos(getTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.length < 5) {
      setError("کار خود را وارد کنید (حداقل 5 کارکتر)");
      return false;
    }

    setTodos([...todos, { id: Date.now(), title: todo, done: false }]);
    setTodo("");
    setError(null);
  };

  const delHandler = (todoId) => {
    if (window.confirm("از حذف مطمئنی؟")) {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    }
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((item) => item.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };
    setTodos(duplicateTodos);
    console.log(todos);
  };
  return (
    <Layout>
      <Header />
      <Form
        error={error}
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
      />
      <Lists del={delHandler} done={doneHandler} todos={todos} />
    </Layout>
  );
}

export default App;
