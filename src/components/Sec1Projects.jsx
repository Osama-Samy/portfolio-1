import homeBg from "../assets/images/home-bg.png"
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "Design With React & Tailwind",
    image: homeBg
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Built With NestJS",
    image: homeBg
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "AI Video Content",
    image: homeBg
  },
  {
    id: 4,
    title: "Project 4",
    subtitle: "Design With Bootstrap 5",
    image: homeBg
  },
  {
    id: 5,
    title: "Project 5",
    subtitle: "Web Development",
    image: homeBg
  },
  {
    id: 6,
    title: "Project 6",
    subtitle: "UI/UX Design",
    image: homeBg
  }
]

const Sec1Projects = () => {
  return (
    <section className="bg-[#121215] py-16 lg:py-24" id="projects">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <h2 className="mb-12 text-5xl font-bold tracking-wide text-center text-white">Projects</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden cursor-pointer rounded-3xl group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 aspect-video group-hover:scale-110"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 opacity-0 bg-linear-to-r from-[#7e22ce]/90 to-[#b91c1c]/80 group-hover:opacity-100">
                <h3 className="text-3xl font-bold tracking-wider text-white transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  {project.title}
                </h3>
                <p className="mt-2 text-lg italic transition-transform duration-500 delay-75 translate-y-8 text-white/90 group-hover:translate-y-0">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Sec1Projects