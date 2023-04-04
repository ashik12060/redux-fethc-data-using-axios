import './App.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from './services/Action/TodosAction';

const TodoApp = () => {
    const dispatch = useDispatch();

    const {isLoading, todos,error}= useSelector((state)=>state);
   useEffect(()=>{
    dispatch(getAllTodos())
   }
    
    ,[])
  return (
    <div className='App'>
        {isLoading && <h3>Loading...</h3>}
        {error && <h4>{error.message}</h4>}
        {todos.map((todo)=>{
          return <article className="todo-container" key={todo.id}>
            <h3>ID: {todo.id}</h3>
            <h3>Title: {todo.title}</h3>
          </article>
        })}
        
        
    </div>
  )
}

export default TodoApp;