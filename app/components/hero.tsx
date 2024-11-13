'use client'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <main className='hero-section'>
                <div className='hero-image'>
                    <Image src="/banner-img.png" alt="hero" width={510} height={276} className='hero-image-tag' priority />
                </div>
                <div className="hero-text">
                    <h1 className='hero-h1'>Food Delivery</h1>
                    <p className='hero-p'>Search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
                    <div className='hero-div'>
                        {/* city */}
                        <div className="hero-div-search">
                            <div className="hero-div-search-option">
                                <select className="hero-div-search-option-manu" defaultValue="">
                                    <option value="" disabled selected>Select City</option>
                                    <option value="karachi">Karachi</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="islamabad">Islamabad</option>
                                    <option value="peshawar">Peshawar</option>
                                </select>
                                <div className=" hero-div-svg">
                                    <svg className="hero-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {/* restaurant */}
                            <div className="hero-div-search-option ">
                                <div>
                                    <select className="hero-div-search-option-manu" defaultValue="">
                                        <option value="" disabled>Restaurant</option>
                                        <option value="kfc">KFC</option>
                                        <option value="mcdonalds">McDonald&apos;s</option>
                                        <option value="burger-king">Burger King</option>
                                        <option value="subway">Subway</option>
                                    </select>
                                </div>
                                <div className=" hero-div-svg">
                                    <svg className="hero-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {/* food */}
                            <div className="hero-div-search-option">
                                <select className="hero-div-search-option-manu" defaultValue="">
                                    <option value="" disabled>Food</option>
                                    <option value="burger">Burger</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="sandwich">Sandwich</option>
                                    <option value="salad">Salad</option>
                                </select>
                                <div className="hero-div-svg">
                                    <svg className="hero-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hero-div-search-button'>
                        <button className='hero-div-search-button-button '>Search Now</button>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Hero          