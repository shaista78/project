import React, {useState}from 'react'
import add from '../assets/addone.png'
import add2 from '../assets/addtwo.png'
import ball from '../assets/ball.png'
import { Carousel } from 'primereact/carousel';
import './Add.css'
function Add() {
     const [products] = useState(['RISE IN CURASITY LEVELS?','RISE IN CURASITY LEVELS?','RISE IN CURASITY LEVELS?','RISE IN CURASITY LEVELS?','RISE IN CURASITY LEVELS?',]);
     const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

     const productTemplate = (product) => {
        return (
            <div className="text-white mt-3">
                {product}
            </div>
        );
    };
  return (
    <div className='relative'>
     <img src={add} alt='hashtag' className='  w-12 z-0' />
     <img src={ball} alt='hashtag' className=' w-6 ball absolute right-0 z-10 ' />
     <img src={add2} alt='hashtag' className='  w-12 z-0' />
       <div className="card bg-black -mt-1">
            <Carousel value={products} numVisible={4} showIndicators={false} showNavigator={false} numScroll={3} autoplayInterval={3000} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
     <div className='flex w-12 flex lg:flex-row md:flex-column  align-items-center justify-content-center text-2xl'>
      
     <div className='flex flex-column  m-6 lg:w-5 md:w-full line-height-p font-point  border-2 border-top-none border-right-none border-bottom-none pl-4'>
    
     <p>How can I find Caferoom?</p>
      <p>How to discover people around?</p>
       <p>How do I network with people through O Hi?</p>
        <p>Earn badges, join digital rooms & start real conversations.</p>
         <p>How do I get featured on the leaderboard?</p>
          <p>How do I make money on O Hi?</p>
          
     </div>
     <div className='flex flex-column align-items-end lg:w-6 md:w-full m-6 line-height-p font-point border-2 border-top-none border-left-none border-bottom-none pr-4'>
      <p>How do i get featured on the leaderboard?</p>
      <p>Is Location visible when I'm not using the app?</p>
       <p>How do i redeem the coupons?</p>
        <p>What is the Fame Tick?</p>
         <p>What is the Happstore?</p>
          <p>How do i network with people through O hi?</p>
     </div>
     </div>
   
    </div>
  )
}

export default Add