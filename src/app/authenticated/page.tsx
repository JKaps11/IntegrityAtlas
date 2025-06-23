import Dashboard from "@/components/Dashboard/Dashboard"
import { getUserId } from "@/lib/auth/auth-helper";
import { findCurrentModuleInfo, getModuleContentById, getNumberOfModuleSteps, getUserModuleCompletionPercentage, initUserModuleInfo } from "@/lib/db/module"

export default async function ProjectPage() {

  const userId = await getUserId();

  //create neccessary user stuff
  await initUserModuleInfo(userId)

  //find information neccesairy for dashboard

  //module completion progress
  const moduleCompletionPercentage = await getUserModuleCompletionPercentage(userId)

  //current module info
  const { moduleId, status, startedAt, updatedAt, currentStep } =
    await findCurrentModuleInfo(userId)

  const [{ name, description }, numSteps] = await Promise.all([
    getModuleContentById(moduleId),
    getNumberOfModuleSteps(moduleId),
  ])


  return <Dashboard currModuleInfo={{
    name,
    description,
    status,
    currStep: currentStep ?? 0,
    totalSteps: numSteps,
    startTime: startedAt.toISOString(),
    updatedOrCompletedTime: updatedAt?.toISOString(),
  }}
  modualCompletionPercentage={moduleCompletionPercentage}
  />
}