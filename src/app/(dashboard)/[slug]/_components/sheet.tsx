import React, { SetStateAction} from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { DrawerProps } from "@/types/default";


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
