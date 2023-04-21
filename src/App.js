import React from 'react'
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncAddCash, asyncGetCash} from "./vanilaRedux/mainReducer";
import {fetchUsers} from "./vanilaRedux/usersReducer";


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.main.cash)
    const users = useSelector(state => state.users.users)

    return (
        <div>
            {cash}

            <button onClick={() => dispatch(asyncAddCash(10))}>Add cash</button>
            <button onClick={() => dispatch(asyncGetCash(10))}>Get cash</button>

            <button onClick={() => dispatch(fetchUsers())}>Add customers from db</button>

            {
                users.map(u => {
                    return <div>{u.name}</div>
                })
            }

        </div>
    );
}

export default App;
