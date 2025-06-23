import ModuleBox, { CurrentModuleInfo } from "../Modules/ModuleBox"
import ProgressCircle from "../Modules/ProgressCircle"
import { H3} from "../ui/typography"

interface DashboardClientProps {
  currModuleInfo: CurrentModuleInfo

  /** This is a number out of 100*/
  modualCompletionPercentage: number
}

export default function Dashboard({ currModuleInfo, modualCompletionPercentage }: DashboardClientProps) {
  return (
    <div id="dashboard-layout" className="h-full w-full p-6 grid grid-cols-6 gap-4">
      <div id="user-section" className="p-4 col-span-4 flex flex-col h-full">
        <div id="user-profile-box" className="bg-gray-200 h/[1/2]">
          <H3>Welcome to the Dashboard</H3>
        </div>
        <div id="values-box" className="bg-gray-200 h/[1/2]">
          <H3>Your Values</H3>
        </div>
      </div>
      <div id="task-box" className="bg-gray-200 p-4 col-span-2">
        <H3>Upcoming Tasks</H3>
      </div>
      <div id="module-section" className="col-span-6 p-4" >
         <div id="total-module-overview-box" className="bg-gray-200 col-span-2 p-4 flex flex-col gap-2 ">
          <H3>Modules Total Progress</H3>
          <ProgressCircle completionPercentage={modualCompletionPercentage}/>
        </div>
        <div id="current-module-box" className="bg-gray-200 col-span-4 p-4 flex flex-col gap-2 ">
          <H3>Last Module</H3>
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
    </div>
  )
}
