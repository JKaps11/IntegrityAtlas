import { prisma } from "@/lib/prisma"
import { ModuleStatus } from "@/generated/prisma"

export async function ensureUserModuleInfo(userId: string) {
  const moduleCount = await prisma.moduleContent.count()

  if (moduleCount === 0) return

  const data = Array.from({ length: moduleCount }, (_, i) => ({
    userId,
    moduleId: i + 1,
    status: ModuleStatus.NOT_STARTED,
  }))

  await prisma.userModuleInfo.createMany({
    data,
    skipDuplicates: true,
  })
}

export async function getUserModuleProgress(userId: string) {
  return prisma.userModuleInfo.findMany({ where: { userId } })
}

export async function findCurrentModuleId(userId: string) {
  const inProgress = await prisma.userModuleInfo.findFirst({
    where: { userId, status: ModuleStatus.IN_PROGRESS },
    orderBy: { moduleId: "asc" },
    select: { moduleId: true },
  })

  if (inProgress) return inProgress

  const notStarted = await prisma.userModuleInfo.findFirst({
    where: { userId, status: ModuleStatus.NOT_STARTED },
    orderBy: { moduleId: "asc" },
    select: { moduleId: true },
  })

  return notStarted ?? { moduleId: 0 }
}

export async function getModuleContentById(id: number, withSteps = false) {
  return prisma.moduleContent.findUnique({
    where: { id },
    include: withSteps ? { steps: true } : undefined,
  })
}

