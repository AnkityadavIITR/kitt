"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Modal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[323px] bg-[#FCFDFF] pt-0">
        <DialogHeader>
            <div className="flex justify-center items-center ">
                <Image src="/images/plane.png" alt="logo" width={150} height={150} />
            </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Add your form fields or content here */}
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
