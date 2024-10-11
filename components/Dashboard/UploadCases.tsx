"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { RiArrowDropRightLine } from "react-icons/ri"

interface FileData {
  file: File
  preview: string
}

const UploadCases = () => {
  const router = useRouter()
  const [replyVisible, setReplyVisible] = useState(false)
  const [files, setFiles] = useState<FileData[]>([])

  const handleReplyClick = () => {
    setReplyVisible(!replyVisible) // Toggle reply input visibility
  }

  const handleGoBack = () => {
    router.back()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles])
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFiles = Array.from(event.dataTransfer.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles])
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  // Function to delete an image
  const handleDelete = (index: number) => {
    // Filter out the image at the provided index
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  return (
    <section>
      <div className="w-full border-b"></div>

      <div className="w-full gap-5 px-16 max-sm:grid-cols-1 max-sm:px-3 md:flex">
        <motion.div
          className="z-20 my-5 h-auto md:w-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div>
            <div className="mb-3 items-center gap-3">
              <div className="flex items-center gap-1">
                <p className="clash-font text-sm text-[#00000080] ">Explore </p>
                <p>
                  <RiArrowDropRightLine />
                </p>
                <p className="clash-font text-sm text-[#00000080] ">Upload Cases</p>
              </div>
              <p className="clash-font text-lg font-black text-black">Upload Cases</p>
            </div>

            <div className="relative my-5 flex gap-3 max-sm:hidden">
              <div className="flex ">
                <div className="clash-font flex items-center gap-2 rounded-s-md border bg-white px-3 py-2">
                  <p className="text-sm text-[#4F4F4F]">Categories</p>
                </div>
                <div className="flex w-[395px] cursor-pointer items-center justify-between gap-2 rounded-r-md border bg-[#ffffff] px-3">
                  <p className="clash-font text-sm text-[#4F4F4F]">Large Animal</p>
                  <Image
                    src="https://raw.githubusercontent.com/Dekatron322/vetlinks/81c86ade0ad897a2c063918fc20d3fc47af1eaa5/public/DashboardImages/CaretDown.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <textarea
              id="username"
              placeholder="Case Title"
              className="clash-font h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
              style={{ width: "100%", height: "24px" }}
            ></textarea>
          </div>
        </motion.div>
        <div className="border-l border-gray-300"></div>
        <motion.div
          className="flex w-full flex-col"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="my-5">
            <div className="items-center gap-3">
              <p className="clash-font text-xl font-black text-black">Upload Relevant Gallery</p>
              <div className="flex items-center gap-1">
                <p className="clash-font text-sm text-[#00000080] ">Maximum File To be Uploaded is 3</p>
              </div>
            </div>
            <div>
              <div
                className="-z-10 my-3 cursor-pointer gap-2 rounded-md border bg-[#ffffff] px-3 py-3 md:w-[395px]"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <p className="clash-font text-sm text-[#4F4F4F]">Drag & drop images here, or click to select files</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="z z-50">
            {files.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">Uploaded Files:</p>
                <div className="my-3 flex w-full items-center justify-between">
                  <ul className="flex w-full flex-col">
                    {files.map((file, index) => (
                      <div className="flex w-full items-center justify-between" key={index}>
                        <li className="mb-2 flex items-center gap-3">
                          <img
                            src={file.preview}
                            alt={file.file.name}
                            className="mb-1 h-20 w-20 rounded-md object-cover"
                          />
                          <p className="clash-font text-sm font-medium text-[#00000080]">{file.file.name}</p>
                        </li>
                        {/* Make sure the trash icon is not inside the input field */}
                        <div onClick={() => handleDelete(index)}>
                          <Image
                            src="https://raw.githubusercontent.com/Dekatron322/vetlinks/b721914799897ac7d91ebd4b67ca487169f1e95e/public/DashboardImages/Trash.svg"
                            width={24}
                            height={24}
                            alt="Delete"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="border-b"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      ></motion.div>
      <motion.div
        className="items-center gap-3 pt-5 max-md:px-3 md:px-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <p className="clash-font text-xl font-black text-black">Upload Relevant Gallery</p>
        <div className="flex items-center gap-1">
          <p className="clash-font text-sm text-[#00000080] ">Maximum File To be Uploaded is 3</p>
        </div>
      </motion.div>
      <motion.div
        className="z-10 grid gap-5 py-5 max-md:px-3 md:grid-cols-3 md:px-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <textarea
          id="username"
          placeholder="Signalment And HIstory"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Clinical Examination"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Clinical Findings"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Differential Diagnoses"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Tentative Diagnoses"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Management"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Diagnostic Plan"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Advice to Clients"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
        <textarea
          id="username"
          placeholder="Assistants"
          className="clash-font z-10 h-[24px] min-h-[158px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
          style={{ width: "100%", height: "24px" }}
        ></textarea>
      </motion.div>
      <motion.div
        className="border-b"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      ></motion.div>
      <motion.div
        className="items-center gap-3 pt-5 max-md:px-3 md:px-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <p className="clash-font text-xl font-black text-black">Lab Result</p>
        <div className="mb-3 flex items-center gap-1">
          <p className="clash-font text-sm text-[#00000080] ">Select From Specific Lab and Fill in the results</p>
        </div>
      </motion.div>
      <motion.div
        className="w-full gap-4 pb-5  max-md:px-3 md:flex md:px-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="mb-3 w-full">
          <div className="relative my-5  flex gap-3 ">
            <div className="flex ">
              <div className="clash-font flex items-center gap-2 rounded-s-md border bg-white px-3 py-2">
                <p className="text-sm text-[#4F4F4F]">Laboratory</p>
              </div>
              <div className="flex  cursor-pointer items-center justify-between gap-2 rounded-r-md border bg-[#ffffff] px-3">
                <p className="clash-font text-sm text-[#4F4F4F]">Microbilogy</p>
                <Image
                  src="https://raw.githubusercontent.com/Dekatron322/vetlinks/81c86ade0ad897a2c063918fc20d3fc47af1eaa5/public/DashboardImages/CaretDown.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <textarea
              id="username"
              placeholder="Assistants"
              className="clash-font z-10 h-[24px] min-h-[98px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
              style={{ width: "100%", height: "24px" }}
            ></textarea>
            <div className="flex flex-col justify-between">
              <div>
                <Image src="./AuthImages/remove.svg" width={43} height={43} alt="" />
              </div>
              <Image src="./AuthImages/add.svg" width={43} height={43} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative my-5 flex gap-3 ">
            <div className="flex ">
              <div className="clash-font flex items-center gap-2 rounded-s-md border bg-white px-3 py-2">
                <p className="text-sm text-[#4F4F4F]">Laboratory</p>
              </div>
              <div className="flex  cursor-pointer items-center justify-between gap-2 rounded-r-md border bg-[#ffffff] px-3">
                <p className="clash-font text-sm text-[#4F4F4F]">Microbilogy</p>
                <Image
                  src="https://raw.githubusercontent.com/Dekatron322/vetlinks/81c86ade0ad897a2c063918fc20d3fc47af1eaa5/public/DashboardImages/CaretDown.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <textarea
              id="username"
              placeholder="Assistants"
              className="clash-font z-10 h-[24px] min-h-[98px] w-full rounded-lg bg-transparent bg-white p-2 text-base outline-none focus:outline-none"
              style={{ width: "100%", height: "24px" }}
            ></textarea>
            <div className="flex flex-col justify-between">
              <div>
                <Image src="./AuthImages/remove.svg" width={43} height={43} alt="" />
              </div>
              <Image src="./AuthImages/add.svg" width={43} height={43} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex w-full gap-4 pb-10 max-md:px-3 md:px-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <button className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#1B5EED] ">
          <p className="text-white">Uploads Cases</p>
        </button>
      </motion.div>
    </section>
  )
}

export default UploadCases
