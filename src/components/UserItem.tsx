import React, {FC, ReactNode} from 'react';
import {IUser} from "../types";

interface UserItemprops {
    user: IUser;
    onClick?: (user: IUser) => void;
    children?: ReactNode;
}

const UserItem: FC<UserItemprops> = ({user}) => {
    return (
        <div onClick={() => (user)} style={{padding: 15, border: '1px solid gray'}}>
            {user.id} {user.name} email: {user.email} lives on {user.address.street} in {user.address.city}
        </div>
    );
};

export default UserItem;