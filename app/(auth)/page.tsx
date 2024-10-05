"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"

const Page: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const router = useRouter() // Initialize the router

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   setLoading(true)
  //   setError(null)

  //   try {
  //     const response = await fetch("https://amd-backend-1.onrender.com/custom-user/sign-in/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     })

  //     if (!response.ok) {
  //       throw new Error("Failed to sign in. Please try again.")
  //     }

  //     setShowSuccessNotification(true)
  //     await new Promise((resolve) => setTimeout(resolve, 3000))

  //     setLoading(false)

  //     router.push("/dashboard")
  //   } catch (error: any) {
  //     setError(error.message)
  //     setShowErrorNotification(true)
  //     setLoading(false)
  //   }
  // }

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
      <div className="flex h-screen w-full items-center justify-center bg-[#F1F1F1]">
        <motion.div
          className="auth flex  justify-center bg-[#FFFFFF]  max-sm:w-[95%] xl:min-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="w-auto justify-center   ">
            <div className=" flex items-center justify-center py-6 xl:min-w-[600px]">
              <Image src="/AuthImages/login.svg" width={59} height={24} alt="profile" className="object-contain" />
            </div>
            <div className="w-full border-b border-[#0000000D] "></div>
            <div className=" flex  flex-col items-center justify-center py-6 xl:min-w-[600px]">
              <Image src="/AuthImages/Vetlinks.svg" width={80} height={74} alt="profile" className="object-contain" />
              <Image src="/AuthImages/vetlinkss.svg" width={108} height={74} alt="profile" className="object-contain" />
            </div>
            <div className="w-full border-b border-[#0000000D]"></div>

            <div className="mt-5 flex w-full justify-center">
              <form>
                <label className="text-xs">Email</label>
                <div className="search-bg mb-5 h-[48px]  items-center justify-between rounded-lg px-3 py-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2 xl:w-[536x]">
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      placeholder="Shereefadamu001@gmail.com"
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                </div>

                <label className="text-xs">Password</label>
                <div className="search-bg  h-[48px] items-center justify-between rounded-lg px-3 py-3 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2 xl:w-[536px]">
                  <div className="flex">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      placeholder="*****************"
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button type="button" className="focus:outline-none" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? (
                        <RemoveRedEyeOutlinedIcon />
                      ) : (
                        <Image
                          className="icon-style"
                          src="/AuthImages/eye-close-line.png"
                          width={24}
                          height={24}
                          alt="toggle password visibility"
                        />
                      )}
                    </button>
                  </div>
                </div>

                <Link href="/forgot-password" className="flex content-center items-center justify-end gap-2">
                  <p className="mt-2 text-xs text-[#4F4F4F]">Forgot Password</p>
                </Link>
              </form>
            </div>

            <div className="mt-6 w-full border-b border-[#0000000D]"></div>

            <div className="my-4 justify-center gap-1 ">
              <div className="mt-5 flex w-full gap-6 px-6">
                <button
                  type="submit"
                  className="button-primary h-[42px] w-full rounded-lg max-sm:h-[42px]"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Proceed"}
                </button>
              </div>
              <div className="mt-6 w-full border-b border-[#0000000D]"></div>

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
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {showErrorNotification && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </>
  )
}

export default Page
