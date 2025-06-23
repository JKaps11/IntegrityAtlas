import { P } from '../ui/typography'
import { Progress } from '../ui/progress'
import { ModuleStatus } from '@/generated/prisma'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Info, Clock, CheckCircle, CircleDot } from 'lucide-react'

export interface CurrentModuleInfo {
  name: string
  description: string
  status: ModuleStatus
  currStep: number
  totalSteps: number
  startTime: string
  updatedOrCompletedTime?: string
}

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

  const value =
    totalSteps > 0 ? Math.min(100, Math.max(0, (currStep / totalSteps) * 100)) : 0

  const renderStatusIcon = () => {
    switch (status) {
      case ModuleStatus.NOT_STARTED:
        return <CircleDot className="text-muted-foreground" />
      case ModuleStatus.IN_PROGRESS:
        return <Clock className="text-yellow-500" />
      case ModuleStatus.COMPLETED:
        return <CheckCircle className="text-green-600" />
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
    </div>
  )
}
