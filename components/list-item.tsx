"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface ListProps {
  label: string;
  url: string;
  subItems: { label: string; url: string }[];
}

const ListItem = ({ label, url, subItems }: ListProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <motion.li layout>
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center cursor-pointer  "
      >
        <span className="text-lg font-semibold leading-[26px]">{label}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full mt-4 space-y-3 ml-4"
          >
            {subItems.map((item, i) => (
              <li key={i}>
                <Link
                  className="text-lg font-semibold leading-[26px]"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default ListItem;
