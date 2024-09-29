import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'

const Blog = () => {
  return (
    <>
    <Header loadDataPageWise={ <h1>Blog</h1>}/>

           <section class="blog">
        <div class="container">
            <h2>Recent Articles</h2>
            <h3>What News Do We Have Today, Latest Blog</h3>
            <div class="blog-inner">
                <div class="post">
                    <img src="/assets/Group 3.png" alt="Blog Post 1"/>
                 
                </div>
                <div class="post">
                    <img  src="/assets/pic4.png" alt="Blog Post 2"/>
                  
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog