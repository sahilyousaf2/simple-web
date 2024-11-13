import React from 'react'
import CardBlogs from './card-blogs'

const Blog = () => {
    return (
        <>
            <main className='main-blog' id='blogs'>
                <div className='main-blog-div'>
                    <div className='main-blog-heading'>
                        <h2>Cafes & Restaurants</h2>
                    </div>
                    <div className='main-blog-description'>
                        <p>Search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
                    </div>
                    <div className='main-blog-cards'>
                        {/* card 1 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using Lorem Ipsum is that it has a looking at its layout. The point of using Lorem Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/zinger.png'
                            />
                        </div>
                        {/* card 2 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using Lorem Ipsum is that it has a looking at its layout. The point of using Lorem Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/beef.png'
                            />
                        </div>
                        {/* card 3 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using Lorem Ipsum is that it has a looking at its layout. The point of using Lorem Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/roll.png'
                            />
                        </div>
                        {/* card 4 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using Lorem Ipsum is that it has a looking at its layout. The point of using Lorem Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/fish.png'
                            />
                        </div>
                        {/* card 5 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using Lorem Ipsum is that it has a looking at its layout. The point of using Lorem Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/sweet.png'
                            />
                        </div>
                        {/* card 6 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using Lorem Ipsum is that it has a looking at its layout. The point of using Lorem Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/sweet2.png'
                            />
                        </div>
                    </div>
                </div>
                <div className='main-blog-button'>
                    <button className='bg-[#FF423B] w-[140px] h-[40px] hover:bg-[#ff7672] text-white px-8 py-2'>See More</button>
                </div>
            </main>
        </>
    )
}

export default Blog
