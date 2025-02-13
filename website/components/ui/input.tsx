import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`block w-full rounded-md border-b-2 border-b-white bg-transparent px-3 py-2 text-gray-900 placeholder-white text-2xl focus:outline-[#74A5FF] ${className}`}
      {...props}
    />
  )
}

