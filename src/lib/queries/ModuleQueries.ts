import { findCurrentModuleId } from "../db/module"

export async function getCurrentModuleId({ queryKey }: { queryKey: [string, string] }) {
  const [, userId] = queryKey
  return findCurrentModuleId(userId)
}