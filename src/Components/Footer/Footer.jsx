import React from 'react'
import MailIcon from '../../assets/email-1-svgrepo-com.svg'

const Footer = () => {
  return (
    <footer className=' h-[6rem] flex justify-center'>
        <div className='w-[75%] h-full'>
            <div className='w-full border mt-[5%] rounded-2xl'></div>
            <div className='lg:w-[30rem] flex gap-[2%] text-[1.5rem] items-center'>
                <i className='mb-[0.5%] bxr  bx-envelope' ></i> 
                andyelizbarashvilii@gmail.com
            </div>
        </div>
    </footer>
  )
}

export default Footer
