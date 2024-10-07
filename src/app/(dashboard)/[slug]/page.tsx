import React from 'react'
import { Modal } from './_components/modal'
import Navbar from './_components/navbar'

const page = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
      <Navbar />
      <Modal />
    </div>
  )
}

export default page
