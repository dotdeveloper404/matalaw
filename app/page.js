import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
export default function Home() {
  return (
    <div>

      <Header/>
  
    <section className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <h4 className="aboutus-0">About Us</h4>
            <h1>We're Advocates for<br /> Justice and Right</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="/assets/Layer 4.png" alt="" className="img-2" />
            <img src="/assets/Rectangle 4 copy.png" alt="" className="img-3" />
            <p className="p-4">ASK A LAWYER</p>
            <h2 className="h-0">We Provide Solid Law</h2>
            <h3 className="h-2">Practice</h3>
            <button className="call-btn">CALL US</button>
            <button className="btn-6">+1 (000) 000-0000 </button>
          </div>
          <div className="about-image">
            <img src="/assets/Layer 3.png" alt="About Us" />
            <div className="ask-lawyer">
              <h6 className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ut soluta atque dolores illo porro voluptate sunt eos, nesciunt delectus aspernatur molestias odio dolore quis hic veritatis enim dolorem. </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="resources">
      <div className="container">
        <h2 className="h-3">Our Resources</h2>
        <h3 className="h-4">We Live &amp; Work Globally</h3>
        <div className="resources-inner">
          <div className="resource">
            <h3>5200+</h3>
            <p>LAWYERS ACROSS OUR GLOBAL
              PLATFORM.</p>
          </div>
          <div className="resource">
            <h3>100%</h3>
            <p>ON HUMAN RIGHTS CAMPAIGN
              FOUNDATION’S 2023.</p>
          </div>
          <div className="resource">
            <h3>92%</h3>
            <p>LATHAM LAWYERS PARTICIPATE IN
              PRO BONO WORK.</p>
          </div>
          <div className="resource">
            <h3>60+</h3>
            <p>Number of Native Speakers
              LANGUAGES SPOKEN.</p>
          </div>
          <div className="resource">
            <h3>239k</h3>
            <p>Encourages lawyers to engage
              in at least 50 hours.</p>
          </div>
          <div className="resource">
            <h3>14%</h3>
            <p>COUNTRIES IN WHICH THE FIRMIS LOCATED.</p>
          </div> 
        </div>
      </div></section>
    <section className="practice-areas">
      <div className="container">
        <h2 className="h-11">What We Do</h2>
        <h3 className="h-12">A Passion For Justice, Our Practice Areas</h3>
        <p className="p-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut modi doloremque distinctio aperiam atque culpa rerum ea. Vero, tempore odit rem consectetur tempora omnis culpa, quam est, provident dolores consequatur?</p>
        <button className="learnmore-1">LEARN MORE</button>
        <div className="practice-areas-inner">
          <div className="area">
            <img src="/assets/Layer 8.png" alt="Area 1" />
            <h4>Your Service Test Here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a href="#" className="button">Read More</a>
          </div>
          <div className="area">
            <img src="/assets/Layer 7.png" alt="Area 2" />
            <h4>Your Service Test Here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a href="#" className="button">Read More</a>
          </div>
          <div className="area">
            <img src="/assets/Layer 9.png" alt="Area 3" />
            <h4>Your Service Test Here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a href="#" className="button">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonials"> 
      <div className="container-1">
        <h2>Our Resources</h2>
        <h3>What They Are Talking About Igual</h3>
      </div>
      <div className="container-2">
        <div className="container-3">
          <img src="/assets/Layer 10.png" alt="" />
        </div>
        <div className="container-4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus nemo rerum, quaerat error ipsum deleniti, recusandae cum ullam totam odio consequuntur, repellendus aliquam porro itaque qui id neque minima.</p>
          <h3>Karla Clinton</h3>
          <h4>Real estate service</h4>
        </div>
      </div>
      {/* <div class="container"> */}
      {/* <div class="testimonials-inner"> */}
      {/* <img src="/assets/igual-img-2 copy.png" alt="Testimonials">  */}
      {/* <h2 class="our-r">Our Resources</h2>
            <h3 class="our-r">What They Are Talking About Igual</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      {/* <div class="client">
                <img src="/assets/igual-img-2.png" alt="Client">
              
            </div> */}
      {/* </div> */}
      {/* </div> */}
    </section> 
    <section className="blog">
      <div className="container">
        <h2>Recent Articles</h2>
        <h3>What News Do We Have Today, Latest Blog</h3>
        <div className="blog-inner">
          <div className="post">
            <img src="/assets/Group 3.png" alt="Blog Post 1" />
            {/* <div class="post-info"> */}
            {/* <h4>Family, Lawyer</h4> */}
            {/* <h3>Discover A Better Way Of Redefining Company</h3> */}
            {/* <a href="#" class="button">Read More</a> */}
            {/* </div> */}
          </div>
          <div className="post">
            <img src="/assets/pic4.png" alt="Blog Post 2" />
            {/* <div class="post-info"> */}
            {/* <h4>Family, Lawyer</h4>
                    <h3>A World Class Packaging Team, Built For You</h3> */}
            {/* <a href="#" class="button">Read More</a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
    <div className="imag-box-5">
      <img src="/assets/Layer 13.png" alt="" />
      <img src="/assets/Layer 14.png" alt="" />
      <img src="/assets/Layer 15.png" alt="" />
      <img src="/assets/Layer 16.png" alt="" />
      <img src="/assets/Layer 17.png" alt="" />
    </div>
   
    <Footer/>    
   
    <div className="last-p">
      <p>©2024. All Rights Reserved by <b>Mata Law</b></p>
    </div>
  </div>
  );
}
