import React from 'react'
import Image from 'next/image'
import avatar from '../../images/avatar-ali.png'

const Principal = () => {
  return (
    <section className='grid grid-flow-row auto-rows-max'>
        <h1 className='text-center p-4 text-2xl text-white'># Desarrollador FullStack #</h1>
        <div className='h-[400px]'>
            <Image src={avatar} className='ml-16 w-64 p-4 object-cover '/>
            <p className='text-gray-200 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor est vel egestas elementum. Ut vel mollis nisl. Curabitur feugiat lobortis fermentum
            </p>
            <button className='bg-red-700 p-2 rounded-md ml-32 mt-2 text-red-100'>View Projects</button>
        </div>
    </section>
  )
}

export default Principal