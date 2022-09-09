import React, { useEffect, useState } from 'react'
import data from '../data.json'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [menu, setMenu] = useState([])
 
  useEffect(() => {
    setMenu(data)
  },[])
  function addtocart(index) {
    data[index].status = "added"
    
    setMenu(data)
    
  }




  return (
    <div className="menu">
      {menu.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img style={{ width: '100%', height: '200px' }} src={item.image} alt={item.image} />
            <h2>Name:{item.name}</h2>
            <h3>Price:{item.price}$</h3>
            <button onClick={() => { addtocart(index) }}>add to cart</button>
            <button><Link to={`/menu/${item.id}`}>Details</Link></button>

          </div>

        )



      })}
    </div >
  )
}
