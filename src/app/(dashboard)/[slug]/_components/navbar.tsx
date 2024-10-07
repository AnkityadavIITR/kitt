"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import useFlightStore from "@/utils/flightstore";
import { Search } from "lucide-react";
import { SearchCard } from "../../../../components/common/search";
import { X } from "lucide-react";
interface NavbarProps {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}
const Navbar = ({ change, setChange, onClick }: NavbarProps) => {
  const { departure, arrival, departureDate, returnDate } = useFlightStore();
  // const date=format(departureDate,"P")
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

  // Ensure the date is a valid Date object before formatting
  const formattedDeparture = departureDate
    ? new Date(departureDate).toLocaleDateString('en-US', options)
    : undefined;
  
  const formattedReturn = returnDate
    ? new Date(returnDate).toLocaleDateString('en-US', options)
    : undefined;
  
  console.log(formattedDeparture);  // e.g., "Jun 25"
  console.log(formattedReturn);  // e.g., "Jul 10"

  if (!change) {
    return (
      <div className="w-full flex px-[192px] py-[28px]">
        <div className="w-full flex justify-between">
          <div className="flex px-6 py-3 border rounded-3xl">
            <div className="flex gap-x-4 items-center">
              <h1 className="line-clamp-1 w-[200px] text-[#787B80]">
                <span className="text-[#001F1D] font-medium">
                  {departure?.code}
                </span>{" "}
                {departure?.name}
              </h1>
              <Separator orientation="vertical" />
              <h1 className="line-clamp-1 w-[200px] text-[#787B80]">
                <span className="text-[#001F1D] font-medium">
                  {arrival?.code}
                </span>{" "}
                {arrival?.name}
              </h1>
              <Separator orientation="vertical" />
              <h1>{formattedDeparture}-{formattedReturn}</h1>
              <Separator orientation="vertical" />
              <div
                className="p-2 rounded-full bg-[#E5EBEB] cursor-pointer"
                onClick={() => setChange(true)}
              >
                <Search size={16} />
              </div>
            </div>
          </div>
          <div className="border p-3">
            <div className=" flex items-center">
              <X strokeWidth={1.25} size={20} />
            </div>

          </div>

        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center pt-[68px] pb-[24px]">
      <SearchCard showbadge={false} onClick={onClick} />
    </div>
  );
};

export default Navbar;
