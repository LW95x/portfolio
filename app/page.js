"use client";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { FaChevronDown, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import {
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { Rampart_One } from "next/font/google";
import { useState, useEffect } from "react";
import RevealY from "./_lib/RevealY";
import Link from "next/link";
import ProjectOne from "./_lib/NCOne";
import ProjectTwo from "./_lib/NCTwo";
import NETProject from "./_lib/NETProject";
import ReactGA from "react-ga4";
import TSProject from "./_lib/TSProject";
import SubceptProject from "./_lib/SubceptProject";
import 'yet-another-react-lightbox/styles.css';

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
});

const navItems = [
  { label: "Home", id: "home", sections: ["home"] },
  { label: "Subcept", id: "subcept", sections: ["subcept"] },
  { label: "C# & .NET", id: "page2", sections: ["page2"] },
  { label: "TypeScript", id: "page3", sections: ["page3"] },
  { label: "JavaScript", id: "page4", sections: ["page4", "page5"] },
  { label: "Contact", id: "page6", sections: ["page6"] },
];

const sectionIds = navItems.flatMap((item) => item.sections);

const scrollToSection = (id) => {
  const scrollContainer = document.getElementById("scrollContainer");
  const section = document.getElementById(id);
  if (scrollContainer && section) {
    scrollContainer.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  }
};

const techStack = [
  { name: "C#", Icon: TbBrandCSharp, color: "#a179dc" },
  { name: ".NET", Icon: SiDotnet, color: "#8b6cef" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Azure", Icon: TbBrandAzure, color: "#3a96dd" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
];

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/liam-woodall/",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:liam.woodall@live.co.uk",
    Icon: FaEnvelope,
    external: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/LW95x/",
    Icon: FaGithub,
    external: true,
  },
];

function NextSection({ href, bounce = false }) {
  return (
    <Link
      href={href}
      aria-label="Next section"
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-950/60 text-zinc-300 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white ${
        bounce ? "icon-bounce" : ""
      }`}
    >
      <FaChevronDown size={16} />
    </Link>
  );
}

function ProjectSection({ id, next, children }) {
  return (
    <section id={id} className="snap-start h-screen flex flex-col pt-16">
      <div className="flex-1 min-h-0 flex items-center py-4">{children}</div>
      <div className="flex justify-center pb-5">
        <NextSection href={next} />
      </div>
    </section>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    ReactGA.initialize("G-7J731CXS60");
  }, []);

  // Highlight the nav item for whichever section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: document.getElementById("scrollContainer"), threshold: 0.6 }
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div
        id="scrollContainer"
        className="overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth hide-scrollbar"
      >
        <header className="fixed inset-x-0 top-0 z-50 bg-zinc-950/70 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <button
              onClick={(e) => handleNavClick(e, "home")}
              aria-label="Back to top"
              className={`${rampartOne.className} justify-self-start text-3xl text-white transition-opacity hover:opacity-80`}
            >
              LW
            </button>

            <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.03] p-1">
              {navItems.map(({ label, id, sections }) => {
                const active = sections.includes(activeSection);
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    aria-current={active ? "true" : undefined}
                    className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center justify-self-end gap-1">
              <Link
                href="https://www.linkedin.com/in/liam-woodall/"
                target="_blank"
                aria-label="LinkedIn"
                className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </Link>
              <Link
                href="mailto:liam.woodall@live.co.uk"
                aria-label="Email"
                className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FaEnvelope size={16} />
              </Link>
              <Link
                href="https://github.com/LW95x/"
                target="_blank"
                aria-label="GitHub"
                className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={18} />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-zinc-200 transition-colors hover:bg-white/10"
              >
                {mobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuFill size={22} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden px-4 pb-3 flex flex-col gap-1">
              {navItems.map(({ label, id, sections }) => {
                const active = sections.includes(activeSection);
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          )}
        </header>
        <section id="home" className="snap-start h-screen flex flex-col pt-16">
          <div className="flex-1 flex items-center justify-center px-4">
            <RevealY>
              <div className="grid grid-cols-4 gap-3 sm:gap-5">
                {techStack.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="glass-panel group flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:h-28 sm:w-28 sm:gap-3 lg:h-32 lg:w-32"
                  >
                    <Icon
                      className="text-3xl sm:text-5xl lg:text-[3.25rem]"
                      style={{ color }}
                    />
                    <span className="text-[10px] tracking-wide text-zinc-400 transition-colors group-hover:text-zinc-100 sm:text-xs">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </RevealY>
          </div>
          <div className="flex justify-center pb-5">
            <NextSection href="#subcept" bounce />
          </div>
        </section>
        <ProjectSection id="subcept" next="#page2">
          <SubceptProject />
        </ProjectSection>
        <ProjectSection id="page2" next="#page3">
          <NETProject />
        </ProjectSection>
        <ProjectSection id="page3" next="#page4">
          <TSProject />
        </ProjectSection>
        <ProjectSection id="page4" next="#page5">
          <ProjectOne />
        </ProjectSection>
        <ProjectSection id="page5" next="#page6">
          <ProjectTwo />
        </ProjectSection>
        <section
          id="page6"
          className="snap-start h-screen pt-16 flex items-center justify-center px-4"
        >
          <RevealY>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-8">
              {contactLinks.map(({ name, href, Icon, external }) => (
                <Link
                  key={name}
                  href={href}
                  target={external ? "_blank" : undefined}
                  className="glass-panel group flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:h-44 sm:w-44 sm:gap-4 lg:h-52 lg:w-52"
                >
                  <Icon className="text-4xl text-zinc-100 transition-colors group-hover:text-white sm:text-6xl lg:text-7xl" />
                  <span className="text-xs tracking-wide text-zinc-400 transition-colors group-hover:text-zinc-100 sm:text-sm">
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          </RevealY>
        </section>
      </div>
    </>
  );
}
