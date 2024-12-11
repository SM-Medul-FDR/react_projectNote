import React, { useState } from 'react'
import './Popup.css'
import { GiCancel } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMdColorFilter } from "react-icons/io";



const Popup = ({showValue , popCross}) => {
    // console.log(showValue)
    const  [showColore , setShowColore]  = useState(false)

  return (
    <>
    
        <div className={`popup  ${showValue? 'w-full' : 'w-0' } `}>
                <button onClick={popCross} className={`PopupCrossButton ${showValue? 'block':'hidden'} `}  >
                    <GiCancel />
                </button>
            {/* -=-=-= input fields */}
            <div className={`PopupInputField ${showValue? 'block':'hidden'} `}>
                <h2 className='PopupInputFieldTitle'>Title</h2>
                <input placeholder='Title.....' className='PopupInputFieldInput ' type="text" />
                <h2 className='PopupInputFieldTitle mt-2 '>Note</h2>
                <textarea placeholder='Note.....' className=' PopupInputFieldNote shadow-[0px_6px_28px_16px_rgba(0,_0,_0,_0.2)]' type="text" />
                {/* -=-=-= All colors */}
               
               
                <div className=" relative  mt-2 md:mt-3 overflow-hidden ">
                    <div className=" flex gap-4  ">
                        <IoColorPaletteOutline onClick={()=>setShowColore(!showColore)} className='popupColorIcon overflow-hidden' />
                       
                        <div className={`PopupColors absolute bottom-0 flex gap-1 ${showColore? 'left-10' : 'left-[-195px]' } `}>
                        <button className="PopupColorButtons1"></button>
                        <button className="PopupColorButtons2"></button>
                        <button className="PopupColorButtons3"></button>
                        <div className="PopupCustomColor">
                            <label htmlFor="PopupCustomC">
                            <IoMdColorFilter className=' PopupCustomColorIcon  ' />
                            </label>
                        <input className='hidden' id='PopupCustomC' type="color" />
                        </div>
                        </div>

                    </div>
                </div>
           
           
            </div>
        </div>
    
    </>
  )
}

export default Popup