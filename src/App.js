import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [input,
    setInput] = useState('');
  const [todos,
    setTodos] = useState([]);
  const [status,
    setStatus] = useState('all');
  const [filteredTodo,
    setFilteredTodo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  },
    []);

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodo(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodo(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  },
    [status,
      todos]);

  return (
    <div className='container'>
      <header>
        <h1>Today's Tasks</h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus} />
      {filteredTodo.length > 0 ? <List setTodos={setTodos} filteredTodo={filteredTodo} /> : <h3 className="note">No Task To Show</h3>}
      <footer>
        <p>Created by Pawan, Copyright &copy; 2021</p>
      </footer>
    </div>
  )
}

export default App;