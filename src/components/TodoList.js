import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  const { todos, removeTodo, editTodo } = props;
  return (
    <div>
      <h2>TodoList</h2>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default React.memo(TodoList);
