
"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: any }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
