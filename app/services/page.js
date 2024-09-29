import React from 'react'
import Image
 from 'next/image'
import Header from '@/components/Header/Header'
const Services = () => {
  return (
        <>
        <Header loadDataPageWise={ <h1>Our Service</h1>}/>
       <section class="practice-areas"> 
        <div class="container">
            <h2 class="h-11">What We Do</h2>
            <h3 class="h-12">A Passion For Justice, Our Practice Areas</h3>
            <p class="p-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut modi doloremque distinctio aperiam atque culpa rerum ea. Vero, tempore odit rem consectetur tempora omnis culpa, quam est, provident dolores consequatur?</p>
            <button class="learnmore-1">LEARN MORE</button>
            <div class="practice-areas-inner">
                <div class="area">
                    <img src="/assets/Layer 8.png" alt="Area 1"/>
                    <h4>Your Service Test Here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="#" class="button">Read More</a>
                </div>
                <div class="area">
                    <img src="/assets/Layer 7.png" alt="Area 2"/>
                    <h4>Your Service Test Here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="#" class="button">Read More</a>
                </div>
                <div class="area">
                    <img src="/assets/Layer 9.png" alt="Area 3"/>
                    <h4>Your Service Test Here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="#" class="button">Read More</a>
                </div>
            </div>
        </div>
    </section>
        </>
  )
}

export default Services