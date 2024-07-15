import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Templates/Layout";

export default function Home() {
  const { t } = useTranslation(["common", "home"]);
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  });

  const openingVideo = cld.video("SMBORDEAUX_qf9cos");

  return (
    <Layout title={t("home:ending")} description={t("home:subtitle")}>
      <section className="w-full relative overflow-hidden">
        {/* <article className="absolute top-1/2 translate-y-1/2 text-white z-20">
          <h1>{t("home:title")}</h1>
        </article> */}
        {/* <div className="absolute bg-sky-950 w-full h-screen z-10 opacity-20" /> */}
        <AdvancedVideo
          cldVid={openingVideo}
          autoPlay
          // controls
          loop
          muted
          playsInline
          poster="/DSC07121.jpg"
        />
      </section>

      <section className="md:flex items-center bg-gradient-to-r from-cyan-600 to-sky-950">
        <div className="md:w-1/2 p-4 xl:px-32">
          <h2 className="text-white text-xl mb-6 font-bold">
            {t("home:ending")}
          </h2>
          <p className="text-white mb-6">{t("home:paraphrase")}</p>
          <p className="text-white">{t("home:subtitle")}</p>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="/11SESSION.jpg"
            alt="Unsplash"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      <section className="md:flex items-center bg-gradient-to-r from-cyan-600 to-sky-950">
        <div className="md:w-1/2">
          <Image
            src="/07SESSION.jpg"
            alt="Unsplash"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="/DSC07116.jpg"
            alt="Unsplash"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>
    </Layout>
  );
}
