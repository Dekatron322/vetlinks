"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { Skeleton } from "@mui/material"

const DashboardNav = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)
  const [searchText, setSearchText] = useState("")

  const handleCancelSearch = () => {
    setSearchText("")
  }

  return (
    <>
      <nav className="body hidden border-b px-16 py-4 md:block">
        <div className="flexBetween">
          <div className="flex content-center gap-32">
            <div className="content-center">
              <p className="clash-font text-xl font-black text-black">Welcome Back. Dr. Usman Isah</p>
              <p className="clash-font text-sm font-medium text-[#00000080]">
                Best Veterinary Platform to View and Discuss important cases
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex content-center items-center justify-center gap-5">
              <Link
                href="/"
                className="clash-font flex h-[42px] content-center items-center justify-center gap-2 rounded-lg bg-[#1B5EED] px-5 text-white"
              >
                Upload New Case
                <Image src="/AuthImages/Plus.svg" width={20} height={20} alt="avatar" />
              </Link>
              <Link href="/" className="flex content-center items-center justify-center">
                <Image src="/DashboardImages/Sun.svg" width={24} height={24} alt="avatar" />
              </Link>
              <div className="flex  items-center justify-center ">
                <Image src="/DashboardImages/BellSimple.svg" width={24} height={24} alt="avatar" />
              </div>
              <Link href="/" className="flex content-center items-center justify-center">
                <Image src="/DashboardImages/ic_round-account-circle.svg" width={32} height={32} alt="avatar" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="block border-b bg-[#F2F6FD] px-16 py-4 max-md:px-3 md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="content-center">
            <Image src="/AuthImages/amd-logo.png" width={150} height={43} alt="dekalo" />
          </Link>
          <div className="flex h-[50px] items-center justify-center gap-1 rounded-full bg-[#EDF2F7] px-1">
            <Image src="/DashboardImages/User.svg" width={40} height={40} alt="avatar" />

            <Image className="mr-4" src="/DashboardImages/dropdown.svg" width={15.68} height={15.68} alt="avatar" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default DashboardNav
