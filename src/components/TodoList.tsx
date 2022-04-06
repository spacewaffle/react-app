import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';


interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="todos">
      {todos.map( t => (
          <SingleTodo
            todo={t}
            key={t.id}
            todos={todos}
            setTodos={setTodos}
          ></SingleTodo>
      ))}
    </div>
  )
}

export default TodoList