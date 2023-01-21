import { useReducer, useEffect } from "react"
import {todoReducer} from '../useReducer/todoReducer'


const initialState = [] 

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = ()=>{

    const [state, dispatch] = useReducer(todoReducer, initialState, init)
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(state))
      
    }, [state])
    
    const handleSubmit = (todo)=>{
        const action = {
            type: '[TODO] addTodo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDelete = (todo)=>{
        const action = {
            type: '[TODO] deleteTodo',
            payload: todo.id
        }
        dispatch(action)
    }

    const handleToggle = (id)=>{
        const action = {
            type: '[TODO] toggleTodo',
            payload: id
        }
        dispatch(action)
    }

    return{
        state, handleSubmit, handleDelete, handleToggle
    }
}