import React from 'react'
import icon from '../assets/OHI-ICON.png'
import mac from '../assets/mac.png'
import store from '../assets/playstore.png'
import './Footer.css'
function Footer() {
    return (
        <div className='container-footer'>
            <div className=' flex lg:flex-row md:flex-column  sm:flex-column w-full text-white text-xl line-height-p align-items-center justify-content-center'>
                <div className='w-5 lg:w-5 md:w-12  sm:w-12  flex align-items-center justify-content-center' >
                    <img src={icon} alt='hashtag' className='  z-10 lg:w-6 md:w-full  sm:w-full' />
                </div>
                <div className='lg:w-2 md:w-6  sm:w-6 mt-8   '>
                    <p className='bold text-white'>Quick Links</p>
                    <p>About Us</p>
                    <p>At Cafe</p>
                    <p>Earn Money</p>
                    <p>Make Content Virtal</p>
                    <p>Conatact Us</p>
                </div>
                <div className='lg:w-2 md:w-6  sm:w-6 mt-8'>
                    <p className='bold text-white'>Useful Links</p>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>
                <div className='flex flex-column gap-3 w-2  mt-5 text-white mt-8 lg:w-2 md:w-6  sm:w-6'>
                    <div className='border-1 w-12 border-round-xl text-white flex   '>
                        <img src={store} alt='hashtag' className=' w-2 h-3rem z-10 m-3' />
                        <div> <p className='text-white'>GET IT ON</p>
                            <p className='text-white text-3xl '>Google Play</p></div>

                    </div>
                    <div className='border-1 w-12 border-round-xl flex '>
                        <img src={mac} alt='hashtag' className=' w-3 h-3rem m-3 z-10' />
                        <div className='w-12 '>
                            <p className='text-white'>Download on the</p>
                            <p className='text-white text-3xl '>App Store</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex align-items-center justify-content-center w-12 gap-4 m-4 p-4 lg:flex-row md:flex-column  sm:flex-column'>
                <div className='container-copy text-xl w-5 ' >All Rights Reserved. Copyright 2024 | Saorsa Technocrat Pvt. Ltd</div>
                <div className='container-copy  w-5 gap-3 flex flex-row  lg:align-items-end lg:justify-content-end ' ><i className='pi pi-facebook text-4xl'></i>
                    <i className='text-4xl pi pi-linkedin'></i>
                    <i className='text-4xl pi pi-whatsapp'></i>
                    <i className='text-4xl pi pi-twitter'></i>
                    <i className='text-4xl pi pi-youtube'></i>
                    <i className='text-4xl pi pi-instagram'></i></div>
            </div>

        </div>

    )
}

export default Footer