"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Page: React.FC = () => {
  const [username, setUsername] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)

  const router = useRouter() // Initialize the router

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleSubmit = () => {
    setLoading(true)

    {
      router.push("/dashboard")
    }

    setLoading(false) // You can also move this after the redirect if you want
  }
  // UseEffect to automatically hide notifications after a timeout
  useEffect(() => {
    if (showSuccessNotification || showErrorNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false)
        setShowErrorNotification(false)
      }, 5000) // Notifications will disappear after 5 seconds

      return () => clearTimeout(timer) // Clean up the timeout if component unmounts
    }
  }, [showSuccessNotification, showErrorNotification])

  return (
    <>
      <div className="flex h-screen w-full justify-center max-md:bg-[#ffffff] md:items-center md:bg-[#F1F1F1]">
        <motion.div
          className="auth flex  justify-center bg-[#FFFFFF]  max-sm:w-[100%] xl:min-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="w-full justify-center   ">
            <div className="flex items-center py-6 max-md:px-3 md:px-6 xl:min-w-[600px]">
              <Image
                src="./AuthImages/CaretUp.svg"
                width={24}
                height={24}
                alt="profile"
                className="cursor-pointer object-contain"
                onClick={() => router.back()}
              />
              <div className="flex w-full items-center justify-center">
                <Image
                  src="./AuthImages/Professional.svg"
                  width={166}
                  height={24}
                  alt="profile"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full border-b border-[#0000000D] "></div>

            <div className="mt-5 flex w-full justify-center">
              <form onSubmit={handleSubmit}>
                <label className="text-xs">VCN number</label>
                <div className="search-bg mb-2  h-[48px] items-center justify-between rounded-lg px-3 py-3 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2 xl:w-[536px]">
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      placeholder="VCN234567"
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                </div>

                <label className=" text-xs">Category of Specialization</label>
                <div className="search-bg mb-2  h-[48px] items-center justify-between rounded-lg px-3 py-3 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2 xl:w-[536px]">
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      placeholder="12/12/2001"
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                      value={username}
                      onChange={handleUsernameChange}
                    />
                    <Image src="./AuthImages/CaretUp1.svg" width={24} height={24} alt="dekalo" />
                  </div>
                </div>

                <label className=" text-xs">University</label>
                <div className="search-bg mb-2  h-[48px] items-center justify-between rounded-lg px-3 py-3 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2 xl:w-[536px]">
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      placeholder="12/12/2001"
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                      value={username}
                      onChange={handleUsernameChange}
                    />
                    <Image src="./AuthImages/CaretUp1.svg" width={24} height={24} alt="dekalo" />
                  </div>
                </div>

                <label className=" text-xs">State</label>
                <div className="search-bg mb-2 h-[48px] items-center justify-between rounded-lg px-3 py-3 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-md:w-[340px] max-sm:mb-2 xl:w-[536px]">
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      placeholder="12/12/2001"
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                      value={username}
                      onChange={handleUsernameChange}
                    />
                    <Image src="./AuthImages/CaretUp1.svg" width={24} height={24} alt="dekalo" />
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-6 w-full border-b border-[#0000000D] max-md:hidden"></div>

            <div className="my-4 justify-center gap-1 ">
              <div className="mt-5 flex w-full justify-center gap-6 md:px-6">
                <button
                  type="submit"
                  className="button-primary h-[42px] w-full rounded-lg max-md:w-[340px] max-sm:h-[42px]"
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? "Signing In..." : "Proceed"}
                </button>
              </div>
              <div className="mt-6 w-full border-b border-[#0000000D] max-md:hidden"></div>

              <div className="my-4 flex justify-center gap-1 px-6">
                <p className="text-base text-[#4F4F4F]">Dont Have an Account Yet? </p>
                <Link href="/signup" className="text-base text-[#1B5EED]">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {showSuccessNotification && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">Login Successfully</span>
          <Image src="./AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {showErrorNotification && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="./AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </>
  )
}

export default Page
