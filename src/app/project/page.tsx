'use client'

import { useConfigStore } from "@/lib/stores"
import { useEffect } from "react"

export default function Dashboard() {
  const setAppMode = useConfigStore((state) => state.setAppMode)

  useEffect(() => {
    setAppMode("projectHome")
  }, [setAppMode]) // Depend on the setter function

  return <div id="dashboard-layout" className="h-full w-full p-6 grid grid grid-cols-2 gap-4">
    <div className="bg-gray-200 p-4">Box 1</div>
    <div className="bg-gray-200 p-4">Box 2</div>
    <div className="col-span-2 bg-gray-300 p-4">Box 3</div>
  </div>
}
