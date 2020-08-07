import React, {useEffect, useState} from 'react';
import User from "./User";
import Loader from "./Loader";
import Error from "./Error";
const URL = "https://reqres.in/api/users"


function Users(props) {
    const [users,setUsers] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    let content

    useEffect(()=>{
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setUsers(data.data)
                setLoading(false)
            }).catch(()=>{
                setError(true)
        })
    },[])

    if(loading) content = <Loader/>

    if(error) content = <Error/>

    if(!loading && !content) content = (
        <main className="users-container">
            <h1>USERS</h1>
            {users.map((user,index) => <User key={index} user={user}/>)}

        </main>
    )
    return content
}

export default Users;