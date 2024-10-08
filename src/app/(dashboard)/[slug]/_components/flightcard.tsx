"use client";
import { SetStateAction, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Drawer from "./sheet";
import { FlightCardProps } from "@/types/default";
import useFlightStore from "@/utils/flightstore";

const Flightcard = ({
  open,
  data,
  index,
  openSheet,
  setOpenSheet,
}: FlightCardProps) => {
  // console.log(open);
  const [sheetIndex, setSheetIndex] = useState<number>(0);

  if (!open) {
    return (
      <div className="rounded-md shadow-sm border flex w-[1056px] h-[184px] mb-6">
        <div className=" flex flex-col w-full  px-8 py-6 gap-y-8">
          <div className="flex gap-x-[280px] w-full ">
            <div className="flex h-fit gap-x-6">
              <div className="w-[42px] flex items-center">
                <Image
                  src={data.itinerary[0].image}
                  alt="logo"
                  width={46}
                  height={26}
                />
              </div>
              <div className="flex flex-col gap-y-[7px]">
                <h1 className="text-[13px] text-[#787B80] font-normal">
                  {data.itinerary[0].airline} {data.itinerary[0].flightNumber}
                </h1>
                <h1 className="text-[18px] text-[#000] font-normal  ">
                  {data.itinerary[0].departure.time}-
                  {data.itinerary[0].arrival.time}
                </h1>
              </div>
            </div>
            <div className="flex gap-x-[78px] h-fit">
              <div className="flex flex-col gap-y-[7px]">
                <h1 className="text-[#787B80] text-[14px]">
                  {data.itinerary[0].departure.airportCode}-
                  {data.itinerary[0].arrival.airportCode}
                </h1>
                <h1 className="text-[18px]">{data.itinerary[0].duration}</h1>
              </div>
              <div className="flex">
                <h1 className="mt-auto">{data.itinerary[0].stops}</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[280px] w-full ">
            <div className="flex h-fit gap-x-6">
              <div className="w-[42px] flex items-center">
                <Image
                  src={data.itinerary[1].image}
                  alt="logo"
                  width={46}
                  height={26}
                />
              </div>
              <div className="flex flex-col gap-y-[7px]">
                <h1 className="text-[13px] text-[#787B80] font-normal">
                  {data.itinerary[1].airline} {data.itinerary[1].flightNumber}
                </h1>
                <h1 className="text-[18px] text-[#000] font-normal  ">
                  {data.itinerary[1].departure.time}-
                  {data.itinerary[1].arrival.time}
                </h1>
              </div>
            </div>
            <div className="flex gap-x-[78px] h-fit">
              <div className="flex flex-col gap-y-[7px]">
                <h1 className="text-[#787B80] text-[14px]">
                  {data.itinerary[1].departure.airportCode}-
                  {data.itinerary[1].arrival.airportCode}
                </h1>
                <h1 className="text-[18px]">{data.itinerary[0].duration}</h1>
              </div>
              <div className="flex">
                <h1 className="mt-auto">{data.itinerary[1].stops}</h1>
              </div>
            </div>
          </div>
        </div>
        <Separator orientation="vertical" className="W-[1px]" />
        <div className="p-4 flex flex-col">
          <div className="mt-auto">
            <h1 className="mb-2 text-[#787B80] w-fit h-fit text-[14px] font-normal">
              from
            </h1>
            <h1 className="mb-4 text-[20px] font-medium w-fit h-fit text-[#001F1D]">
              {data.currency} {data.price}
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
            <Drawer
              data={data}
              openSheet={openSheet}
              setOpenSheet={setOpenSheet}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-md shadow-sm border flex w-[1056px] h-[184px] mb-6 text-[bg-muted]">
      <div className=" flex flex-col w-full  px-8 py-6 gap-y-8">
        <div className="flex gap-x-[280px] w-full ">
          <div className="flex h-fit gap-x-6">
            <Skeleton className="w-[42px] flex items-center"></Skeleton>
            <div className="flex flex-col gap-y-[7px]">
              <Skeleton className="text-[13px] w-[120px] h-[18px]  font-normal"></Skeleton>
              <Skeleton className="text-[18px] w-[140px] h-[18px]  font-normal  "></Skeleton>
            </div>
          </div>
          <div className="flex gap-x-[78px] h-fit">
            <div className="flex flex-col gap-y-[7px]">
              <Skeleton className=" text-[14px] w-[72px] h-[18px]"></Skeleton>
              <Skeleton className="text-[18px] w-[72px] h-[18px]"></Skeleton>
            </div>
            <div className="flex">
            <Skeleton className="text-[18px] w-[72px] h-[18px]"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex gap-x-[280px] w-full ">
          <div className="flex h-fit gap-x-6">
            <Skeleton className="w-[42px] flex items-center"></Skeleton>
            <div className="flex flex-col gap-y-[7px]">
              <Skeleton className="text-[13px] w-[120px] h-[18px]  font-normal"></Skeleton>
              <Skeleton className="text-[18px] w-[140px] h-[18px]  font-normal  "></Skeleton>
            </div>
          </div>
          <div className="flex gap-x-[78px] h-fit">
            <div className="flex flex-col gap-y-[7px] ">
              <Skeleton className=" text-[14px] w-[72px] h-[18px]"></Skeleton>
              <Skeleton className="text-[18px] w-[72px] h-[18px]"></Skeleton>
            </div>
            <div className="flex ">
              <Skeleton className="mt-auto w-[72px] h-[18px]"></Skeleton>
            </div>
          </div>
        </div>
      </div>
      <Separator orientation="vertical" className="W-[1px]" />
      <div className="p-4 flex flex-col">
        <div className="mt-auto">
          <Skeleton className="mb-2  w-[30px] h-[14px] text-[14px] font-normal">
          </Skeleton>
          <Skeleton className="mb-4 text-[20px] w-[124px] h-[20px] font-medium  ">
          </Skeleton>

          <Skeleton className="flex justify-center mt-auto gap-x-2 p-4 text-[16px] w-[182px] rounded-[8px] self-end"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Flightcard;
