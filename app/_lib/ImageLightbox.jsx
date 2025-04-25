'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';

export default function ImageLightbox({ src, alt, width, height, className = ''}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className}`}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
        controller={{ closeOnBackdropClick: true }}
        render={{
          buttonClose: () => (
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white text-4xl m-5 hover:opacity-50 transition-opacity">
              ✕
            </button>
          ),
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}
