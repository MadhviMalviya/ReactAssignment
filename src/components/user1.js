import React from 'react'




const image = {
  width: 100,
  height: 100,
}
const card = {
  background: "blueviolet",
  width: 400
}

function User1(props) {
  return (
    <div className='card' style={card} >
      <img style={image} src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' ></img>
      <div  >
        <h4>{props.title}</h4>
        <h3>{props.name}</h3>
        <p>{props.description} </p>
      </div>
    </div>
  )
}

export default User1
