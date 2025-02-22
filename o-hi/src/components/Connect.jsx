import React from 'react'
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import './Connect.css'
import { Button } from 'primereact/button';
function Connect() {
    return (
        <div className='w-10 line-height-p m-8 gap-1'>
            <p className='connect-text'>Let's Connect!</p>
            <p className='font-bold text-7xl '>Looking to Amplify</p>
            <p className='font-bold text-7xl '>Your Content and reach ?</p>
            <p className='connect-text'>Turn your content inot viral gold.</p>
            <div className='flex gap-1 font-point text-xl'>
                <p className='border-1 '><i className='pi pi-arrow-right m-1 font-point'></i></p><div className='mt-4' >Submit your name & Instagram post link, and we'll amplify it.</div>
            </div>
            <div className='flex gap-1 font-point -mt-4 text-xl'>
                <p className='border-1 '><i className='pi pi-arrow-right m-1'></i></p><div className='mt-4'>Get featured, reach new audiences, and gain traction effortlessly.</div>
            </div>
            <div className='flex gap-1  font-point -mt-4 text-xl'>
                <p className='border-1 '><i className='pi pi-arrow-right m-1'></i></p><div className='mt-4'>Earn rewards for content engagement & social reach.</div>
            </div>
            <div className="card flex flex-row align-items-center gap-3 ">
                <InputText type="text" className="w-6 h-5rem" placeholder="Name" />
                <InputText type="text" className="w-6 h-5rem " placeholder="Contact" />
            </div>
            <div className="card flex flex-row align-items-center mt-4 ">
                <InputText type="text" className="w-12 h-5rem " placeholder="Instagram Link" />
            </div>
            <div className="card flex flex-row align-items-center mt-4 ">
                <InputTextarea type="text" className="w-12  " placeholder="Comment" rows={8} />
            </div>
            <Button className='mt-3 ` text-2xl' severity='danger'>Submit</Button>
        </div>
    )
}

export default Connect