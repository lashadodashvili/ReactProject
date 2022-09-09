import React from "react";
import './contactus.css'
export default function Contactus() {





  return (
    <div className="contactus">
      <div className="map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.0790828140225!2d43.47624782688896!3d42.02088413732035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40434dc2315eb775%3A0x602c05a76eb1044a!2sPhona!5e0!3m2!1sen!2sge!4v1660220754783!5m2!1sen!2sge"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
        <form>
          <input type='text' placeholder="Enter Your name" />
          <input type='email' placeholder="Enter your email address" />
          <textarea placeholder='Enter your text' />
          <input type='submit' placeholder="Enter" />

        </form>
      </div>

    </div>




  )
}
