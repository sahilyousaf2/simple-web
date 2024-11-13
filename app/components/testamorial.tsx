import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <>
            <main id='testimonials'>
                <h1 className='testimonial-heading'>Testimonial</h1>
                <div className="testimonial-div">
                    <h1 className='testimonial-heading-text'>Why Our Clients Choose Us</h1>
                    <div className="testimonial-image-div">
                        <Image
                            className="testimonial-image"
                            src="/user.png"
                            alt="profile"
                            width={275}
                            height={183}
                            priority
                        />
                    </div>
                    <div className="testimonial-name-div">
                        <h2 className="testimonial-name">Henrry Jo</h2>
                        <p className=" testimonial-designation">(long established)</p>
                    </div>
                    <div className="testimonial-description-div">
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it
                            look
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-10 mb-4">
                    <div className="flex space-x-3">
                        <span className="w-4 h-4 border-2 dark:border-white border-black bg-red-500 rounded-full"></span>
                        <span className="w-4 h-4 border-2 dark:border-white border-black rounded-full"></span>
                        <span className="w-4 h-4 border-2 dark:border-white border-black rounded-full"></span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Testimonial



