'use client'

import { useConfigStore } from "@/lib/stores"
import { useEffect } from "react"
import ModuleBox from "../Modules/ModuleBox"

interface DashboardClientProps {
  userId: string
}

export default function DashboardClient({ userId }: DashboardClientProps) {
  const setAppMode = useConfigStore((state) => state.setAppMode)

  useEffect(() => {
    setAppMode("projectHome")
  }, [setAppMode])

  return (
    <div id="dashboard-layout" className="h-full w-full p-6 grid grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4">
        Box 1
      </div>

      <div className="bg-gray-200 p-4">
        Box 2
      </div>

      <div id="module-update-box" className="bg-gray-200 col-span-2 p-4">
        <ModuleBox userId={userId} />
      </div>
    </div>
  )
}
