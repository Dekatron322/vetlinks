import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { RiArrowDropRightLine } from "react-icons/ri"
import { Doctors, Trending } from "utils"

const DoctorsCard = () => {
  return (
    <section>
      <motion.div
        className="px-16 py-7 max-sm:px-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="flex items-center gap-1">
          <p className="clash-font text-sm text-[#00000080] ">Explore </p>
          <p>
            <RiArrowDropRightLine />
          </p>
          <p className="clash-font text-sm text-[#00000080] ">Cases</p>
        </div>
        <p className="clash-font text-lg font-black text-black">Trending Cases</p>

        <div>
          <div className="mt-2 flex w-full md:hidden">
            <div className="flex w-full items-center gap-2 rounded-s-md border  px-2">
              <Image src="/DashboardImages/MagnifyingGlass.svg" width={20} height={20} alt="" />

              <p className="text-sm text-[#4F4F4F]">Search</p>
            </div>
            <div className="flex w-full cursor-pointer justify-between gap-2 rounded-r-md border p-2">
              <p className="text-sm text-[#4F4F4F]">All Categories</p>
              <Image src="/DashboardImages/CaretDown.svg" width={18} height={18} alt="" />
            </div>
          </div>
          <div className="relative mt-5 flex gap-3 max-sm:hidden">
            <div className="flex ">
              <div className="flex w-[300px] items-center gap-2 rounded-s-md border bg-white px-2">
                <Image src="/DashboardImages/MagnifyingGlass.svg" width={20} height={20} alt="" />

                <p className="text-sm text-[#4F4F4F]">Search</p>
              </div>
              <div className="flex cursor-pointer gap-2 rounded-r-md border bg-[#ffffff] p-2">
                <p className="text-sm text-[#4F4F4F]">Filter</p>
                <Image src="/DashboardImages/FunnelSimple.svg" width={18} height={18} alt="" />
              </div>
            </div>

            <div className="flex ">
              <div className="flex items-center gap-2 rounded-s-md border bg-white px-3">
                <p className="text-sm text-[#4F4F4F]">Categories</p>
              </div>
              <div className="flex cursor-pointer items-center gap-2 rounded-r-md border bg-[#ffffff] px-3">
                <p className="text-sm text-[#4F4F4F]">All Categories</p>
                <Image src="/DashboardImages/CaretDown.svg" width={18} height={18} alt="" />
              </div>
            </div>

            <div className="flex ">
              <div className="flex items-center gap-2 rounded-s-md border bg-white px-3">
                <p className="text-sm text-[#4F4F4F]">Date Joined</p>
              </div>
              <div className="flex cursor-pointer items-center gap-2 rounded-r-md border bg-[#ffffff] px-3">
                <Image src="/DashboardImages/Date.svg" width={18} height={18} alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full border-b"></div>

      <div className="grid grid-cols-8 gap-3 px-16 py-7 max-md:grid-cols-2 max-sm:grid-cols-2 max-sm:px-3">
        {Doctors.map((item, trend) => (
          <motion.div
            className="h-auto w-full rounded-md bg-white"
            key={item.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center py-4">
              <Image src={item.image} width={80} height={80} alt="" />
              <p className="clash-font py-1 text-center text-base font-medium text-[#333333]">{item.name}</p>
              <p className="clash-font pb-2 text-center text-[9px] font-medium text-[#8E8E93]">{item.location}</p>
              <Image src="/DashboardImages/la.svg" width={31} height={32} alt="" />
            </div>

            <div className=" w-full border-b"></div>
            <div className="flex justify-between px-2 py-3">
              <div className="flex items-center gap-1">
                <Image src="/DashboardImages/FileText.svg" width={17.4} height={17.4} alt="" />
                <p className="clash-font  text-center text-sm font-medium text-[#333333]">Cases</p>
                <p className="clash-font  text-center text-sm text-[#333333]">{item.cases}</p>
              </div>
              <Image src="/DashboardImages/ArrowUpRight.svg" width={12} height={12} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default DoctorsCard
