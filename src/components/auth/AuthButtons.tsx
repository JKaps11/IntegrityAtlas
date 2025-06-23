import { signIn, signOut } from "@/lib/auth/auth";
import { Button } from "../ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", {redirectTo: '/authenticated'})
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  )
} 

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" })
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}