import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

const CustomLightbox = ({ primaryImage, slides, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
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
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute top-4 left-4 flex items-center justify-center">
          <p className="text-white text-balance uppercase font-semibold drop-shadow">
            {title}
          </p>
          {slides?.length > 1 &&
            slides.map((slide) => (
              <span
                key={slide.src}
                className="h-3 w-3 rounded-full bg-white mx-2 opacity-80 drop-shadow"
              />
            ))}
        </div>
      </button>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </div>
  );
};

export default CustomLightbox;
