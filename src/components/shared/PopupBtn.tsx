"use client";

import { ReactNode, useState } from "react";
import Popup from "./Popup";

type PopupButtonProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function PopupBtn({
  icon,
  title,
  description,
}: PopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded hover:bg-blue-700 max-w-max border-gray-300 border text-sm"
      >
        {icon}
        {title}
      </button>

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        icon={icon}
      />
    </>
  );
}
