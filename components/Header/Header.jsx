

import React from 'react'

const Header = () => {
  return (
    <>
      <header>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <h1><a href="#"><img src="/assets/mata law-01.png" alt="" /></a></h1>
          </div>
          <nav>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">PRACTICE AREAS</a></li>
              <li><a href="#">FEATURES</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg></li>
              <li><button>CONTACT US</button></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <p className="p-1">LEAVE COURT TO US</p>
          <h1>Your Initial <br /> Consultation <br /> with A Lawyer Is Free.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum voluptatibus deserunt molestiae? Officiis<br /> ipsam et ea incidunt id tempora iusto labore, fugit libero quisquam odio aperiam, sequi nemo. Dolore.</p>
          <button className="hero-btn">LEARN MORE</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header