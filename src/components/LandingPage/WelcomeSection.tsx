import { auth } from "@/lib/auth/auth";
import SignInButton from "../auth/AuthButtons";
import { H1, P } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";

export default function WelcomeSection() {
  const session = auth()
  return <section id="welcome-section" className="w-full h-screen flex flex-col justify-center items-center gap-2">
    <H1>Welcome to Value Organizer</H1>
    <P>Scroll down to see learn more!</P>
    {!session ? <SignInButton /> : <Link href={'/authenticated'}><Button>Log in</Button></Link>}
    </section>
}