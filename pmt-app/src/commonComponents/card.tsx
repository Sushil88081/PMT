import React from "react";

interface CardProps {
  title?: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  className = "",
  children,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 border border-gray-200 ${className}`}
    >
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {content && <p className="text-gray-600 mb-2">{content}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};
