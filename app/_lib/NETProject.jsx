import ProjectShowcase from "./ProjectShowcase";

export default function NETProject() {
  return (
    <ProjectShowcase
      category="C# & .NET Project"
      title="U2U Marketplace"
      links={[
        { label: "View the code", href: "https://github.com/LW95x/marketplace_backend", type: "code" },
        { label: "Live version", href: "https://u2umarketplace-api.azurewebsites.net/", type: "live" },
      ]}
      description={
        <>
          A peer-to-peer marketplace API built using C#, ASP.NET Core Web API, Entity Framework Core, LINQ,
          and Azure SQL Server. The project aims to replicate a service like eBay, where users can both buy and sell
          products in a secure and efficient way.
        </>
      }
      highlights={[
        <>
          Adhered to SOLID principles, utilising the Controller-Service-Repository pattern, dependency injection and
          interfaces to ensure separation of concerns is maintained throughout the application
        </>,
        <>
          Achieved 100% test coverage with an extensive xUnit testing suite comprising over 130 tests
        </>,
        <>
          Containerised the application using Docker, and deployed to an Azure App Service
        </>,
        <>
          Automated CI/CD pipeline using GitHub Actions for testing, building, and deployment phases
        </>,
      ]}
      stack={["C#", "ASP.NET Core", "Entity Framework Core", "LINQ", "Azure SQL", "xUnit", "Docker", "Azure App Service", "GitHub Actions"]}
      images={[
        { src: "/erd.png", caption: "Entity relationship diagram", alt: "U2U Marketplace entity relationship diagram", width: 1006, height: 530 },
        { src: "/solexplorer.png", caption: "Solution structure", alt: "U2U Marketplace solution structure", width: 786, height: 554 },
      ]}
    />
  );
}
