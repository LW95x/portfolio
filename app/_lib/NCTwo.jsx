import ProjectShowcase from "./ProjectShowcase";

export default function ProjectTwo() {
  return (
    <ProjectShowcase
      category="JavaScript Project"
      title="Treasure Hunt"
      links={[
        { label: "Backend code", href: "https://github.com/LW95x/treasure-hunt-backend-host", type: "code" },
        { label: "Live API", href: "https://treasure-hunt-backend-test.onrender.com/", type: "live" },
        { label: "Frontend code", href: "https://github.com/ELR143/treasure-hunt-frontend", type: "code" },
        { label: "Live site", href: "https://treasure-hunters.netlify.app/", type: "live" },
      ]}
      description={
        <>
          A full stack geocaching, location-based application built with Python, Django REST, JavaScript, PostgreSQL, Next.js, and React. The premise of the game is for users to find treasures in their area using GPS, akin to Pokemon Go or similar, to unlock treasures on a map by being within proximity of these treasures.
        </>
      }
      highlights={[
        <>
          Comprehensively unit tested all API endpoints using Django REST Framework testing tools
        </>,
        <>
          Styled with Tailwind and Framer Motion, creating a unique design curated specifically for a treasure map theme
        </>,
        <>
          Integrated Google Maps API to provide real-time GPS updates, using a proximity-based system to enable users to unlock treasures based on their current location
        </>,
      ]}
      stack={["Python", "Django REST", "PostgreSQL", "JavaScript", "React", "Next.js", "Tailwind", "Framer Motion", "Google Maps API"]}
      images={[
        { src: "/backend-proj2.png", caption: "Backend", alt: "Treasure Hunt API", width: 1432, height: 484 },
        { src: "/frontend-proj2.png", caption: "Frontend", alt: "Treasure Hunt frontend", width: 1297, height: 502 },
      ]}
    />
  );
}
