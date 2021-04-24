import ListItem from './ListItem';

function List( {
  setTodos, filteredTodo
}) {
  return (
    <ul className="list">
      {filteredTodo.map(todo => (
        <ListItem key={todo.id} todo={todo} setTodos={setTodos} filteredTodo={filteredTodo} />
      ))}
    </ul>
  )
}

export default List;