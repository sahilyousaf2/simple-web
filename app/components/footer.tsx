import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <main className='main-blog-footer'>
                    <div className="container">
                        <div>
                            <h1 className='heading'>About</h1>
                            <p className='description'>
                                It is a long established fact
                                that a reader will be
                                distracted by the readable
                                content of a page when
                                looking at its layout.
                                The point of using Lorem
                                Ipsum is that it has a more
                                or-less normal distribution
                            </p>
                        </div>

                        <div>
                            <h1 className='footer-heading'>Links</h1>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/#about"}>About</Link>
                                </li>
                                <li>
                                    <Link href={"/#Services"}>Services</Link>
                                </li>
                                <li>
                                    <Link href={"/#blogs"}>Blogs</Link>
                                </li>
                                <li>
                                    <Link href={"/#testimonials"}>Testimonials</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='footer-heading'>Follow us</h1>
                            <ul className="space-y-2">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Instagram</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='footer-heading'>Newsletter</h1>
                            <input type="text"
                                placeholder='Enter Your Email'
                                className='footer-input'
                            />
                            
                            <br />
                            <div className='footer-my-5'>
                                <button className='py-4 px-10  hover:bg-[#ff7672] bg-[#FF423B]'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-flex">
                        <Link href={"/"}>
                            <button className='footer-button'>Top</button>
                        </Link>
                    </div>
                    <div className='footer-copy'>
                        2024 All Rights Reserved @Sahil Yousaf
                    </div>
                </main>
            </footer>
        </>
    )
}

export default Footer
