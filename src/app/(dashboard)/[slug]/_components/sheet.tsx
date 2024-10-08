import React, { SetStateAction, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FlightData } from "./flightcard";
import { Separator } from "@/components/ui/separator";

interface DrawerProps{
    data:FlightData,
    openSheet:boolean,
    setOpenSheet:React.Dispatch<SetStateAction<boolean>>
}
const Drawer = ({data,openSheet,setOpenSheet}:DrawerProps) => {
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent className="w-[660px] flex flex-col m-5  rounded-md">
        <SheetHeader className="mt-10">
          <SheetTitle className="mt-6 mb-6 text-[20px] font-medium text-[#000]">Flight details</SheetTitle>
          <Separator orientation="horizontal" className="mb-6"/>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
