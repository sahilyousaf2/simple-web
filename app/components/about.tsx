import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <main className='about-main' id='about'>
            <div className='about-main-div'>
                <div className="about-image">
                    <Image 
                        src="/about.png" 
                        height={430} 
                        width={450} 
                        alt='About Image'
                        className="about-image-item" 
                    />
                </div>
                <div className="about-text">
                    <div>
                        <h1 className='about-heading'>About Us</h1>
                        <div className='about-text-div'>
                            <p className='about-text-p'>
                                Content here, content here&apos;, making it look like readable English.
                                Many desktop publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search for Content here, content
                                here&apos;, making it look like readable English.
                                Many desktop publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search for
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
