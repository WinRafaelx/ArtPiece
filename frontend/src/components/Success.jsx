import React from 'react'
import { Link } from 'react-router-dom'

function Success(props) {

  const refreshPage = () => {
    window.location.reload(false);
  }
  console.log(props)
  return (
    <>
      <img src={props.imgUrl} />
      <div>Success</div>
      <Link to="/">Home</Link>
      <br />
      <Link onClick={refreshPage}>Create New Iamge</Link>
    </>
  )
}

export default Success