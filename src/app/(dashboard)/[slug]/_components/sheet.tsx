import React, { SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { DrawerProps } from "@/types/default";
import Image from "next/image";

const Drawer = ({ data, openSheet, setOpenSheet }: DrawerProps) => {
  console.log("data",data)
  console.log("departure",data.itinerary[0]);
  console.log("return",data.itinerary[1]);
  
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent className="w-[660px] flex flex-col m-5 p-7 rounded-md">
        <SheetHeader className="mt-10">
          <SheetTitle className="mt-6 mb-6 text-[20px] font-medium text-[#000]">
            Flight details
          </SheetTitle>
          <Separator orientation="horizontal" />

          <div className="flex justify-between mt-6">
            <div className="flex flex-col  gap-y-[9px]">
              <div className="flex gap-x-3">
                <Image
                  src="/images/Ellipse.svg"
                  height={12}
                  width={12}
                  className=""
                  alt="logo"
                />
                <h1 className="text-[12px] font-normal">
                  {data.itinerary[0].date}.{data.itinerary[0].departure.time}
                </h1>
              </div>
              <div className="flex gap-x-3">
                <div className="w-[12px]">
                  <Separator
                    orientation="vertical"
                    className="h-[55px] mx-auto w-[1.5px] bg-black"
                  />
                </div>
                <h1 className="text-[14px] font-medium">
                  {data.itinerary[0].departure.airportCode}.
                  {data.itinerary[0].departure.airportName}
                </h1>
              </div>
              <div className="flex gap-x-3">
                <Image
                  src="/images/Ellipse.svg"
                  height={12}
                  width={12}
                  className=""
                  alt="logo"
                />
                <h1 className="text-[12px] font-normal">
                  {data.itinerary[0].date} {data.itinerary[0].arrival.time}
                </h1>
              </div>
              <div className="flex gap-x-3">
                <div className="w-[12px]">
                  <Image
                    src={"/images/break.svg"}
                    height={1.5}
                    width={2}
                    className=" mx-auto text-black"
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col max-w-[206px]">
                  <h1 className="text-[14px] font-medium">
                    {data.itinerary[0].arrival.airportCode}.
                    {data.itinerary[0].arrival.airportName}
                  </h1>
                </div>
              </div>
              <div className="flex gap-x-3">
                <Image
                  src="/images/Ellipse.svg"
                  height={12}
                  width={12}
                  className=""
                  alt="logo"
                />
                <h1 className="text-[12px] font-normal">
                  {data.itinerary[1].date} {data.itinerary[1].departure.time}
                </h1>
              </div>
              <div className="flex gap-x-3">
                <div className="w-[12px]">
                  <Separator
                    orientation="vertical"
                    className="h-[55px] mx-auto w-[1.5px] bg-black"
                  />
                </div>
                <h1 className="text-[14px] font-medium">
                  {data.itinerary[1].arrival.airportCode}.
                  {data.itinerary[1].arrival.airportName}
                </h1>
              </div>
              <div className="flex gap-x-3">
                <div className="">
                  <Image
                    src="/images/Ellipse.svg"
                    height={12}
                    width={12}
                    className=""
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col gap-y-[9px]">
                  <h1 className="text-[12px] font-normal">
                    {data.itinerary[1].date} {data.itinerary[1].arrival.time}
                  </h1>
                  <h1 className="text-[14px] font-medium">
                    {data.itinerary[1].departure.airportCode}.
                    {data.itinerary[1].departure.airportName}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-[14px] h-fit mt-10">
                <div className="w-[28px] h-[28px] border flex items-center">
                  <Image
                    src={data.itinerary[0].image}
                    alt="logo"
                    width={24}
                    height={12}
                  />
                </div>
                <div className="flex flex-col gap-y-[6px]">
                  <h1 className="text-[12px] text-[#484A4D]">
                    {data.itinerary[0].airline} {data.itinerary[0].flightNumber}
                  </h1>
                  <h1 className="text-[12px] text-[#484A4D]">Economy • A330</h1>
                  <h1 className="text-[12px] text-[#484A4D]">
                    Flight time {data.itinerary[0].duration}
                  </h1>
                </div>
              </div>
              <div className="flex gap-x-[14px] h-fit mt-[200px]">
                <div className="w-[28px] h-[28px] border flex items-center">
                  <Image
                    src={data.itinerary[1].image}
                    alt="logo"
                    width={24}
                    height={12}
                  />
                </div>
                <div className="flex flex-col gap-y-[6px]">
                  <h1 className="text-[12px] text-[#484A4D]">
                    {data.itinerary[1].airline} {data.itinerary[1].flightNumber}
                  </h1>
                  <h1 className="text-[12px] text-[#484A4D]">Economy • A330</h1>
                  <h1 className="text-[12px] text-[#484A4D]">
                    Flight time {data.itinerary[1].duration}
                  </h1>
                </div>
              </div>

            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
