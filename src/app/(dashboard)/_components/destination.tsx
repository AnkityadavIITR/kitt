/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { SearchIcon } from "./icons";
import { DestinationProps } from "@/types/default";

export function Destination({ des, type, dest, setDest }: DestinationProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[267px] flex justify-between items-center p-3 rounded-md border-[1px] border-[#E6E8EB)]">
        <div className="flex gap-x-[10px]">
          <SearchIcon />
          {dest ? (
            <div className="flex flex-col ">
              <h1 className="text-[12px] text-left">
                {type == "departure" ? "Where From?" : "Where To?"}
              </h1>
              <h1 className="line-clamp-1 text-left">{dest?.name}</h1>
            </div>
          ) : (
            <h1 className="text-[#484A4D]">
              {type == "departure" ? "Where From?" : "Where To?"}
            </h1>
          )}
        </div>
        <ChevronDown size={20} strokeWidth={1.25} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[267px] p-3 max-h-[300px] overflow-y-auto">
        {des.map((item, index) => {
          return (
            <DropdownMenuItem
              onClick={() => {
                setDest(item);
              }}
              key={index}
              className="flex justify-between items-center gap-x-2"
            >
              <div className="">
                <h1 className="text-[#2B2B2B] text-[14px]">{item.city}</h1>
                <h1 className="text-[#787B80] text-[12px]">{item.country}</h1>
              </div>
              <h1 className="text-[14px] text-[#2B2B2B]">{item.code}</h1>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
