import Image from "next/image";

const OngoingProjects = () => {
  const projects = [
    {
      name: "DeiraEscapes",
      description:
        "AI-based platform for tour packages and suggestions. Using machine learning algorithms, it provides personalized recommendations for tourists based on their preferences and location.",
      image: "/assets/deiraescapes.jpeg",
    },
    {
      name: "Estaite",
      description:
        "Bed rental to real estate platform in UAE. Connecting landlords and tenants with seamless property management and flexible rental options.",
      image: "/assets/estaite.png",
    },
    {
      name: "Homewise",
      description:
        "Package-based platform for automation and security in UAE and Qatar. Offering smart home solutions, security systems, and energy-efficient devices tailored to regional needs.",
      image: "/assets/homewise.png",
    },
  ];

  return (
    <section id="ongoing-projects" className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center mt-10">Ongoing Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative bg-white rounded shadow hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Coming Soon</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-md mb-4 text-center">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
