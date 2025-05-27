'use client';

import { ReactNode } from 'react';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function Popup({ isOpen, onClose, title, description, icon }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg w-96 relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
