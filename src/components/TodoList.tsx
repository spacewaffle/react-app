import React, { useState } from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';


interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    doneTodos: Todo[];
    setDoneTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, doneTodos, setDoneTodos}) => {

    const completedTodos = todos.filter(todo => todo.isDone)
    const activeTodos = todos.filter(todo => !todo.isDone)

  return (
      <div className="container">
          <div className="todos">
            <span className="todos">Active Tasks</span>
            {activeTodos.map( t => (
                <SingleTodo
                    todo={t}
                    key={t.id}
                    todos={todos}
                    setTodos={setTodos}
                ></SingleTodo>
            ))}
          </div>
          <div className="todos remove">
              <span className="completed">Done</span>
            {completedTodos.map( t => (
                <SingleTodo
                    todo={t}
                    key={t.id}
                    todos={todos}
                    setTodos={setTodos}
                ></SingleTodo>
            ))}

          </div>
      </div>
  )
}

export default TodoList