"use client"
import DashboardNav from "components/Navbar/DashboardNav"

import "aos/dist/aos.css"
import DoctorsCard from "components/Dashboard/DoctorsCard"

interface Patient {
  id: string
  name: string
  gender: string
  dob: string
  appointments: {
    id: number
    doctor: string
    detail: string
    pub_date: string
  }[]
  // Add other fields as needed
}

interface Department {
  name: string
}

interface Staff {
  username: string
}

export default function Doctors() {
  return (
    <section className="h-full w-full">
      <div className="flex min-h-screen w-full">
        <div className="flex  w-full flex-col">
          <DashboardNav />
          <div className="flex ">
            <div className="flex w-full gap-6  max-md:flex-col  max-md:px-0 md:mb-16">
              <div className="w-full">
                <DoctorsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
