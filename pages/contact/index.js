import { useForm } from "react-hook-form";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Templates/Layout";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation("common");

  const onSubmit = async (form) => {
    console.log(form);
  };
  return (
    <Layout title={t("contactTitle")} description={t("contactDescription")}>
      <section className="relative min-h-[500px]">
        <Image
          src="/06experience.jpg"
          alt="Sta Maria Yachts"
          fill
          objectFit="cover"
          objectPosition="bottom"
        />
        <div className="overlay absolute w-full h-full bg-indigo-950 opacity-50" />
        <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl w-full text-center">
          {t("contactTitle")}
        </h1>
      </section>
      <section className="mx-auto max-w-xl rounded-lg border border-gray-200 bg-white px-8 py-4 shadow-sm transition hover:shadow-lg relative lg:-top-28">
        <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            placeholder={t("contactName")}
            rules={{
              required: t("contactNameRequired"),
            }}
            errors={errors.name}
            register={register}
          />
          <Input
            type="email"
            name="email"
            placeholder={t("contactEmail")}
            rules={{
              required: t("contactEmailRequired"),
            }}
            register={register}
            errors={errors.email}
          />
          <label
            htmlFor="message"
            className="rounded relative my-4 block border border-gray-200 shadow-sm pt-4 px-4"
          >
            <textarea
              className="w-full text-sm focus:outline-none focus-visible:outline-none"
              rows="8"
              id="message"
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Mensaje
            </span>
          </label>
          <Button type="submit">{t("contactSubmit")}</Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
