import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types";
import axios from "axios";
import List from "./List";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
       <List items={users} renderItem={(user: IUser) => <div key={user.id}>{user.name}</div>}/>
    );
};

export default UsersPage;