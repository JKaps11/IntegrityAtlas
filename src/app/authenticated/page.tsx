import DashboardClient from "@/components/Dashboard/DashboardClient"
import { getUserId } from "@/lib/auth/auth-helper";
import { findCurrentModuleInfo, getModuleContentById, getNumberOfModuleSteps, initUserModuleInfo } from "@/lib/db/module"

export default async function ProjectPage() {

  const userId = await getUserId();

  //create neccessary user stuff
  await initUserModuleInfo(userId)

  //find information neccesairy for dashboard
  //module info
  const { moduleId, status, startedAt, updatedAt, currentStep } =
    await findCurrentModuleInfo(userId)

  const [{ name, description }, numSteps] = await Promise.all([
    getModuleContentById(moduleId),
    getNumberOfModuleSteps(moduleId),
  ])


  return <DashboardClient currModuleInfo={{
    name,
    description,
    status,
    currStep: currentStep ?? 0,
    totalSteps: numSteps,
    startTime: startedAt.toISOString(),
    updatedOrCompletedTime: updatedAt?.toISOString(),
  }}
  />
}