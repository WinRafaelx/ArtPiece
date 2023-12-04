import React from 'react'
import { Link } from 'react-router-dom'

function Success(props) {
  console.log(props)
  return (
    <>
      <img src={props.imgUrl} />
      <div>Success</div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/create">Create New Iamge</Link>
    </>
  )
}

export default Success