"use client"
import React from 'react'
import { Separator } from "@/components/ui/separator"
import useFlightStore from '@/utils/flightstore'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { SearchCard } from "../../../../components/common/search";
const Navbar = () => {
  const { departure, arrival, departureDate, returnDate} = useFlightStore();
  const [change,setchange]=useState<boolean>(false);

  if(!change){
    return (
      <div className='w-full flex px-[192px] py-[28px]'>
        <div className='flex px-6 py-3 border rounded-3xl justify-between'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='line-clamp-1 w-[200px] text-[#787B80]'><span className='text-[#001F1D] font-medium'>{departure?.code}</span> {departure?.name}</h1>
            <Separator orientation="vertical" />
            <h1 className='line-clamp-1 w-[200px] text-[#787B80]'><span className='text-[#001F1D] font-medium'>{arrival?.code}</span> {arrival?.name}</h1>
            <Separator orientation="vertical" />
            <h1>-</h1>
            <Separator orientation="vertical" />
            <div className='p-2 rounded-full bg-[#E5EBEB] cursor-pointer' onClick={()=>setchange(true)}>
              <Search size={16}/>
            </div>
          </div>
          <div>
  
          </div>
        </div>
      </div>
    )
  }
  return <div className='w-full flex'>
    <SearchCard showbadge={false}/>

  </div>
  
}

export default Navbar
