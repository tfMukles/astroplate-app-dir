"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";
import { BiSearch, BiSun } from "react-icons/bi";
import menu from "../config/menu.json";
import ListItem from "./list-item";

interface Props {
  setOpen: any;
  buttonRef: RefObject<HTMLButtonElement>;
}

const Sidebar = ({ setOpen, buttonRef }: Props) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClose = ({ target }: MouseEvent) => {
    if (
      sidebarRef.current &&
      buttonRef.current &&
      !buttonRef.current.contains(target as Node) &&
      !sidebarRef.current.contains(target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => {
      return window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2 }}
      className="absolute max-w-[330px] top-0 space-y-5 right-0 w-full h-full p-5 bg-white shadow-lg z-50"
      ref={sidebarRef}
    >
      <div className="flex justify-between">
        <button className="bg-black rounded-full p-1 shadow-sm w-8 h-8 justify-center flex items-center">
          <BiSun className="w-5 h-5 text-white" />
        </button>
        <button onClick={() => setOpen(false)} className="text-whtie">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>

      <div className="flex border items-center px-2 py-1 border-black rounded-2xl overflow-hidden">
        <BiSearch className="w-5 h-5" />
        <input
          className="pl-1 outline-none flex-1"
          type="search"
          name="search"
        />
      </div>

      <ul className="space-y-5">
        {menu.navItems.map((item, i) =>
          item.subItems?.length ? (
            <ListItem
              key={i}
              label={item.label}
              url="jsdlkfjlad"
              subItems={item.subItems}
            />
          ) : (
            <li key={i} className="border-b border-b-[#EAEAEA] pb-2">
              <Link
                className="text-lg font-semibold leading-[26px]"
                href={item.url}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
