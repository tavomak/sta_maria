import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Templates/Layout";

const Team = () => {
  const { t } = useTranslation(["team"]);
  return (
    <Layout title={t("team:title")} description={t("team:description")}>
      <section className="relative min-h-[calc(100vh-300px)]">
        <Image
          src="/01experience.jpg"
          alt="Sta Maria Yachts"
          fill
          objectFit="cover"
          objectPosition="bottom"
        />
        <div className="overlay absolute w-full h-full bg-indigo-950 opacity-50" />
        <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl w-full text-center">
          {t("team:pageTitle")}
        </h1>
      </section>
      <section className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-center lg:gap-4 items-center relative lg:-top-14">
        <div className="w-full lg:w-1/4 drop-shadow mb-4 lg:mb-0">
          <Image
            src="/01_profile.jpg"
            alt="Sta Maria Yachts"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full lg:w-2/4">
          <h2 className="text-3xl font-medium uppercase mb-4">
            {t("team:jorgeTitle")}
          </h2>
          <p>{t("team:jorgeDescription")}</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-center  lg:gap-4 items-center relative lg:-top-24">
        <div className="w-full lg:w-1/4 drop-shadow mb-4 lg:mb-0 lg:order-last">
          <Image
            src="/02_profile.jpg"
            alt="Sta Maria Yachts"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full lg:w-2/4 ">
          <h2 className="text-3xl font-medium uppercase mb-4">
            {t("team:fernandoTitle")}
          </h2>
          <p>{t("team:fernandoDescription")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
