import Image from "next/image";
import { CardWithForm } from './_components/search';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl ">Good afternoon, Brian</h1>
      <CardWithForm />
    </div>
  );
}
