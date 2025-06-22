import { Inbox } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
  title: string
  message: string
  className?: string
}

function EmptyState({ title, message, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center h-full w-full px-4",
        className
      )}
    >
      <Inbox className="h-12 w-12 text-muted-foreground mb-4" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground max-w-sm mt-2">{message}</p>
    </div>
  )
}

export default EmptyState
