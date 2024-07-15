import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import LangSwitch from "@/components/Atoms/LangSwitch";

const Navbar = ({ className }) => {
  const { t } = useTranslation("common");
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
              width={180}
              height={32}
            />
          </a>
        </div>
        <div>
          <h1 className="hidden md:block text-white font-medium text-2xl">
            {t("nav_homepage_title")}
          </h1>
        </div>
        <div className="text-white px-4">
          <LangSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
