import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query"
import DashboardClient from "@/components/Dashboard/DashboardClient"
import { getCurrentModule } from "@/lib/queries/ModuleQueries"
import { ensureUserModuleInfo } from "@/lib/db/module"

export default async function ProjectPage() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return <p>Please sign in</p>

    const userId = session.user.id

    // ✅ Ensure user's module progress rows are seeded
    await ensureUserModuleInfo(userId)

    // ✅ Prefetch + hydrate
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
      queryKey: ['currentModule', userId],
      queryFn: () => getCurrentModule({ queryKey: ['currentModule', userId] }),
    })
    const dehydratedState = dehydrate(queryClient)

    // ✅ Confirm user exists
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return redirect("/")

    return (
      <HydrationBoundary state={dehydratedState}>
        <DashboardClient userId={userId} />
      </HydrationBoundary>
    )
  } catch (error) {
    console.error("Failed to load project page:", error)
    return <p>Something went wrong while loading your project.</p>
  }
}
