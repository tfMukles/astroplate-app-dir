import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BiSearch, BiSun } from "react-icons/bi";
import menu from "../config/menu.json";

const LargeMenu = () => {
  const [theme, toggletheme] = useState(true);

  return (
    <div className="flex items-center justify-between max-w-[70%] flex-1">
      <ul className="hidden lg:flex lg:space-x-8 xl:space-x-11">
        {menu.navItems.map((item, i) =>
          item.subItems?.length ? (
            <li className="relative group" key={i}>
              <Link
                className="text-[16px] leading-[26px] font-medium text-heading flex items-center"
                href={item.url}
              >
                Resources
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </Link>

              <ul className="bg-white shadow-sm p-3 absolute top-8 left-0 w-full opacity-0 translate-y-3 invisible group-hover:translate-y-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 space-y-3">
                {item.subItems.map((subItem, i) => (
                  <li key={i}>
                    <Link
                      className="font-medium cursor-pointer"
                      href={subItem.url}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={i}>
              <Link
                className="text-[16px] leading-[26px] font-medium text-heading"
                href={"/"}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      <ul className="hidden lg:flex items-center">
        <li className="border-r border-r-[#EEE] border-indigo-200 pr-6">
          <Link href={"/"}>
            <BiSearch className="w-5 h-5" />
          </Link>
        </li>

        <li className="ml-5 mr-7">
          <button
            onClick={() => toggletheme(!theme)}
            className={`${
              theme ? "justify-start" : "justify-end"
            } flex w-[41px] h-4 rounded-full bg-[#E9E9E9]`}
          >
            <motion.div
              layout
              className="bg-black rounded-full w-6 h-6 flex items-center justify-center -mt-[5px]	"
            >
              <BiSun className="w-5 h-5 text-white" />
            </motion.div>
          </button>
        </li>

        <li>
          <button className="btn-secondary">customer login</button>
        </li>
      </ul>
    </div>
  );
};

export default LargeMenu;
