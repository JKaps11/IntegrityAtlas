import { auth } from "@/lib/auth/auth";

export async function getUserId() {
  const session = await auth();
  if (!session) throw new Error("Failed to get User Session");

  const user = session.user;
  if (!user?.id) throw new Error("Failed to get User information");

  return user.id;
}
