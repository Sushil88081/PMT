import React, { useState } from "react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "right";
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = "right",
}) => {
  const [width, setWidth] = useState(400); // default width (px)
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => setIsResizing(true);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    if (position === "right") {
      setWidth(window.innerWidth - e.clientX);
    } else {
      setWidth(e.clientX);
    }
  };

  const handleMouseUp = () => setIsResizing(false);

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        style={{ width }}
        className={`fixed top-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
        ${position === "right" ? "right-0" : "left-0"}
        ${isOpen ? "translate-x-0" : position === "right" ? "translate-x-full" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>

        {/* Resize handle */}
        <div
          onMouseDown={handleMouseDown}
          className={`absolute top-0 h-full w-2 cursor-col-resize bg-gray-200 ${
            position === "right" ? "left-0" : "right-0"
          }`}
        />
      </div>
    </>
  );
};
