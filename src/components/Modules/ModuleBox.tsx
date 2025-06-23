import { P } from '../ui/typography'
import { Progress } from '../ui/progress'
import { ModuleStatus } from '@/generated/prisma'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Info, Clock, CheckCircle, CircleDot } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

export interface CurrentModuleInfo {
  name: string
  description: string
  status: ModuleStatus
  currStep: number
  totalSteps: number
  startTime: string
  updatedOrCompletedTime?: string
}

//TODO add module id here so we know which module to go to
export default function ModuleBox({
  name,
  description,
  status,
  currStep,
  totalSteps,
  startTime,
  updatedOrCompletedTime,
}: CurrentModuleInfo) {
  const getStatusLabel = (): string => {
    if (status === ModuleStatus.NOT_STARTED) return ''
    if (status === ModuleStatus.IN_PROGRESS) return `Updated: ${updatedOrCompletedTime}`
    return `Completed: ${updatedOrCompletedTime}`
  }

  // may want to move this math elsewhere i dont know
  const value =
    totalSteps > 0 ? Math.min(100, Math.max(0, (currStep / totalSteps) * 100)) : 0

  const renderStatusIcon = () => {
    switch (status) {
      case ModuleStatus.NOT_STARTED:
        // TODO: Not sure if i like this icon for not_started
        return <CircleDot className="text-muted-foreground" />
      case ModuleStatus.IN_PROGRESS:
        return <Clock className="text-yellow-500" />
      case ModuleStatus.COMPLETED:
        return <CheckCircle className="text-green-600" />
    }
  }

  //TODO: Do tthese functions that get called in tsx create rerenders (prob not in react but should learn best practce)
  const getButtonText = () => {
     switch (status) {
      case ModuleStatus.NOT_STARTED:
        return "Start"
      case ModuleStatus.IN_PROGRESS:
        return "Continue"
      case ModuleStatus.COMPLETED:
        return "Review"
    }
  }

  return (
    <div id="module-box" className="flex gap-2 items-center">
        <P className="font-semibold">{name}</P>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>{description}</TooltipContent>
        </Tooltip>
        {renderStatusIcon()}
        <P className="text-sm text-muted-foreground">Started: {startTime}</P>
      
      {getStatusLabel() && (
        <P className="text-sm text-muted-foreground">{getStatusLabel()}</P>
      )}

      <Progress value={value} />
      <Link href={`/authenticated/Modules/${moduleId}/Step/${currStep}`}><Button>{getButtonText()}</Button></Link>
    </div>
  )
}
