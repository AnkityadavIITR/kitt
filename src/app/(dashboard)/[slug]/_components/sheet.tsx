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

interface DrawerProps{
    data:FlightData,
    openSheet:boolean,
    setOpenSheet:React.Dispatch<SetStateAction<boolean>>
}
const Drawer = ({data,openSheet,setOpenSheet}:DrawerProps) => {
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
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
