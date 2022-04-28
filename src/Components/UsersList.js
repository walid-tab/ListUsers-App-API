import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{setUsers(res.data);setLoading(false)})
      .catch((err)=>console.log(err))
    }, [])
    console.log(users)
  return (
    <div className='listUser' >
        {
            loading? 
            <div className="loader-wrapper">
            <div className="loader">
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
            </div>
            <div className="text">LOADING...</div>
          </div>
            : users.map((user,index) => (
                <User  user={user} key={index} />
              ))
        }
    </div>
  )
}

export default UsersList