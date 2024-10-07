"use client"
import React from 'react'
import useFlightStore from '@/utils/flightstore'
import { Modal } from './_components/modal'

const page = () => {
  const { departure, arrival, departureDate, returnDate, setDeparture, setArrival, setDepartureDate, setReturnDate } = useFlightStore()

  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
      <Modal />
    </div>
  )
}

export default page
