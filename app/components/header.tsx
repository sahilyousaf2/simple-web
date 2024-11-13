'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <header>
                <main className='header-main'>


                    <nav className="nav">
                        <div className="nav-div-logo">
                            <Link href={"/"}>
                                <h1 className='logo-h1'>MOTU BURGER</h1>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="div-hidden">
                            <Link href="/">{">"}Home</Link>
                            <Link href="/#Services">{">"}Services</Link>
                            <Link href="/#about">{">"}About</Link>
                            <Link href="/#blogs">{">"}Blogs</Link>
                            <Link href="/#testimonials">{">"}Testimonial</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="div-hidden-mobile">
                            <button className="div-hidden-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
                                <svg className="div-hidden-mobile-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isOpen && (
                            <div className="mobile-menu">
                                <div className=" mobile-menu-div">
                                    <Link href="/">Home</Link>
                                    <Link href="/#about">About</Link>
                                    <Link href="/#Services">Services</Link>
                                    <Link href="/#blogs">Blogs</Link>
                                    <Link href="/#testimonials">Testimonial</Link>

                                </div>
                            </div>
                        )}
                    </nav>
                </main>
            </header>

        </>
    )
}

export default Header
