import React from 'react'
import './HomePage.css'
import hashtag from '../assets/hashtag.png'
import emoji from '../assets/emoji.png'
function HomePage() {
  return (
    <div className='description'>
      <div className='flex lg:flex-row md:flex-column  sm:flex-column w-12 gap-2 m-0'>
        <div className='lg:w-7 md:w-12  sm:w-12 relative'>
          <img src={hashtag} alt='hashtag' className='hashtag z-10 ' />
         
        </div>

        <div className='lg:w-5 md:w-12  sm:w-12  flex flex-column mr-8 -m-6 align-items-center justify-content-center'>
          <div className='description-test1 w-full'>
            <p>Where Real Life Meets</p>
            <p>Real Recognition</p>
          </div>
          <div className='description-test2 w-full mr-3'>
            <p>Check In. Earn Badges</p>
            <p>Get Discovered</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage