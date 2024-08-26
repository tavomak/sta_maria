import Image from "next/image";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Templates/Layout";
import CustomLightbox from "@/components/Molecules/CustomLightbox";
import Services from "@/components/Molecules/Services";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const { t } = useTranslation(["common", "home"]);
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  });

  const closingVideoVideo = cld.video("SMBORDEAUX_qf9cos");
  const openingVideo = cld.video("STAMARIA02_g0ey5s");

  const yachts = [
    { src: "/07yachts.jpg" },
    { src: "/01yachts.jpg" },
    { src: "/02yachts.jpg" },
    { src: "/03yachts.jpg" },
    { src: "/04yachts.jpg" },
    { src: "/06yachts.jpg" },
  ];

  const experiences = [
    { src: "/04experience.jpg" },
    { src: "/01experience.jpg" },
    { src: "/02experience.jpg" },
    { src: "/03experience.jpg" },
    { src: "/06experience.jpg" },
    { src: "/07experience.jpg" },
    { src: "/08experience.jpg" },
    { src: "/09experience.jpg" },
  ];

  const icons = () => {
    const iconList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 9; i++) {
      iconList.push(`sta-ico-${i < 9 ? `0${i + 1}` : i + 1}`);
    }
    return iconList;
  };

  return (
    <Layout title={t("home:ending")} description={t("home:subtitle")}>
      <section className="flex w-full max-h-[calc(100vh-200px)] relative">
        <article className="hidden absolute top-1/2 translate-y-1/2 text-white z-20">
          <h1>{t("home:title")}</h1>
        </article>
        <div className="absolute bg-sky-950 w-full h-full z-1 opacity-10" />
        <AdvancedVideo
          cldVid={openingVideo}
          autoPlay
          // controls
          loop
          muted
          playsInline
          poster="/10experience.jpg"
        />
      </section>

      <section className="md:flex items-center bg-gradient-to-r from-cyan-600 to-sky-950">
        <div className="md:w-1/2 p-4 xl:px-36">
          <h2 className="text-white mb-6 font-semibold uppercase text-sm drop-shadow">
            {t("home:ending")}
          </h2>
          <p className="text-white mb-6">{t("home:paraphrase")}</p>
          <p className="text-white">{t("home:subtitle")}</p>
          <ul className="flex flex-wrap items-center justify-between gap-1 mt-8">
            {icons().map((icon, index) => (
              <li key={icon}>
                <Image
                  src={`/${icon}.svg`}
                  alt={t(`home:icons:${index}`)}
                  width={30}
                  height={30}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <CustomLightbox
            slides={experiences}
            primaryImage="/04experience.jpg"
            title={t("home:ExperienceTitle")}
            footerText={t("home:ExperienceFooter")}
          />
        </div>
      </section>

      <section className="md:flex items-center bg-gradient-to-r from-cyan-600 to-sky-950">
        <div className="md:w-1/2 relative">
          <AdvancedVideo
            cldVid={closingVideoVideo}
            autoPlay
            controls
            loop
            muted
            playsInline
          />
        </div>
        <div className="md:w-1/2">
          <CustomLightbox
            slides={yachts}
            primaryImage="/07yachts.jpg"
            title={t("home:YachtsTitle")}
            footerText={t("home:YachtsFooter")}
          />
        </div>
      </section>

      <Services />
    </Layout>
  );
}
