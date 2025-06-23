import ModuleBox, { CurrentModuleInfo } from "../Modules/ModuleBox"
import { H2, P } from "../ui/typography"

interface DashboardClientProps {
  currModuleInfo: CurrentModuleInfo
}

export default function DashboardClient({ currModuleInfo }: DashboardClientProps) {
  return (
    <div id="dashboard-layout" className="h-full w-full p-6 grid grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4">
        Box 1
      </div>

      <div className="bg-gray-200 p-4">
        Box 2
      </div>
      <div id="module-update-box" className="bg-gray-200 col-span-2 p-4 flex flex-col gap-2 ">
        <H2>Last Module</H2>
        <ModuleBox
          name={currModuleInfo.name}
          description={currModuleInfo.description}
          status={currModuleInfo.status}
          currStep={currModuleInfo.currStep}
          totalSteps={currModuleInfo.totalSteps}
          startTime={currModuleInfo.startTime}
          updatedOrCompletedTime={currModuleInfo.updatedOrCompletedTime} />
      </div>
    </div>
  )
}
