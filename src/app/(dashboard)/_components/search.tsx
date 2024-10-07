/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

import airportsData from "../../../data/data.json";
const data: AirportsData = airportsData;
import { DatePickerDemo } from "./calendar";
import { Search } from "lucide-react";
import { Destination } from "./destination";
import { FroIcon } from "./icons";
export function CardWithForm() {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked");
    router.push("/flight-details");
  };
  const { departure, arrival, departureDate, returnDate, setDeparture, setArrival, setDepartureDate, setReturnDate } = useFlightStore();
  // const [departure, setDeparture] = React.useState<Airport>();
  // const [arrival, setArrival] = React.useState<Airport>();
  // const [depratureDate, setDepratureDate] = React.useState<Date>();
  // const [returnDate, setReturnDate] = React.useState<Date>();
  console.log("Departure", departure);
  console.log("Arrival", arrival);
  console.log("DepartureDate", departureDate);
  console.log("ReturnDate", returnDate);

  return (
    <Card className="w-[1057px] h-[252px] py-6 px-7 rounded-lg shadow-md flex flex-col gap-y-6">
      <div className="flex px-3  py-[10px] h-[36px] w-[127px] rounded-md bg-[#F5F7FA]">
        <h1 className="text-center text-[16px] line-height: 1rem  font-medium w-full">
          Flights
        </h1>
      </div>
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
        onClick={handleClick}
      >
        <Search size={20} strokeWidth={1.25} />
        <p>Search flights</p>
      </Button>
    </Card>
  );
}
