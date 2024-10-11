"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CasesDetails = () => {
  const router = useRouter()

  const [replyVisible, setReplyVisible] = useState(false)

  const handleReplyClick = () => {
    setReplyVisible(!replyVisible) // Toggle reply input visibility
  }

  const handleGoBack = () => {
    router.back()
  }
  return (
    <section>
      <motion.div
        className=" flex w-full px-16 py-7 max-sm:px-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div>
          <div className="flex items-center gap-3">
            <Image
              onClick={handleGoBack}
              src="./Dashboardimages/CaretLeft.svg"
              width={24}
              height={24}
              alt=""
              className="cursor-pointer"
            />
            <Image src="./Dashboardimages/Avatar.svg" width={80} height={80} alt="" />
            <div>
              <p className="clash-font text-sm font-medium text-[#333333]">DR. Theophilus Sani</p>
              <p className="clash-font font-regular py-2 text-xs text-[#4F4F4F]">Ahmadu Bello University</p>
            </div>
          </div>
          <div className="mt-2 flex w-full md:hidden">
            <div className="flex w-full items-center gap-2 rounded-s-md border  px-2">
              <Image src="./Dashboardimages/MagnifyingGlass.svg" width={20} height={20} alt="" />

              <p className="text-sm text-[#4F4F4F]">Search</p>
            </div>
            <div className="flex w-full cursor-pointer justify-between gap-2 rounded-r-md border p-2">
              <p className="text-sm text-[#4F4F4F]">All Categories</p>
              <Image src="./Dashboardimages/CaretDown.svg" width={18} height={18} alt="" />
            </div>
          </div>
          <div className="relative mt-5 flex gap-3 max-sm:hidden">
            <div className="flex ">
              <div className="flex w-[300px] items-center gap-2 rounded-s-md border bg-white px-2">
                <Image src="./Dashboardimages/MagnifyingGlass.svg" width={20} height={20} alt="" />

                <p className="text-sm text-[#4F4F4F]">Search</p>
              </div>
              <div className="flex cursor-pointer gap-2 rounded-r-md border bg-[#ffffff] p-2">
                <p className="text-sm text-[#4F4F4F]">Filter</p>
                <Image src="./Dashboardimages/FunnelSimple.svg" width={18} height={18} alt="" />
              </div>
            </div>

            <div className="flex ">
              <div className="flex items-center gap-2 rounded-s-md border bg-white px-3">
                <p className="text-sm text-[#4F4F4F]">Categories</p>
              </div>
              <div className="flex cursor-pointer items-center gap-2 rounded-r-md border bg-[#ffffff] px-3">
                <p className="text-sm text-[#4F4F4F]">All Categories</p>
                <Image src="./Dashboardimages/CaretDown.svg" width={18} height={18} alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full border-b"></div>

      <div className="w-full gap-5  px-16 max-sm:grid-cols-1   max-sm:px-3 md:flex">
        <motion.div
          className="my-5 h-auto md:w-[60%]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "8px" }}>
            <Image
              src="./Dashboardimages/imgLarge.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <p className="clash-font py-3 text-xl font-black text-[#00000080]">
            TOPIC: <span className=" text-black">MANAGEMENT  OF ANCYLOSTOMOSIS IN A 4-YEAR-OLD MALE CAT</span>
          </p>

          <p className="clash-font  font-regular  text-base text-[#00000080]">
            CLINICIAN: <span className="text-black">DR jOHN DOE</span>
          </p>
          <div className="gap-4 py-3 md:flex">
            <p className="clash-font  font-regular  text-base text-[#00000080]">
              CATEGORY: <span className="text-black">LARGE ANIMAL</span>
            </p>
            <p className="clash-font font-regular text-base  text-[#00000080] max-sm:my-3">
              BREED: <span className="text-black">NDAMA</span>
            </p>
            <p className="clash-font  font-regular  text-base text-[#00000080]">
              DATE: <span className="text-black">26 AUG, 2024</span>
            </p>
          </div>
          <div className=" w-full border-b"></div>

          <div className="py-5">
            <p className="text-base text-[#000000]">SIGNALMENT AND HISTORY</p>
            <p className="clash-font pt-3 leading-7">
              A 4-year-old male cat weighing 0.9kg was presented to the Small Animal Clinic,  Ahmadu Bello University
              Veterinary Teaching Hospital Zaria on the 14th of March, 2024. with the complaints of being off-feed. the
              cat was kept alone and fed a homemade meal (cooked rice, and fish). And has no record of vaccination.
            </p>
          </div>
          <div className=" w-full border-b"></div>
          <div className="py-5">
            <p className="text-base text-[#000000]">CLINICAL EXAMINATION</p>
            <p className="py-3">Table: vital parameters of the patient</p>
            <div className="flex justify-between  pt-3 md:w-[80%]">
              <div className="">
                <p className="pb-2">Parameter values.</p>
                <p className="pb-2">Temperature (°c).</p>
                <p className="pb-2">Pulse rate (beats/min)</p>
                <p>Respiratory rate (cycles/min)</p>
              </div>
              <div>
                <p className="pb-2 ">Patient values (Day 1)</p>
                <p className="pb-2 text-center">38.2</p>
                <p className="pb-2 text-center">132</p>
                <p className="text-center">48</p>
              </div>
              <div>
                <p>Reference</p>
                <p className="pb-2 text-center">38.5-39.4</p>
                <p className="pb-2 text-center">60-90</p>
                <p className="text-center">15-30</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="border-l border-gray-300"></div>
        <div className="my-5 md:w-[30%]">
          <div className="flex items-start gap-4">
            <Image src="./Dashboardimages/Round.svg" width={45.43} height={45.43} alt="User Avatar" />
            <div>
              <p className="clash-font text-base font-bold text-[#141619]">
                Martha Craig <span className="#687684">·12h</span>
              </p>
              <p className="clash-font mt-2">
                UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools
                and usability. What do you bring?
              </p>

              <button onClick={handleReplyClick} className="clash-font my-4 text-[#1B5EED] underline">
                Reply
              </button>

              {replyVisible && (
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Enter your reply..."
                    className="w-full rounded-md border p-2 focus:border-[#0000001A] focus:outline-none focus:ring-1"
                  />
                </div>
              )}

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <Image src="./Dashboardimages/Comment.svg" width={12.39} height={11.99} alt="User Avatar" />
                  <p className="text-xs text-[#687684]">28</p>
                </div>

                <button className="clash-font  text-[#1B5EED] underline">Hide Replies</button>
              </div>
            </div>
          </div>
          <div className="my-5 w-full border-b"></div>
          <div className="flex items-start gap-4 pl-10">
            <Image src="./Dashboardimages/Round.svg" width={45.43} height={45.43} alt="User Avatar" />
            <div>
              <p className="clash-font text-base font-bold text-[#141619]">
                Martha Craig <span className="#687684">·12h</span>
              </p>
              <p className="clash-font mt-2">
                UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools
                and usability. What do you bring?
              </p>

              <button className="clash-font mt-4 text-[#1B5EED] underline">Reply</button>
            </div>
          </div>
          <div className="my-5 ml-10 w-full border-b"></div>
          <div className="flex items-start gap-4 pl-10">
            <Image src="./Dashboardimages/Round.svg" width={45.43} height={45.43} alt="User Avatar" />
            <div>
              <p className="clash-font text-base font-bold text-[#141619]">
                Martha Craig <span className="#687684">·12h</span>
              </p>
              <p className="clash-font mt-2">
                UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools
                and usability. What do you bring?
              </p>

              <button className="clash-font mt-4 text-[#1B5EED] underline">Reply</button>
            </div>
          </div>
          <div className="my-5 ml-10 w-full border-b"></div>
        </div>
      </div>
    </section>
  )
}

export default CasesDetails
