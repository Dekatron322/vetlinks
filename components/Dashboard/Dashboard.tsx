import Image from "next/image"
import React from "react"
import { RiArrowDropRightLine } from "react-icons/ri"
import { Trending } from "utils"

const Dashboard = () => {
  return (
    <section>
      <div className="px-16 py-7 max-sm:px-3">
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
          </div>
        </div>
      </div>
      <div className="w-full border-b"></div>

      <div className="grid grid-cols-4 gap-5 px-16 py-7 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-3">
        {Trending.map((item, trend) => (
          <div className="h-auto w-full rounded-lg bg-white" key={item.id}>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2">
                <Image src="/DashboardImages/ic_round-account-circle.svg" width={32} height={32} alt="" />
                <div>
                  <p className="clash-font text-[#333333]">{item.user}</p>
                  <p className="text-xs text-[#8E8E93]">{item.location}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Image src="/DashboardImages/la.svg" width={36} height={32} alt="" />
                <Image src="/DashboardImages/DotsThreeVertical.svg" width={36} height={32} alt="" />
              </div>
            </div>
            <div style={{ position: "relative", width: "100%", height: "161px" }}>
              <Image src={item.image} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="clash-font px-4 py-3 text-base font-medium text-[#333333]">{item.case}</p>
            <div className=" w-full border-b"></div>
            <p className="clash-font px-4 py-3 text-xs font-medium text-[#8E8E93]">{item.date}</p>
            <div className=" w-full border-b"></div>

            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-1">
                <Image src="/DashboardImages/ShareFat.svg" width={24} height={24} alt="" />
                <p className="text-sm text-[#8E8E93]">{item.shares}</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/DashboardImages/ChatCircleText.svg" width={24} height={24} alt="" />
                <p className="text-sm text-[#8E8E93]">{item.comments}</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/DashboardImages/BookmarkSimple.svg" width={24} height={24} alt="" />
                <p className="text-sm text-[#8E8E93]">{item.bookmarks}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Dashboard
