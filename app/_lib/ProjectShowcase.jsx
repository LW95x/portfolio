import Link from "next/link";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import RevealY from "./RevealY";
import ImageLightbox from "./ImageLightbox";

// Window-style frame shared by screenshots and code panels
export function WindowFrame({ caption, children }) {
  return (
    <figure className="max-w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/60 transition-transform duration-300 hover:scale-[1.02]">
      <figcaption className="flex h-7 w-0 min-w-full items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        {caption && (
          <span className="ml-2 truncate text-[11px] tracking-wide text-zinc-500">
            {caption}
          </span>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

export default function ProjectShowcase({
  category,
  title,
  links = [],
  description,
  highlights = [],
  stack = [],
  images = [],
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] short:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] gap-5 short:gap-6 lg:gap-10 xl:gap-14 items-center">
      <RevealY>
        <article className="glass-panel flex flex-col overflow-hidden rounded-2xl max-h-[52vh] lg:max-h-[calc(100vh-10rem)] short:max-h-[calc(100vh-9.5rem)]">
          <div className="thin-scrollbar min-h-0 overflow-y-auto p-6 sm:p-8 short:p-5 lg:p-7 xl:p-10">
            {category && (
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300/90">
                {category}
              </p>
            )}
            <h2 className="mt-2 text-2xl sm:text-3xl short:text-2xl lg:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h2>

            {links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {links.map(({ label, href, type }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {type === "code" ? (
                      <FaGithub className="text-base" />
                    ) : (
                      <FaArrowUpRightFromSquare className="text-xs" />
                    )}
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <p className="mt-5 text-sm lg:text-[15px] leading-relaxed text-zinc-300">
              {description}
            </p>

            {highlights.length > 0 && (
              <ul className="mt-5 space-y-2.5 xl:space-y-3">
                {highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm lg:text-[15px] leading-relaxed text-zinc-300"
                  >
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/90" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {stack.length > 0 && (
            <div className="thin-scrollbar flex shrink-0 gap-2 overflow-x-auto border-t border-white/10 px-6 py-3 sm:px-8 short:px-5 xl:px-10 roomy:flex-wrap roomy:overflow-visible roomy:py-4">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="shrink-0 whitespace-nowrap rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] tracking-wide text-zinc-300 sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </article>
      </RevealY>

      <RevealY>
        <div className="flex flex-row lg:flex-col short:flex-col items-center justify-center gap-4 short:gap-3 lg:gap-6">
          {images.map(({ src, alt, caption, width, height }) => (
            <div key={src} className="min-w-0 flex justify-center">
              <WindowFrame caption={caption}>
                <ImageLightbox
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="block h-auto w-auto max-w-full max-h-[17vh] short:max-h-[20vh] lg:max-h-[31vh] object-contain"
                />
              </WindowFrame>
            </div>
          ))}
        </div>
      </RevealY>
    </div>
  );
}
