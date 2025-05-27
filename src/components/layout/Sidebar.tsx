// import React from 'react'
"use client";
import Link from "next/link";
import { GoStack } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Popup from "../shared/Popup";
import Image from "next/image";

type PopupContent = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [popupOpen, setPopupOpen] = useState(false);

  const [popupContent, setPopupContent] = useState<PopupContent>({
    title: "",
    description: "",
    icon: null,
  });

  const openPopup = (title: string, description: string) => {
    setPopupContent({
      title,
      description,
      icon: <BsInfoCircle className="text-blue-500 text-xl" />,
    });
    setPopupOpen(true);
  };

  return (
    <aside className="w-64 bg-white p-4 overflow-y-auto">
      <nav className="bg-slate-100 dark:bg-zinc-800 h-full rounded-md p-4 flex flex-col justify-between">
        <div>
          <Image
          alt="logo"
          src='images/Logo.svg'
          width={50}
          height={50}
          layout="responsive"
          />
          <ul className="mt-5">
            <li className="my-1">
              <Link
                href="/"
                className={`p-2 rounded flex items-center gap-2 hover:bg-accent hover:text-white ${
                  pathname === "/" ? "bg-accent text-white" : ""
                }`}
              >
                <GoStack />
                Project
              </Link>
            </li>
            <li className="my-1">
              <Link
                href="/application"
                className={`p-2 rounded flex items-center gap-2 hover:bg-accent hover:text-white ${
                  pathname === "/application" ? "bg-accent text-white" : ""
                }`}
              >
                <MdOutlineDashboard />
                Application
              </Link>
            </li>
            <li className="my-1">
              <Link
                href="/join"
                className={`p-2 rounded flex items-center gap-2 hover:bg-accent hover:text-white ${
                  pathname === "/join" ? "bg-accent text-white" : ""
                }`}
              >
                <LuHeartHandshake />
                Join
              </Link>
            </li>
            <li className="my-1">
              <Link
                href="/search"
                className={`p-2 rounded flex items-center gap-2 hover:bg-accent hover:text-white ${
                  pathname === "/search" ? "bg-accent text-white" : ""
                }`}
              >
                <IoSearchOutline />
                Search
              </Link>
            </li>
            <li className="my-1">
              <Link
                href="/contact"
                className={`p-2 rounded flex items-center gap-2 hover:bg-accent hover:text-white ${
                  pathname === "/contact" ? "bg-accent text-white" : ""
                }`}
              >
                <RiContactsLine />
                Contact
              </Link>
            </li>
            <li className="my-1">
              <button
                onClick={toggleDropdown}
                className="w-full p-2 rounded flex items-center gap-2 hover:bg-accent hover:text-white"
              >
                <AiOutlineBars />
                Dropdown
              </button>

              {isOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <button
                      onClick={() =>
                        openPopup("Option 1", "This is content for Option 1")
                      }
                      className="text-left w-full px-3 py-1 bg-white rounded hover:bg-blue-100 border text-xs"
                    >
                      Which Visual Culture
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        openPopup("Option 2", "Details about Option 2")
                      }
                      className="text-left w-full px-3 py-1 bg-white rounded hover:bg-blue-100 border text-xs"
                    >
                      Which Ecology
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        openPopup("Option 3", "More information for Option 3")
                      }
                      className="text-left w-full px-3 py-1 bg-white rounded hover:bg-blue-100 border text-xs"
                    >
                      Which Medium
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        openPopup("Option 3", "More information for Option 3")
                      }
                      className="text-left w-full px-3 py-1 bg-white rounded hover:bg-blue-100 border text-xs"
                    >
                      Which Network
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-end justify-between">
          <div className="bg-white rounded-md flex gap-2 px-2 items-center shadow-md">
            <Image
              alt="language icon"
              src="/images/uk.png"
              width={30}
              height={30}
            />
            <p className="text-sm">En</p>
          </div>
          <p className="text-xs">All right reserved</p>
        </div>
      </nav>
      {/* Popup */}
      <Popup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        title={popupContent.title}
        description={popupContent.description}
        icon={popupContent.icon}
      />
    </aside>
  );
};

export default Sidebar;
