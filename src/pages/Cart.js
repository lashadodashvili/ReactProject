import React, { useEffect, useState } from 'react'
import data from '../data.json'
import './Menu.css'


export default function Cart() {
  const [cart, setCart] = useState([])

  const [count, setCount] = useState(0)

  const [price, setPrice] = useState(0)

  let addeditems = data.filter(filtered)

  function filtered(item) {
    return item.status === 'added'
  }

  function deletecart(index) {


    addeditems[index].status = 'add to cart'
    setCart(addeditems)
    if (cart.length === 1) { setCount(0); setPrice(0) }
  }


  useEffect(() => {
    setCart(addeditems)
    setCount(addeditems.length)
    setPrice(addeditems.reduce((total, item) => total + (item.price), 0))
  }, addeditems)






  return (





    <div >
      <div className='counter'>
        <h4 >Count:{count} </h4>
        {console.log(cart)}

        <h5>Total Price :{price}$</h5>
      </div>

      <div className="menu">
        {cart.map((item, index) => {




          if (item.status === 'added') {

            return (
              <>
                <div key={index} className='card'>
                  <img style={{ width: '100%', height: '200px' }} src={item.image} alt={item.image} />
                  <h2  >Name:{item.name}</h2>
                  <h3  >Price:{item.price}$</h3>
                  <button onClick={() => deletecart(index)}>Delete</button>
                </div>
              </>

            )
          }




        })}
      </div>

    </div>
  )
}
