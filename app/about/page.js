import React from 'react'
import Image from 'next/image'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
const About = () => {

  return (
    <>
      <Header/>
    <section class="about">
    <div class="container">
        <div class="about-inner">
            <div class="about-text">
              
                <h1>We're Advocates for <br/> Justice and Right</h1>
                <p class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src="/assets/Layer 4.png" alt="" class="img-2"/>
                <img src="/assets/Rectangle 4 copy.png" alt="" class="img-3"/>
                <p class="p-4">ASK A LAWYER</p>
                <h2 class="h-0">We Provide Solid Law</h2>
                  <h3 class="h-2">Practice</h3>
                  <button class="call-btn">CALL US</button>
                  <button class="btn-6">+1 (000) 000-0000 </button>
            </div>
            <div class="about-image">
                <img src="/assets/Layer 3.png" alt="About Us"/>
                <div class="ask-lawyer">
                <h6 class="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ut soluta atque dolores illo porro voluptate sunt eos, nesciunt delectus aspernatur molestias odio dolore quis hic veritatis enim dolorem. </h6>

                </div>
            </div>
        </div>
    </div>
</section>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

<Footer/>    
   

    </>
  )
}

export default About