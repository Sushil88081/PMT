import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border-1 border-blue-600 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none  ${className}`}
      />
    </div>
  );
};
