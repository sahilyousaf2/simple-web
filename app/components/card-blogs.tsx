import React from 'react';
import Image from 'next/image';
import { CardBlogsProps } from '../types/allTypes';
const BurgerCard = (Props: CardBlogsProps) => {
  return (
    <div className='card-blogs'> 
      <Image
        src={Props.image}
        alt="Burger"
        width={131}
        height={102}
        className="card-blogs-image"
      />
      <h2 className='card-blogs-heading '>{Props.heading}</h2>
      <p className='card-blogs-day'>{Props.day}</p>
      <p className='card-blogs-time'>{Props.time}</p>
      <p className='card-blogs-description font-normal text-[12px] leading-[15px] text-[#000000cc] dark:text-white text-center my-[10px]'>
        {Props.description}
      </p>
      <button className='card-blogs-button'>Read More</button>
    </div>
  );
};


export default BurgerCard;

