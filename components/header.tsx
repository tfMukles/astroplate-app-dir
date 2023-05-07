"use client";

import { useWindowSize } from "@/hooks/useWidth";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import config from "../config/config.json";
import LargeMenu from "./large-menu";
import Sidebar from "./sidebar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();
  const navBarRef = useRef<HTMLButtonElement>(null);

  if (isOpen && width && width >= 1024) {
    setOpen(false);
  }

  return (
    <header className="bg-white ">
      <div className="container">
        <div className="flex items-center pt-7 justify-between">
          <Link href={"/"}>
            <Image width={153} height={24} src={config.logo} alt="logo" />
          </Link>
          <button
            ref={navBarRef}
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.83)]"
              >
                <Sidebar setOpen={setOpen} buttonRef={navBarRef} />
              </motion.div>
            )}
          </AnimatePresence>

          {width && width >= 1024 && <LargeMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
