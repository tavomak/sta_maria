import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import style from "./style.module.css";

const CustomLightbox = ({ primaryImage, slides, title, footerText }) => {
  const [open, setOpen] = useState(false);
  return (
    <figure className={`${style.card}`}>
      <button
        className="block w-full"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={primaryImage}
          alt="Sta Maria Yachts"
          width={500}
          height={500}
          className={style.cardImage}
        />
        <figcaption className={`${style.cardCaption}`}>
          <main className={style.cardMain}>
            <p className="font-semibold">{title}</p>
          </main>
          {slides?.length > 1 &&
            slides.map((slide) => (
              <span
                key={slide.src}
                className="h-3 w-3 rounded-full bg-white mx-2 opacity-80 drop-shadow hidden"
              />
            ))}
          <footer className={style.cardFooter}>{footerText}</footer>
        </figcaption>
      </button>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </figure>
  );
};

export default CustomLightbox;
