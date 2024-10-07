"use client";
import { useRouter } from "next/navigation";
import { SearchCard } from "../../components/common/search";
import { Card } from "@/components/ui/card";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked");
    router.push("/flight-details");
  };
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl ">Good afternoon, Brian</h1>
      <Card className="w-[1057px] h-[252px] py-6 px-7 rounded-[12px] shadow-md flex flex-col ">
        <SearchCard showbadge={true} onClick={handleClick}/>
      </Card>
    </div>
  );
}
