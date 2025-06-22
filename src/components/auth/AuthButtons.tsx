"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function SignInButton() {
  const { data: session } = useSession();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = () => {
    setIsSigningIn(true);
    signIn("google", { callbackUrl: "/project" });
  };

  // If already signed in, show “Continue as …”
  if (session) {
    return <Button onClick={handleSignIn}>Continue as {session.user.email}</Button>;
  }

  return (
    <Button onClick={handleSignIn} disabled={isSigningIn}>
      {isSigningIn ? "Signing in…" : "Sign in"}
    </Button>
  );
}

export function SignOutButton() {
  const { data: session } = useSession();
  const isSignedIn = !!session;

  return (
    <Button
      onClick={() => signOut( { callbackUrl: "/" })}
      disabled={!isSignedIn}
    >
      Sign out
    </Button>
  );
}