import React from 'react'
import Todo from "./Todo"

export default function Todolist({ todos, setTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    todos.map((todo) =>

                        (<Todo
                            setTodos={setTodos}
                            key={todo.id}
                            todos={todos}
                            todo={todo}
                            />)
                    )
                }
            </ul>
        </div>
    )
}
