import Image from "next/image";
import Link from "next/link";
import config from "../config/config.json";
import menu from "../config/menu.json";
import socialIcons from "../config/social.json";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6]">
      <div className="container">
        <div className="pt-16 max-lg:flex-col pb-8 flex  max-w-[1058px] m-auto items-center justify-center lg:justify-between">
          <div className="py-4 px-3">
            <Image width={153} height={24} src={config.logo} alt="logo" />
          </div>
          <ul className="px-3 flex-wrap flex items-center justify-center py-3  space-x-4">
            {menu.footerItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className="capitalize text-lg block leading-[28px] py-1 px-[6px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="px-3 flex space-x-4 py-3">
            {socialIcons.map((icon, i) => (
              <li key={i}>
                <a
                  className="bg-heading w-8 h-8 rounded text-white flex items-center justify-center"
                  href={icon.url}
                  target="_blank"
                >
                  <Image width={32} height={32} src={icon.icon} alt="icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center  text-[#999] text-lg capitalize border-t border-t-[#EAEAEA] py-7">
        {menu.copyWriteText}
      </p>
    </footer>
  );
};

export default Footer;
