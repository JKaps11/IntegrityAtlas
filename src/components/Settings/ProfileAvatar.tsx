import { auth } from "@/lib/auth/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { User } from "lucide-react"

export async function ProfileAvatar() {
  const session = await auth()
  const imageUrl = session?.user?.image
  return (
    <Avatar>
      {imageUrl ? (
        <AvatarImage src={imageUrl} alt="User profile picture" className="rounded-full w-10 h-10" />
      ) : (
        <AvatarFallback>
          <User className="w-10 h-10 text-muted-background" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
