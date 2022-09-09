import React from 'react'
import ControlledCarousel from '../components/ControlledCarousel'
import './Home.css'
let profiles = [
  {
    name: "Sebastian Bennett", position: "First Chief", img: "https://media.istockphoto.com/photos/chef-presents-something-on-a-black-background-picture-id1165683221?k=20&m=1165683221&s=612x612&w=0&h=MQTYoVWgEWVA4Sq9NGa9r6Cb586e5h18cqcXd8V7rqg="

  },
  {
    name: "Graham Griffiths", position: "Second Chief", img: "https://media.istockphoto.com/photos/mature-cook-chef-holding-an-empty-plate-on-a-black-background-picture-id1168054510?k=20&m=1168054510&s=612x612&w=0&h=bn6lDewSCzktDE_ks8TiAu_jZZBanfILkgw2pyt2cQg="
  },
]



export default function Home() {
  return (
    <div className='home'>
      <ControlledCarousel />
      <h1 className='h1'>Meet Our Team</h1>
      <section className='sectionone'>

        {profiles.map((item) => {
          return (
            <div  className='profile'>
              <h2><span>Name:</span> {item.name}</h2>
              <h3><span> Position:</span>{item.position}</h3>
              <img src={item.img} alt='chief' />


            </div>

          )
        })}



      </section>

    </div>


  )
}
