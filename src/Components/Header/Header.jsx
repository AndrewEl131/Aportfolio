import React from 'react'
import MenuItem from './MenuItem'

const Header = () => {
  return (
    <header className='w-full h-[60px] sticky top-[2%] flex justify-center' id='#Home'>
        <div className='w-[85%] lg:w-[50%] flex '>
            <div className='w-[5%] mt-[1%] lg:mt-0  flex justify-center h-full text-[38px] lg:text-[2.5rem] hover:text-white'>
                <a href="#Home">
                    A.E
                </a>
            </div>
            <div className='w-[95%] hidden lg:flex justify-end h-full '>
                <div className='w-[50%] h-full  flex gap-[15%]'>
                    <MenuItem content={'home'} link={'#Home'} />
                    <MenuItem content={'about'} link={'#About'} />
                    <MenuItem content={'projects'} link={'#Projects'} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
