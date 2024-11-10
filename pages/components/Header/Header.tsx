"use client";
import React from 'react'
import Link from "next/link"
import style from "./header.module.css"

const Header = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <h1 className={style.logo}>MY WEBSITE</h1>
        <ul className={style.navlinks}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
