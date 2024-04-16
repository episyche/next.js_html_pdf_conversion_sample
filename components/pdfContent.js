import Image from "next/image";
export const PDFContent = () => {
    return (
        <div className="w-[595px] text-[#40413F] bg-white font-[Helvetica]" id="mainDiv">
            <h1 className="text-center pt-[30px] text-[16px] text-[#40413F]] font-bold" > Sample PDF </h1>
            <p className="ml-[30px] font-bold mt-[50px] text-[14px] text-[#40413F]"> The Report  </p>
            <p className=" ml-[34px] mt-[15px] text-[12px] text-[#40413F]  " >
                The Brain is the most complex part of the human body. It controls thought, memory, emotion, touch,
                motor skills, vision, breathing, temperature. The brain is the source of all the qualities that define our humanity.
            </p>
            <p className=" ml-[34px] mt-[15px] text-[12px] text-[#40413F]  font-bold " >
                 Few Facts about the Brain Memory Capacity
            </p>
            <div className="ml-[34px] mt-[5px] text-[12px] text-[#40413F]">
                <p >
                    1. The memory capacity of the brain is around 2.5 million gigabytes of digital memory
                </p>
                <p  >
                    2. Cerebral Cortex alone has a storage capacity of 74 Terabytes
                </p>
                <p  >
                    3. Scientists estimate that the modern human brain has the capacity to hold upto 1 quadrillion pieces of 
                    information which is about 1,000,000,000,000,000 pieces of information!
                </p>
                

            </div>

            <div className="max-w-[300px] mt-[15px] ml-[100px] min-w-[300px] text-center ">
                <Image
                    src="/brain lobes anatomy.jpg"
                    width={300}
                    height={100}
                    quality={100}
                    unoptimized={true}
                    alt="Picture of the brain"
                />

            </div>
            <p className=" ml-[30px] mt-[15px] text-[12px] font-bold text-[#40413F]" > Sample Table</p>
            <div className="text-[#40413F] mt-[5px] text-[10px] mx-auto w-[535px]  ml-[30px]">
                <div className="flex flex-row border-[#D3D3D3] border-t-2">
                    <div className="w-[200px]  py-2 font-bold"> Memory Capacity of the Humain Brain  </div>
                    <div className="w-[335px]  py-2 "> 2.5 million gigabytes</div>

                </div>
                <div className="flex flex-row border-[#D3D3D3] border-t-[2px]">
                    <div className=" w-[200px]  py-2 font-bold "> How Many Years Of Memory Can the Brain Store   </div>
                    <div className=" w-[335px] py-2 "> 450 years </div>

                </div>
                <div className="flex flex-row border-[#D3D3D3] border-t-[2px]">
                    <div className=" w-[200px]  py-2 font-bold "> Number of Thoughts We have Per Day   </div>
                    <div className=" w-[335px] py-2 "> 70,000 </div>

                </div>

            </div>





        </div>
    )
}