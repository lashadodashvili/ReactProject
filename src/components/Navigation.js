import React from 'react'
import './Navigation.css'
import { NavLink, Outlet } from 'react-router-dom'





export default function Navigation() {
    
    



    return (
        <div className='navigator'>
            <nav>
                <ul>
                    <li><NavLink to='/ReactProject/'>Home</NavLink></li>
                    <li><NavLink to='/ReactProject/contactus'>ContactUs</NavLink></li>
                    <li><NavLink to='/ReactProject/menu'>Menu</NavLink></li>
                    <li><NavLink to='/ReactProject/cart'>Cart</NavLink></li>
                </ul>
                
                

            </nav>
            <Outlet />
        </div>
    )
}
