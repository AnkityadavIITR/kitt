"use client"
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Drawer from "./sheet";


export interface FlightData {
  itinerary: Itinerary[];
  price: number;
  currency: string;
}

interface Itinerary {
  airline: string;
  flightNumber: string;
  departure: FlightDetails;
  arrival: FlightDetails;
  duration: string;
  stops: string;
  additionalInfo?: string;
}

interface FlightDetails {
  time: string;
}

interface FlightCardProps {
  open: boolean;
  index: number;
  data: FlightData; // Single object instead of array
}

const Flightcard = ({
  open,
  data,
  index,
}: FlightCardProps) => {
  console.log(open);
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const [sheetIndex, setSheetIndex] = useState<number>(0);



  if (!open) {
    return (
      <div className="rounded-md shadow-lg border flex w-[1056px] h-[184px] mb-6">
        <div className=""></div>
        <Separator />
        <div className="p-4 flex flex-col">
          <div className="mt-auto">
            <h1 className="mb-2 text-[#787B80] text-[14px] font-normal">
              from
            </h1>
            <h1 className="mb-4 text-[20px] font-medium text-[#001F1D]">
              AED 2,456.90
            </h1>

            <Button
              onClick={() => {
                setSheetIndex(index);
                setOpenSheet(true);
              }}
              className="flex justify-center mt-auto gap-x-2 p-4 text-[16px] w-[182px] bg-[#003E39] hover:bg-[#003E39] hover:opacity-85 rounded-[8px] self-end"
            >
              <p>Select</p>
            </Button>
            <Drawer data={data} openSheet={openSheet} setOpenSheet={setOpenSheet}/>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-md shadow-xl border flex w-[1056px] h-[184px]">
      <div className=""></div>
      <Separator />
      <div className="p-4 flex flex-col">
        <div className="mt-auto">
          <Skeleton className="mb-2  w-[30px] h-[14px]"></Skeleton>
          <Skeleton className="mb-4 w-[120px] h-[20px] font-medium "></Skeleton>
          <Skeleton className="flex w-[180px] h-[40px]"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Flightcard;
