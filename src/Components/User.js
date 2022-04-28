import React from 'react'
import { Link } from 'react-router-dom'

function User({user}) {

  return (
    <div>
      
  <div className="card">
    <img src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="Person" className="card__image" />
    <p className="card__name">{user.name}</p>
    <div className="grid-container">

     </div>
    <Link to={`/details/${user.id}`}>
    <button className="btn draw-border">Details</button>
    </Link>
    
    

  </div>
  
  
  </div>


    
  )
}

export default User