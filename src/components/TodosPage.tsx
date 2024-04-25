import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo, IUser} from "../types";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchTodos()
    })

    async function fetchTodos() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const data = await response.json()
            setTodos(data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
    );
};

export default TodosPage;