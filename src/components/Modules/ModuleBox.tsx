'use client'

import { useQuery } from '@tanstack/react-query'
import { P } from '../ui/typography'
import { Progress } from '../ui/progress'
import { getCurrentModule } from '@/lib/queries/ModuleQueries'

interface Props {
  userId: string
}

export default function ModuleBox({ userId }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['currentModule', userId],
    queryFn: getCurrentModule,
  })

  if (isLoading) return <P>Loading...</P>
  if (isError) return <P>Something went wrong.</P>

  const moduleId = data?.moduleId ?? 0

  return (
    <>
      <P>Current Module: {moduleId}</P>
      <Progress defaultValue={moduleId === 0 ? 0 : undefined} />
    </>
  )
}
