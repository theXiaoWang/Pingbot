"use client"

import { AnchorHTMLAttributes } from "react"
import Link from "next/link"

interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export const ShinyButton = ({
  className,
  children,
  href,
  ...props
}: ShinyButtonProps) => {
  return (
    <Link
      href={href ?? "#"}
      className={`
        relative inline-block px-10 py-3 overflow-hidden
        text-white font-semibold text-lg
        bg-gradient-to-r from-[#587cf2] to-[#9f40ed]
        rounded-xl cursor-pointer
        after:content-[''] after:absolute 
        after:top-[-50%] after:right-[-50%] 
        after:bottom-[-50%] after:left-[-50%]
        after:bg-gradient-to-b 
        after:from-[rgba(229,172,142,0)]
        after:via-white/50 
        after:to-[rgba(229,172,142,0)]
        after:rotate-[60deg] after:translate-x-[-5em] after:translate-y-[7.5em]
        hover:after:animate-[sheen_1s_ease-in-out_forwards]
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  )
}
