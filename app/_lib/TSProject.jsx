import ProjectShowcase from "./ProjectShowcase";

export default function TSProject() {
  return (
    <ProjectShowcase
      category="TypeScript Project"
      title="ClubConnect"
      links={[
        { label: "Backend code", href: "https://github.com/LW95x/club-connect-be/", type: "code" },
        { label: "Live API", href: "https://the-football-pyramid-backend.onrender.com/api/", type: "live" },
        { label: "Frontend code", href: "https://github.com/LW95x/club-connect-fe/", type: "code" },
        { label: "Live site", href: "https://clubconnects.netlify.app/", type: "live" },
      ]}
      description={
        <>
          A full-stack TypeScript events management platform designed to mediate the buying and selling of tickets to sporting events.
          Built using Node.js, Express, and a PostgreSQL database for the backend, combined with a responsive React frontend developed with Next.js, Tailwind and Framer Motion.
        </>
      }
      highlights={[
        <>
          Test-Driven Development (TDD) led approach, using Jest and Supertest, with over 90 tests in total
        </>,
        <>
          Styled with Tailwind to match a curated Figma design, enhanced with Framer Motion
        </>,
        <>
          Secured password encryption with BCrypt, and applied strict validation of schemas using Joi
        </>,
        <>
          Stripe Payment API integrated to securely facilitate the event ordering process
        </>,
        <>
          Google Calendar API implemented to enable users to seamlessly add events to their calendars
        </>,
      ]}
      stack={["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Next.js", "Tailwind", "Framer Motion", "Jest", "Stripe"]}
      images={[
        { src: "/ccts.png", caption: "API response", alt: "ClubConnect API endpoint", width: 528, height: 488 },
        { src: "/ccfrontend.png", caption: "Ticket ordering", alt: "ClubConnect ticket ordering page", width: 673, height: 728 },
      ]}
    />
  );
}
