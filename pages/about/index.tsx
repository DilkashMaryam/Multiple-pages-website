"use client";
import React from 'react';
import style from "./about.module.css"
import Link from 'next/link';

const About = () => {
  return (
    <div>
      
      <nav className={style.navbar}>
        <h1 className={style.logo}>MY WEBSITE</h1>
        <ul className={style.navlinks}>
            <li><Link href="/about"className={style.active}>About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>

    <div className={style.pagehome}>
      <div>
      <h1 className={style.mainheading}>WELCOME TO THE WORLD OF CODING</h1>
      <h2 className={style.subheading}>What is coding?</h2>
      <p className={style.ans}>
      Coding is the language of computers. It involves writing instructions in a programming language so that 
      computers can perform tasks and solve problems. Coding is the foundation of websites, mobile apps, video games,
      software, and so much more that we rely on every day.
      </p>
      </div>
      <div>
      <h2 className={style.subheading}>Why Learning Coding?</h2>
      <p className={style.ans}>
      Learning to code is like learning a new language that opens up countless possibilities. It teaches problem-solving,
      logical thinking, and creativity. Coding skills can lead to rewarding careers in software development, data science,
      artificial intelligence, web development, and beyond. Additionally, coding is increasingly valuable in non-tech 
      fields like finance, healthcare, and education.
      </p>
      </div>
      <div>
      <h2 className={style.subheading}>Our Mission</h2>
      <p className={style.ans}>Our goal is to make coding accessible and fun for everyone. Whether you're a complete beginner or looking 
        to improve your skills, we offer resources, tutorials, and guidance to help you succeed. Coding is more than 
        just a skill; it’s a way to create, innovate, and shape the future.</p>
      </div>
    </div>
    </div>
  );
};

export default About;
