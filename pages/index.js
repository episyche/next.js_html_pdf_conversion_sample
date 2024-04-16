import Image from "next/image";
import { Inter } from "next/font/google";
import { PDFContent } from "@/components/pdfContent";
import { PDFConvertor } from "@/components/pdfConvertor";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[value, setValue] =  useState(false)
  return (
    <>
    <PDFContent/>
    <button className="mt-[30px] border-black border-2 rounded ml-[30px]" onClick={(e)=>setValue(true)}> Generate PDF </button>
    {
      value && 
      <PDFConvertor value={{value, setValue}} />
    }
    </>
  );
}
