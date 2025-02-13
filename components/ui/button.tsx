import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "outlineBlue"
  size?: "sm" | "md" | "lg"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-gray-300 hover:bg-red-500 rounded-tr-[30px] rounded-b-[30px] text-white",
    outlineBlue: "bg-[#1A73E8] border border-gray-300 hover:bg-blue-400 rounded-tr-[30px] rounded-b-[30px] text-white"
  }

  const sizes = {
    sm: "h-8 px-3 text-sm rounded-tl-md rounded-tr-md rounded-bl-md",
    md: "h-10 px-4 text-base rounded-tl-lg rounded-tr-lg rounded-bl-lg",
    lg: "h-12 px-6 text-lg ",
  }

  const variantStyles = variants[variant]
  const sizeStyles = sizes[size]

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

