"use client"

import Image from "next/image"
import { useState } from "react"

interface InteractiveImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function InteractiveImage({ src, alt, width, height, className = "" }: InteractiveImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden transition-transform duration-300 ${
        isPressed ? "scale-95" : isHovered ? "scale-105" : "scale-100"
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-all duration-500 ${
          isHovered || isPressed ? "brightness-110 contrast-110" : "brightness-100 contrast-100"
        } object-contain w-full h-auto`}
        priority={alt.includes("Netflix") || alt.includes("Don Varku")}
      />
      {(isHovered || isPressed) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
