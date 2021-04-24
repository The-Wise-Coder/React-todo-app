function ListItem( {
  todo, setTodos, filteredTodo
}) {
  const {
    text,
    id,
    completed,
    deleted
  } = todo;

  function handleCheck() {
    setTodos(filteredTodo.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    }));
  }

  function handleDelete() {
    setTodos(filteredTodo.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          deleted: !todo.deleted
        };
      }
      return todo;
    }));

    setTimeout(() => {
      setTodos(filteredTodo.filter(todo => todo.id !== id));
    }, 500);
  }

  return (
    <div className={`list-item ${completed && 'checked'} ${deleted && 'removed'}`}>
      <li>{text}</li>
      <button onClick={handleCheck} className='btn-check'><i class="fas fa-check"></i></button>
      <button onClick={handleDelete} className='btn-delete'><i class="fas fa-trash"></i></button>
    </div>
  )
}

export default ListItem;