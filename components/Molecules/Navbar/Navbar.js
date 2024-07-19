import Image from "next/image";
import LangSwitch from "@/components/Atoms/LangSwitch";

const Navbar = ({ className }) => {
  return (
    <header className="flex z-50 w-full py-4 bg-gradient-to-b from-sky-950 to-sky-900">
      <nav
        className={`relative max-w-7xl w-full flex mx-auto items-center justify-between ${className}`}
        aria-label="Global"
      >
        <div className="px-2">
          <a className="" href="!#" aria-label="Preline">
            <Image
              src="/sta_maria_white.svg"
              alt="Logo"
              width={140}
              height={64.5}
            />
          </a>
        </div>
        <div className="text-white px-4">
          <LangSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
