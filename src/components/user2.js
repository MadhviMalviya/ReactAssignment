import React from 'react'

const image = {
  width: 100,
  height: 100
}
const card = {
  background: 'blueviolet',
  width: 400
}

function User2(props) {
  return (
    <>
      <div className='card' style={card}>
        <img style={image} src=' https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.' ></img>
        <div>
          <h4>{props.title}</h4>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default User2



