import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SearchIcon } from "./icons"

type Airport={
  name:string,
  code:string,
  city:string,
  country:string,
}
interface Destination {
  des:Airport[],
  type:string,
  dest:Airport | undefined,
  setDest: React.Dispatch<React.SetStateAction<Airport | undefined>> // Allow undefined
}
export function Destination({des,type,dest,setDest }:Destination) {
  return (
  <DropdownMenu>
    <DropdownMenuTrigger className="w-[267px] flex justify-between items-center p-3 rounded-md border-[1px] border-[#E6E8EB)]" >
      <div className="flex gap-x-[10px]">
        <SearchIcon/>
        <h1 className="text-[#484A4D]">{dest? (dest?.name) :(type=="departure"?"Where From?":"Where To?") }</h1>
      </div>
      
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[267px] p-3">
      {
        des.map((item,index)=>{
          return <DropdownMenuItem onClick={()=>{setDest(item)}} key={index}>{item.name}</DropdownMenuItem>
        })
      }
    </DropdownMenuContent>
  </DropdownMenu>
  )
}