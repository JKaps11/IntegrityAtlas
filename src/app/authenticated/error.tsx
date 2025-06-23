'use client'
import ErrorsPage from "@/components/common/ErrorPage"

function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}){
    return <ErrorsPage title="Dashboard Error" message={error.message}/>
}
