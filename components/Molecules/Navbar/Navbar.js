import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import LangSwitch from "@/components/Atoms/LangSwitch";
import Hamburger from "../Hamburger";

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("common");
  return (
    <header className="flex z-50 w-full py-4 bg-gradient-to-b from-sky-950 to-sky-900">
      <nav
        className={`relative max-w-7xl w-full flex mx-auto items-center justify-between ${className}`}
        aria-label="Global"
      >
        <div className="px-2">
          <Link href="/">
            <Image
              src="/sta_maria_white.svg"
              alt="Logo"
              width={140}
              height={64.5}
            />
          </Link>
        </div>
        <div className="text-white px-4 flex items-center gap-2">
          <Hamburger open={open} setOpen={setOpen} />
          <LangSwitch />
          <div
            className={`flex items-center justify-center fixed w-screen h-screen left-0 top-0 bg-sky-500 z-10 transition-all bg-gradient-to-b from-sky-950 to-sky-900 ${open ? "left-0" : "left-[-120%]"}`}
          >
            <ul className="flex flex-col  gap-4">
              <li>
                <Link href="/">
                  <h2 className="flex items-center gap-2">
                    <span>
                      <Image
                        src="/sta-ico-01.svg"
                        alt="Inicio"
                        width={30}
                        height={30}
                      />
                    </span>
                    <span className="text-white text-balance uppercase font-semibold drop-shadow">
                      {t("nav_home_title")}
                    </span>
                  </h2>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <h2 className="flex items-center gap-2">
                    <span>
                      <Image
                        src="/sta-ico-02.svg"
                        alt="Inicio"
                        width={30}
                        height={30}
                      />
                    </span>
                    <span className="text-white text-balance uppercase font-semibold drop-shadow">
                      {t("nav_team_title")}
                    </span>
                  </h2>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <h2 className="flex items-center gap-2">
                    <span>
                      <Image
                        src="/sta-ico-10.svg"
                        alt="Inicio"
                        width={30}
                        height={30}
                      />
                    </span>
                    <span className="text-white text-balance uppercase font-semibold drop-shadow">
                      {t("nav_contact_title")}
                    </span>
                  </h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
