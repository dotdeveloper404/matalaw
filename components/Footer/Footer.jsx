import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="contact">
            <h3>Contact Us</h3>
            <ul>
              <li><img src="/assets/pin.png" alt="" />Your complete address street</li>
              <li><img src="/assets/email (1).png" alt="" />info@yourmail.com</li>
              <li><img src="/assets/call (1).png" alt="" /> +1 (200) 000-0000</li>
            </ul>
          </div>
          <div className="about">
            <img src="/assets/mata law-01.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div>
              <a href><img src="/assets/fb.png" alt="" /></a>
              <a href><img src="/assets/twitter.png" alt="" /></a>
              <a href><img src="/assets/insta.png" alt="" /></a>
            </div>
          </div>
          <div className="contact-1">
            <h3>Working Hours</h3>
            <ul>
              <li>Mon – Fri: 7.00am – 6.</li>
              <li>  Sat: 7.00am – 6.00pm</li>
              <li> Sun: 8.00am – 6.00pm</li>
            </ul>
          </div>  
        </div>    
      </div></footer>  
      </>
  )
}

export default Footer