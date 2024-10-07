"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Oval } from "react-loader-spinner";
import { CircleCheck } from "lucide-react";
import { set } from "date-fns";

export function Modal() {
  const [open, setOpen] = useState(false);
  const [loadcnt, setLoadcnt] = useState<number>(0);

  useEffect(() => {
    setOpen(true);
    const interval = setInterval(() => {
      setLoadcnt((prevCnt: number) => {
        console.log("call interval");
        
        if (prevCnt > 3) {
          setOpen(false);
          clearInterval(interval);
          return prevCnt;
        }
        return prevCnt + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[323px] bg-[#FCFDFF] pt-0">
        <DialogHeader>
          <div className="flex justify-center items-center ">
            <Image
              src="/images/plane.png"
              alt="logo"
              width={150}
              height={150}
            />
          </div>
        </DialogHeader>
        <div className="flex flex-col  gap-y-[25px]">
          <div className="flex items-center gap-x-4">
            {loadcnt < 1 ? (
              <Oval
                visible={true}
                height="16"
                width="16"
                ariaLabel=""
                color="#000000"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <div className="w-fit">
                <CircleCheck strokeWidth={1.5} size={20} color="#096B2B" />
              </div>
            )}
            <h1 className={"text-[18px] text-[#787B80]"}>Searching 400+ flights</h1>
          </div>
          <div className="flex items-center gap-x-4">
            {loadcnt < 2 ? (
              <Oval
                visible={true}
                height="16"
                width="16"
                ariaLabel=""
                color="#000000"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <div className="w-fit">
                <CircleCheck strokeWidth={1.5} size={20} color="#096B2B" />
              </div>
            )}
            <h1 className={loadcnt <1  ? "text-[18px] text-[#C9CACC] " : "text-[18px] text-[#787B80]"}>Attaching company rules</h1>
          </div>
          <div className="flex items-center gap-x-4">
            {loadcnt < 3 ? (
              <Oval
                visible={true}
                height="16"
                width="16"
                ariaLabel=""
                color="#000000"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <div className="w-fit">
                <CircleCheck strokeWidth={1.5} size={20} color="#096B2B" />
              </div>
            )}
            <h1 className={loadcnt < 2 ? "text-[18px] text-[#C9CACC] " : "text-[18px] text-[#787B80]"}>Serving best results</h1>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
