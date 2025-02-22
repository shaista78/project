import React from 'react'
import './Nomination.css'
import emoji from '../assets/globe.png'
import guru from '../assets/guru.png'
import influencer from '../assets/influencer.png'
import enterpreneur from '../assets/entrepreneur.png'
import star from '../assets/star.png'
import celebrity from '../assets/celebrity.png'
import tick from '../assets/checkmark.png'
import sports from '../assets/sports.png'
import { Button } from 'primereact/button';
function Nomination() {
  return (
    <div className="  w-12  flex flex-column align-items-center justify-content-center">
      <div className=' saga flex flex-column align-items-center justify-content-center ' > <h1 className='title'>SAGA OF FAME</h1>
        <h2>YOUR RECOGNITION STARTS HERE</h2>
      </div>
      <div className='flex flex-column align-items-center justify-content-center saga'>
        <p className='bold'>Feel the thrill of being recognized wherever you go</p>
        <p className='bold'>  With O Hi, your presence matters—get the Fame Tick and real life badges that define you and make an impact.</p>
      </div>
      <div className="flex flex-wrap align-items-center grid justify-content-between">
        {[emoji, enterpreneur, influencer, celebrity, star, sports].map((item, index) => (
          <div key={index} className="lg:col-4 md:col-0 sm:col-0 w-4 flex flex-column align-items-center justify-content-center mb-4">
            <img src={item} alt="emoji" className="w-6 m-2" />
            <p className="font-bold text-2xl m-1">GLOBE TROTTER</p>
            <div className="w-9 font-color-desc text-center m-2">
              Whether you're in lifestyle, tech, or comedy you deserve this badge!
            </div>
            <Button severity="warning" className="font-bold text-black-alpha-90">
              NOMINATE YOURSELF
            </Button>
          </div>
        ))}
      </div>
      <div className=" flex flex-column align-items-center justify-content-center mb-4">
        <img src={guru} alt="emoji" className="w-3 m-2" />
        <p className="font-bold text-2xl m-1">GLOBE TROTTER</p>
        <div className="w-6 font-color-desc text-center m-2">
          Whether you're in lifestyle, tech, or comedy you deserve this badge!
        </div>
        <Button severity="warning" className="font-bold  text-black-alpha-90">
          NOMINATE YOURSELF
        </Button>
      </div>
      <div className='star-page w-full'>
        <div className="background-container w-full">
          <div className="background-text">FAME TICK</div>
          <img src={tick} alt="emoji" className="w-5 absolute top-0 left-0 start-tick pl-0" />
          <div className="content lg:w-10 md:w-12  sm:w-12  align-items-center justify-content-center">
            <h1>TURN EVERY </h1>
            <h1>SOCIAL HOTSPOT</h1>
            <h1>INTO YOUR STAGE</h1>

          </div>
          <p className='text-white text-4xl m-8 '>Your presence should do more than just exist-it should stand out. With the Fame Tick, every check-in at a café, airport, or event announces your arrival.
          </p>
          <p className='text-white text-4xl m-8 '>
            Get recognized, notified, and remembered. Whether you're a trendsetter, entrepreneur, or creator, your influence travels with you</p>
        </div>
      </div>
    </div>
  )
}

export default Nomination