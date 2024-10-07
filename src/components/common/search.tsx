/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import useFlightStore from "@/utils/flightstore";

export type Airport = {
  name: string;
  code: string;
  city: string;
  country: string;
};

type AirportsData = {
  airports: Airport[];
};

import airportsData from "../../data/data.json";
const data: AirportsData = airportsData;
import { DatePickerDemo } from "../../app/(dashboard)/_components/calendar";
import { Search } from "lucide-react";
import { Destination } from "../../app/(dashboard)/_components/destination";
import { FroIcon } from "../../app/(dashboard)/_components/icons";

interface SearchCardProps {
  showbadge:boolean,
  onClick:()=>void
}
export function SearchCard({showbadge,onClick}:SearchCardProps) {

  const { departure, arrival, departureDate, returnDate, setDeparture, setArrival, setDepartureDate, setReturnDate } = useFlightStore();

  return (
    
      <div className="flex flex-col gap-y-6 ">
        {
          showbadge && <div className="flex px-3  py-[10px] h-[36px] w-[127px] rounded-md bg-[#F5F7FA]">
            <h1 className="text-center text-[16px] line-height: 1rem  font-medium w-full">
              Flights
            </h1>
          </div>
        }

        <div className="flex gap-x-6 w-full items-center">
          <div className="flex w-full gap-x-3 ">
            <Destination
              des={data.airports}
              type={"departure"}
              dest={departure}
              setDest={setDeparture}
            />
            <div className="px-4 py-[18px] rounded-full bg-[#F5F7FA] w-fit h-fit">
              <FroIcon />
            </div>
            <Destination
              des={data.airports.filter(
                (item: Airport) => item.name != departure?.name
              )}
              dest={arrival}
              type={"return"}
              setDest={setArrival}
            />
          </div>
          <div className="flex gap-x-4 w-[366px]">
            <DatePickerDemo
              type={"Departure"}
              date={departureDate}
              setDate={setDepartureDate}
            />
            <DatePickerDemo
              type={"Return"}
              date={returnDate}
              setDate={setReturnDate}
            />
          </div>
        </div>
        <Button
          className="flex justify-center gap-x-2 p-4 w-[250px] bg-[#003E39] hover:bg-[#003E39] hover:opacity-85 rounded-[8px] self-end"
          onClick={onClick}
        >
          <Search size={20} strokeWidth={1.25} />
          <p>Search flights</p>
        </Button>

      </div>
   
  );
}
