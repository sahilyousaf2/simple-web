import React from 'react'
import Card from './card'

const Services = () => {
    return (
        
        <div className="services-div" id='Services'>
            <h2 className="services-heading">Popular Goods Foods</h2>
            <p className='services-description'>Search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
            <nav className='services-nav' >
                <ul className='services-nav-ul'>
                    <li className='services-nav-li'>Fastfood</li>
                    <li className='services-nav-li'>Hot Pizza</li>
                    <li className='services-nav-li'>Chapati Food</li>
                    <li className='services-nav-li'>Biryani & Meat</li>
                </ul>
            </nav>
            <div className='services-card-div'>
                {/* card 1 */}
                <div className='services-card-div-item'>
                    <Card
                        imageW={235}
                        imageH={95}
                        image='/plater.png'
                        heading='Cheeseburger with Bacon'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='services-card-button'>Read More</button>
                </div>
                {/* card 2 */}
                <div className='services-card-div-item'>
                    <Card
                        imageW={200}
                        imageH={107}
                        image='/roll.png'
                        heading='Dosa with Fishcake'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='services-card-button'>Read More</button>
                </div>
                {/* card 3 */}
                <div className='services-card-div-item'>
                    <Card
                        imageW={200}
                        imageH={107}
                        image='/card3.png'
                        heading='Dosa with Fishcake'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='services-card-button'>Read More</button>
                </div> 
                {/* card 4 */}
                    <div className='services-card-div-item'>
                    <Card
                        imageW={125}
                        imageH={111}
                        image='/card4.png'
                        heading='Dosa with Fishcake'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='services-card-button'>Read More</button>
                </div>
            </div>



        </div>
    )
}

export default Services
