import type React from "react"

interface TelegramIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function TelegramIcon({ className, ...props }: TelegramIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor" // Use currentColor to allow Tailwind text color classes
      strokeWidth="1.5"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 3.75l-19.5 7.5 7.5 2.25 2.25 7.5 9.75-17.25z" />
    </svg>
  )
}
