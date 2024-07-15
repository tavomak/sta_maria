import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { Inter } from "next/font/google";
import Navbar from "@/components/Molecules/Navbar";
import Footer from "@/components/Molecules/Footer";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, title, description }) => {
  const hostname = typeof window !== "undefined" ? window.location.href : "";
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{`${title} | ${t("site_name")}`}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={`${description || t("site_name")}`} />
        <link rel="canonical" href={hostname} />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="hostname" />
        <meta property="og:site_name" content={t("site_name")} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar className={inter.className} />
      <main className={`min-h-screen ${inter.className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
