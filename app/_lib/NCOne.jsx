import ProjectShowcase from "./ProjectShowcase";

export default function ProjectOne() {
  return (
    <ProjectShowcase
      category="JavaScript Project"
      title="NC News"
      links={[
        { label: "Backend code", href: "https://github.com/LW95x/be-nc-news", type: "code" },
        { label: "Live API", href: "https://be-nc-news-sfsv.onrender.com/api", type: "live" },
        { label: "Frontend code", href: "https://github.com/LW95x/nc-news", type: "code" },
        { label: "Live site", href: "https://nc-news-project-fe.netlify.app/", type: "live" },
      ]}
      description={
        <>
          A full stack news aggregation platform built with JavaScript, Node.js, Express, React, Vite, Axios and a PostgreSQL database. Designed to mimic a similar service such as Reddit, where users can post content, leave comments on existing posts, and upvote or downvote other users posts.
        </>
      }
      highlights={[
        <>
          Test Driven Development (TDD) led approach, using Jest and Supertest to guarantee a robust API
        </>,
        <>
          Styled with Bootstrap, producing a responsive design compatible for all device types
        </>,
        <>
          Followed RESTful API design principles with resource-based routing and stateless interactions
        </>,
        <>
          Implemented API using the MVC design pattern, producing a clean and maintainable codebase
        </>,
      ]}
      stack={["JavaScript", "Node.js", "Express", "PostgreSQL", "React", "Vite", "Axios", "Bootstrap", "Jest"]}
      images={[
        { src: "/nc-news-be.png", caption: "Backend", alt: "NC News API", width: 916, height: 713 },
        { src: "/nc-news-fe.png", caption: "Frontend", alt: "NC News frontend", width: 842, height: 790 },
      ]}
    />
  );
}
