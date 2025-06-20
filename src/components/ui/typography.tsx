import React from "react"

interface Props {
  className?: string
  children: React.ReactNode
}

export const H1 = ({ className = "", children }: Props) => (
  <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight ${className}`}>
    {children}
  </h1>
)

export const H2 = ({ className = "", children }: Props) => (
  <h2 className={` scroll-m-20  text-3xl font-semibold tracking-tight ${className}`}>
    {children}
  </h2>
)

export const P = ({ className = "", children }: Props) => (
  <p className={`text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
    {children}
  </p>
)

export const Blockquote = ({ className = "", children }: Props) => (
  <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
    {children}
  </blockquote>
)
