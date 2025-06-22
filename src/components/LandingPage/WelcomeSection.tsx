import SignInButton from "../auth/AuthButtons";
import { Button } from "../ui/button";
import { H1, P } from "../ui/typography";

export default function WelcomeSection(){
    return <section id="welcome-section" className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <H1>Welcome to Value Organizer</H1>
      <P>Scroll down to see learn more!</P>
      <SignInButton/>
    </section>
}