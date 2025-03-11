
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Card from './Car.png';
import homepage from './homepage.png';

const Red = () => {
  useGSAP(() => {
    gsap.fromTo('.car',
      {
        x: -1900,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.car',
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1.5,
          toggleActions: 'play reverse play reverse'
        }
      }
    );
  }, []);

  return (
    <div className='w-full'>
      <img src={Card} alt="Car" className='car absolute z-50 h-110 w-120 top-[5000px]' />
      <img src={homepage} className='relative w-full' />
      <button className='absolute top-[5968px] left-[550px] text-3xl text-black z-30 bg-white rounded-xl px-20 py-5'>Battery Power</button>
    </div>
  );
};

export default Red;
