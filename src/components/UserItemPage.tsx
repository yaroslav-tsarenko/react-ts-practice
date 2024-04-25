import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types";
import axios from "axios";
import {useParams} from "react-router-dom";

interface UserItemPageParams {
    [key: string]: string | undefined;

    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button>Back</button>
            <h1>User Page {user?.name}</h1>
            <div>{user?.email}</div>
        </div>
    );
};

export default UserItemPage;