import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "light" | undefined;
}

export const Input: React.FC<InputProps> = ({ variant, className = "", ...props }) => {

  return (
    <input
      className={`block w-full rounded-md border-b-2 border-b-gray-500 bg-transparent px-3 py-2 text-gray-900 ${variant === "default" ? "placeholder-white" : "placeholder-black"} text-2xl focus:outline-[#74A5FF] ${className}`}
      {...props}
    />
  )
}
