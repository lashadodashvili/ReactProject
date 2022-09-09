import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data.json'
import './details.css'


export default function Details() {
    let { menuID } = useParams()
    let details = data.find((item) => {
        return item.id == menuID
    })
    return (
        <div className='details' >
            <img className='descriptionimg' src={details.image} alt='food' />
            <div className='description'>
                <h1>Description:<span>{details.description}</span></h1>
                <h2>Name: <span>{details.name}</span></h2>
                <h3>Price:<span>{details.price}$</span></h3>
                <h4>Category:<span>{details.category}</span></h4>
                <button><Link to='/menu'>Back To Menu</Link></button>
            </div>
        </div>
    )
}

