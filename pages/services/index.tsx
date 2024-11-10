import React from 'react'
import style  from './service.module.css'
import Link from "next/link"

const service = () => {
  return (
    <div>
        <nav className={style.navbar}>
        <h1 className={style.logo}>MY WEBSITE</h1>
        <ul className={style.navlinks}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services" className={style.active}>Services</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
    <div className={style.service}>
      <div>
        <h1 className={style.mainheading}>FRONTEND DEVELOPER</h1>
        <ul className={style.list}>
            <li><h2>Responsive Websites: </h2>
            I create responsive, user-friendly websites that look great on all devices. Using modern technologies
             like HTML, CSS, JavaScript, and frameworks like React and Next.js, I ensure seamless user experiences.</li>
             <li><h2>Web Applications: </h2>
             From simple interfaces to complex applications, I develop web solutions tailored to your needs, emphasizing
              speed, performance, and accessibility.</li>
              <li><h2>Single Page Applications (SPAs): </h2>
              I build SPAs that deliver a smooth, uninterrupted user experience, perfect for interactive applications like
               dashboards, social platforms, or dynamic portfolios.</li>
        </ul>
      </div>
      <div>
        <h1 className={style.mainheading}> UI/UX Design</h1>
        <ul className={style.list}>
            <li><h2>Wireframing & Prototyping: </h2>
            I create clear, intuitive wireframes and prototypes that map out the structure and flow of your website or
             app, ensuring ease of use.</li>
             <li><h2>User-Centered Design: </h2>
             By focusing on user experience, I deliver visually appealing, functional interfaces that resonate with users and enhance engagement.
            </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default service
