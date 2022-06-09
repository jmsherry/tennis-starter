import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <Link to='/'>Home</Link>{" "}
      <Link to='/admin/members'>Members</Link>{" "}
      <Link to="/admin/courts">Courts</Link>
      <Outlet />
    </>
    
  )
}

export default Admin