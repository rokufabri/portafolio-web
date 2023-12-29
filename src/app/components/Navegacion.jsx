import React from 'react'
import logo from '../images/desarrollador_web.svg'
import Image from 'next/image'

const Navegacion = () => {
  return (
    <header>

        <nav className="bg-blue-800 wrapper h-20  p-2 flex  items-center justify-between">

            <a href="./" className="grid grid-cols-2 gap-4 items-center  w-1/3 max-w-[200px]">
                <Image src={logo} className='w-[450px] object-cover p-2'/>
                <label className='text-white text-center'>Fabrizio AQ.</label>
            </a>

            <input type="checkbox" id="menu" className="peer hidden"/>

            <label for="menu" className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"></label>

            <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform z-40 md:static md:bg-none md:translate-x-0">

                <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">

                    <li>
                        <a href="#">Home</a>
                    </li>
        
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
        
                    <li>
                        <a href="#">About Us</a>
                    </li>
        
                    <li>
                        <a href="#">Download CV</a>
                    </li>
                </ul>

            </div>

            <a href="#" className="button shadow-sm shadow-bright-red/30 hidden py-3 lg:block">Contact Me</a>
        </nav>


    </header>
  )
}

export default Navegacion