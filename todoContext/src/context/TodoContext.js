import { createContext, useContext } from "react";

export const TodoContext = createContext({
    
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed:"false"
        } 
    ], 
})

export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider