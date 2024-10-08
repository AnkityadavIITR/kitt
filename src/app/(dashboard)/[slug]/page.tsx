"use client";
import { useState } from "react";
import React from "react";
import { Modal } from "./_components/modal";
import Navbar from "./_components/navbar";
import { Progress } from "@/components/ui/progress";
import Flightcard from "./_components/flightcard";
import useFlightStore from "@/utils/flightstore";
import { FlightData } from "@/types/default";

const Page = () => {
  const [change, setChange] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [loadCnt, setLoadCnt] = useState<number>(0);
  const {departure,arrival}=useFlightStore();
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const { departureDate, returnDate } = useFlightStore();
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  const formattedDeparture = departureDate
    ? new Date(departureDate).toLocaleDateString('en-US', options)
    : undefined;
  
  const formattedReturn = returnDate
    ? new Date(returnDate).toLocaleDateString('en-US', options)
    : undefined;

  const flightData = [
    {
      itinerary: [
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4354",
          date: formattedDeparture,
          departure: {
            time: "9:45 AM",
            airportCode:departure?.code,
            airportName:departure?.name,
          },
          arrival: {
            time: "11:45 AM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
          },
          duration: "2h 10min",
          stops: "Non stop",
        },
        {
          airline: "Lufthansa",
          image:"/images/ai2.png",
          flightNumber: "AT 4334",
          date: formattedReturn,
          departure: {
            time: "11:45 PM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
          },
          arrival: {
            time: "6:45 AM",
            airportCode:departure?.code,
            airportName:departure?.name,
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
          date:formattedDeparture,
          departure: {
            time: "9:45 AM",
            airportCode:departure?.code,
            airportName:departure?.name,
          },
          arrival: {
            time: "11:45 AM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
          },
          duration: "7h 10min",
          stops: "1 stop",
        },
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4334",
          date:formattedReturn,
          departure: {
            time: "11:45 PM",
            airportCode:departure?.code,
            airportName:departure?.name,
          },
          arrival: {
            time: "6:45 AM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
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
          date:formattedDeparture,
          departure: {
            time: "9:45 AM",
            airportCode:departure?.code,
            airportName:departure?.name,
          },
          arrival: {
            time: "11:45 AM",
            airportCode:arrival?.code,
            airportName:arrival?.name,

          },
          duration: "2h 10min",
          stops: "Non stop",
        },
        {
          airline: "Lufthansa",
          image:"/images/ai2.png",
          flightNumber: "AT 4334",
          date:formattedReturn,
          departure: {
            time: "11:45 PM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
          },
          arrival: {
            time: "6:45 AM",
            airportCode:departure?.code,
            airportName:departure?.name,
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
          date:formattedDeparture,
          departure: {
            time: "9:45 AM",
            airportCode:departure?.code,
            airportName:departure?.name,
          },
          arrival: {
            time: "11:45 AM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
          },
          duration: "7h 10min",
          stops: "1 stop",
        },
        {
          airline: "Emirates",
          image:"/images/ai1.png",
          flightNumber: "AT 4334",
          date:formattedReturn,
          departure: {
            time: "11:45 PM",
            airportCode:departure?.code,
            airportName:departure?.name,

          },
          arrival: {
            time: "6:45 AM",
            airportCode:arrival?.code,
            airportName:arrival?.name,
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
    <div className={openSheet || change? "min-h-screen min-w-screen flex flex-col bg-[#0000000c]":"h-auto min-w-screen flex flex-col"}>
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
        <h1 className="w-fit mb-6 text-[#787B80]">Showing 4 of 4 results</h1>
        <div className="flex flex-col gap-y-4 ">
          {flightData.map((data:FlightData,i: number) => {
            return (
              <Flightcard
                key={i}
                data={data}
                open={open}
                openSheet={openSheet}
                setOpenSheet={setOpenSheet}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
