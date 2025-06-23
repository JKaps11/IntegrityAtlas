import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ModuleContent, ModuleStatus, UserModuleInfo } from "@/generated/prisma";
import { cache } from "react";

//=======================[unstable caching]============================
function createEnsureUserModuleInfo(userId: string) {
  return unstable_cache(
    async () => {
      const moduleCount = await prisma.moduleContent.count()
      if (moduleCount === 0) return

      await prisma.userModuleInfo.createMany({
        data: Array.from({ length: moduleCount }, (_, i) => ({
          userId,
          moduleId: i + 1,
          status: ModuleStatus.NOT_STARTED,
        })),
        skipDuplicates: true,
      })
    },
    [userId],
    { tags: [`userModuleInit:${userId}`] }
  )
}

export async function initUserModuleInfo(userId: string): Promise<void> {
  const ensure = createEnsureUserModuleInfo(userId)
  await ensure()
}

//=======================[regular caching]============================
export const getUserModuleProgress = cache(async (userId: string): Promise<UserModuleInfo[]> => {
  return prisma.userModuleInfo.findMany({ where: { userId } })
})

export const findCurrentModuleInfo = cache(async (
  userId: string,
): Promise<UserModuleInfo> => {
  try {
    return await prisma.userModuleInfo.findFirstOrThrow({
      where: { userId, status: ModuleStatus.IN_PROGRESS },
      orderBy: { moduleId: "asc" },
    });
  } catch {
    return await prisma.userModuleInfo.findFirstOrThrow({
      where: { userId, status: ModuleStatus.NOT_STARTED },
      orderBy: { moduleId: "asc" },
    });
  }
});
//=======================[no caching]============================
export async function getModuleContentById(id: number, withSteps = false): Promise<ModuleContent> {
  return prisma.moduleContent.findUniqueOrThrow({
    where: { id },
    include: withSteps ? { steps: true } : undefined,
  })
}

export async function getNumberOfModuleSteps(moduleId: number): Promise<number> {
  return prisma.moduleStep.count({
    where: { moduleId },
  });
}