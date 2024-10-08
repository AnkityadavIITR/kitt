"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarProps } from "@/types/default"

export const DatePickerDemo = ({ type,date,setDate,minDate }: CalendarProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[177px] h-[60px] justify-start text-left font-normal px-3 py-5 text-[#484A4D]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-[10px] h-5 w-5" />
          {date ? format(date, "P") : <span className="text-black" >{type}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          fromDate={minDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
