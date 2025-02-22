import React from 'react'
import './Leaderboard.css'
import { Button } from 'primereact/button'
function Leaderboard() {
    return (
        <>
            <div className='w-12 flex align-items-center justify-content-center'>
                <div className='curved-left-arrow -rotate-90  '>&#8630;</div>
                <div className='flex flex-column align-items-center justify-content-center '>
                    <div className='checkin'>CHECK IN.</div>
                    <div className='checkinleader'>LEADER <br></br>BOARD</div>
                    <div className='win'>WIN.</div>
                </div>
                <div className='curved-left-arrow rotate-90 '>&#8630;</div>
            </div>
            <div className='flex w-12 align-items-center justify-content-center '>
                <div className='text-4xl line-height-p w-10 '>
                    <p>Turn networking into a game.</p>
                    <p>Build your squad, check in, and climb the ranks.</p>
                    <div className='flex'>
                        <div className='line-height-p'>

                            <p className=''>Earn points every time you check in.</p>
                            <p>Rise on the leaderboard and get featured.</p>
                            <p>Win exclusive rewards and real-world recognition.</p>
                        </div>
                        <div className='w-3 h-8rem mt-5 ml-8'> <Button className='w-12 h-5rem text-5xl' severity='danger'>KNOW MORE</Button></div>
                    </div>
                    <p className=''>Your presence matters. Make it count.</p>
                </div>
            </div>
            <div className='desc flex align-items-center justify-content-center text-center w-12 '>O HI MAKES YOU MORE <br></br> THAN JUST VISIBLE IT <br></br>MAKES YOU UNMISSABLE.</div>
        </>
    )
}

export default Leaderboard