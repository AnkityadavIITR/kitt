"use client";
import { useState } from "react";
import React from "react";
import { Modal } from "./_components/modal";
import Navbar from "./_components/navbar";
import { Progress } from "@/components/ui/progress";
import Flightcard from "./_components/flightcard";
import { ScrollArea } from "@/components/ui/scroll-area";
import useFlightStore from "@/utils/flightstore";
import { FlightData } from "@/types/default";

const Page = () => {
  const [change, setChange] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [loadCnt, setLoadCnt] = useState<number>(0);
  const {departure,arrival}=useFlightStore();
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const flightData = [
    {
      itinerary: [
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4354",
          departure: {
            time: "9:45 AM",
            airport:departure?.code,
          },
          arrival: {
            time: "11:45 AM",
            airport:arrival?.code,
          },
          duration: "2h 10min",
          stops: "Non stop",
        },
        {
          airline: "Lufthansa",
          image:"/images/ai2.png",
          flightNumber: "AT 4334",
          departure: {
            time: "11:45 PM",
            airport:arrival?.code,
          },
          arrival: {
            time: "6:45 AM",
            airport:departure?.code,
          },
          duration: "4h 10min",
          stops: "2 stops",
          additionalInfo: "1 day",
        },
      ],
      price: 2456.9,
      currency: "AED",
    },
    {
      itinerary: [
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4354",
          departure: {
            time: "9:45 AM",
            airport:departure?.code,
          },
          arrival: {
            time: "11:45 AM",
            airport:arrival?.code,
          },
          duration: "7h 10min",
          stops: "1 stop",
        },
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4334",
          departure: {
            time: "11:45 PM",
            airport:arrival?.code,
          },
          arrival: {
            time: "6:45 AM",
            airport:departure?.code,
          },
          duration: "19h 10min",
          stops: "1 stop",
          additionalInfo: "1 day",
        },
      ],
      price: 1456.9,
      currency: "AED",
    },
    {
      itinerary: [
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4354",
          departure: {
            time: "9:45 AM",
            airport:departure?.code,
          },
          arrival: {
            time: "11:45 AM",
            airport:arrival?.code,
          },
          duration: "2h 10min",
          stops: "Non stop",
        },
        {
          airline: "Lufthansa",
          image:"/images/ai2.png",
          flightNumber: "AT 4334",
          departure: {
            time: "11:45 PM",
            airport:arrival?.code,
          },
          arrival: {
            time: "6:45 AM",
            airport:departure?.code,
          },
          duration: "4h 10min",
          stops: "2 stops",
          additionalInfo: "1 day",
        },
      ],
      price: 2456.9,
      currency: "AED",
    },
    {
      itinerary: [
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4354",
          departure: {
            time: "9:45 AM",
            airport:departure?.code,
          },
          arrival: {
            time: "11:45 AM",
            airport:arrival?.code,
          },
          duration: "7h 10min",
          stops: "1 stop",
        },
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4334",
          departure: {
            time: "11:45 PM",
            airport:arrival?.code,
          },
          arrival: {
            time: "6:45 AM",
            airport:departure?.code,
          },
          duration: "19h 10min",
          stops: "1 stop",
          additionalInfo: "1 day",
        },
      ],
      price: 1456.9,
      currency: "AED",
    },
  ];

  const handleClick = () => {
    setOpen(true);
    setChange(false);
    const interval = setInterval(() => {
      setLoadCnt((prevCnt: number) => {
        console.log("call interval");

        if (prevCnt > 3) {
          setOpen(false);
          setChange(false);
          clearInterval(interval);
          return prevCnt;
        }
        return prevCnt + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  };

  return (
    <div className={openSheet || change? "min-h-screen min-w-screen flex flex-col bg-[#0000000c]":"min-h-screen min-w-screen flex flex-col"}>
      <Navbar change={change} setChange={setChange} onClick={handleClick} />
      {loadCnt < 4 && (
        <div className="w-full">
          <Progress value={loadCnt * 33} max={100} />
        </div>
      )}

      <Modal
        open={open}
        setOpen={setOpen}
        loadcnt={loadCnt}
        setLoadCnt={setLoadCnt}
      />
      {/* card area */}
      <div
        className={
          change
            ? "absolute top-0 left-1/2 -translate-x-1/2 pt-[142px] px-[72px] flex flex-col "
            : "absolute top-0 left-1/2 -translate-x-1/2 pt-[142px] px-[72px]   flex flex-col"
        }
      >
        <h1 className="w-fit mb-6 text-[#787B80]">Showing 356 of 767 results</h1>
        <ScrollArea className="flex flex-col gap-y-4">
          {flightData.map((data: FlightData, i: number) => {
            return (
              <Flightcard
                key={i}
                data={data}
                index={i}
                open={open}
                openSheet={openSheet}
                setOpenSheet={setOpenSheet}
              />
            );
          })}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;
