import React from 'react'
import './Navigation.css'
import { NavLink, Outlet } from 'react-router-dom'





export default function Navigation() {
    
    



    return (
        <div className='navigator'>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/contactus'>ContactUs</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/cart'>Cart</NavLink></li>
                </ul>
                
                

            </nav>
            <Outlet />
        </div>
    )
}
