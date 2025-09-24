import type React from "react"

interface ButtonProps {
    className: string
    onClick: () => void
    children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",


}) => {
    return (
        <button className={`bg-blue-500 py-2 px-4 shadow-md hover:bg-blue-600 text-white rounded-md${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
