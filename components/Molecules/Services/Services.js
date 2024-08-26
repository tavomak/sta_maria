import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Button from "@/components/Atoms/Button";

const Services = () => {
  const { t } = useTranslation("common");
  const services = t("services", {}, { returnObjects: true });
  return (
    <section className="bg-white pb-24">
      <div className="container mt-10 mx-auto max-w-4xl">
        <div className="">
          <div className="mx-auto max-w-lg text-center ">
            <h2 className="text-sky-900 mb-6 font-semibold uppercase text-sm drop-shadow">
              {t("servicesHeading")}
            </h2>
          </div>

          <div className="md:flex w-full justify-between lg:gap-4 flex-wrap">
            {Object.values(services).map((item) => (
              <Button
                key={item.title}
                className="w-full md:w-1/2 lg:w-1/6 text-start block rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-700 border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:shadow-lg"
                href="#"
              >
                <span
                  data-test={item.title}
                  className="inline-block rounded-lg  p-3"
                >
                  <Image
                    src={`sta-ico-${item.icon}.svg`}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </span>

                <h2 className="mt-2 text-white">{item.title}</h2>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
