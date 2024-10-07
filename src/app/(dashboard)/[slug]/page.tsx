"use client"
import { useState } from 'react'
import React from 'react'
import { Modal } from './_components/modal'
import Navbar from './_components/navbar'

const page = () => {
  const [change,setchange]=useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [loadcnt, setLoadcnt] = useState<number>(0);
  const handleClick = () => {
    setOpen(true);
    setchange(false);
    const interval = setInterval(() => {
      setLoadcnt((prevCnt: number) => {
        console.log("call interval");
        
        if (prevCnt > 3) {
          setOpen(false);
          clearInterval(interval);
          return prevCnt;
        }
        return prevCnt + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  };
  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
      <Navbar change={change} setchange={setchange} onClick={handleClick}/>
      <Modal open={open} setOpen={setOpen} loadcnt={loadcnt} setLoadcnt={setLoadcnt}/>
    </div>
  )
}

export default page
