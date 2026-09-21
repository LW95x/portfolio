import ProjectShowcase from "./ProjectShowcase";

export default function SubceptProject() {
  return (
    <ProjectShowcase
      category="MSc Dissertation Project"
      title="Subcept"
      links={[
        { label: "Live version", href: "https://openclaw-vps.tailf89ef3.ts.net:8443/", type: "live" },
      ]}
      description={
        <>
          An adaptive AI tutoring engine built for my MSc Computer Science dissertation at the University of Birmingham.
          Rather than handing learners an answer, Subcept turns their question into a structured lesson, teaches it through conversation, and diagnoses why an answer was wrong.
        </>
      }
      highlights={[
        <>
          Generates a complete lesson plan for each question using an LLM, with sub-skills, worked examples, marking rubrics and common misconceptions, validated before it is served
        </>,
        <>
          Tracks each learner&apos;s mastery of every sub-skill with Bayesian Knowledge Tracing, updated from rubric-graded answers
        </>,
        <>
          Classifies wrong answers by failure mode and responds with matched remediation, from revisiting a prerequisite to a worked example
        </>,
        <>
          Built-in guardrails, screening questions before generation and preventing the tutor from simply giving the answer away
        </>,
        <>
          Controller-Service-Repository architecture tested with xUnit, containerised with Docker and deployed to a Linux VPS
        </>,
      ]}
      stack={["C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "React", "TypeScript", "Tailwind", "Gemini API", "xUnit", "Docker"]}
      images={[
        { src: "/subcept-session.png", alt: "Subcept tutoring session with mastery tracking", caption: "Tutoring session", width: 975, height: 531 },
        { src: "/subcept-hint.png", alt: "Subcept answering a learner's clarification question", caption: "Hints and clarification", width: 975, height: 325 },
      ]}
    />
  );
}
