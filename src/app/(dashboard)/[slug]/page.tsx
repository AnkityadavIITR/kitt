"use client";
import { useState } from "react";
import React from "react";
import { Modal } from "./_components/modal";
import Navbar from "./_components/navbar";

const Page = () => {
  const [change, setChange] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [loadCnt, setLoadCnt] = useState<number>(0);

  const handleClick = () => {
    setOpen(true);
    setChange(false);
    const interval = setInterval(() => {
      setLoadCnt((prevCnt: number) => {
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
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar change={change} setChange={setChange} onClick={handleClick} />
      <Modal open={open} setOpen={setOpen} loadcnt={loadCnt} setLoadCnt={setLoadCnt} />
    </div>
  );
};

export default Page;
