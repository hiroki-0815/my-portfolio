import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

const ProjectsSection = () => {
  return (
    <section className="flex flex-col pb-16">
      <div className="flex flex-col items-center">
        <div className="flex ">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl  mt-6 font-semibold">
          Featured Projects
        </h2>
        <p className="text-white/60 mt-4 text-lg text-center max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div className="">
        {portfolioProjects.map((project) => (
          <div
            className=" p-6 flex flex-col mt-10 bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20"
            key={project.title}
          >
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold tracking-wide text-sm  uppercase inline-flex gap-1">
              <span>{project.company}</span>
              <span>&bull; </span>
              <span> {project.year}</span>
            </div>
            <h3 className="font-serif text-2xl md:text-4xl mt-2 font-semibold tracking-widest">
              {project.title}
            </h3>
            <hr className="border-t-2 my-4 border-white/5" />
            <ul className="flex flex-col gap-4 mb-1">
              {project.results.map((result) => (
                <li className="flex flex-row gap-2 items-center text-sm md:text-base text-white/50 ">
                  <CheckIcon className="size-5" />
                  <span className="text-sm ">{result.title} </span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-auto px-6 rounded-md font-semibold inline-flex items-center justify-center my-6">
                <span>View Live Site</span>
                <ArrowUpIcon className="size-4" />
              </button>
            </a>
            <Image src={project.image} alt={project.title} className="mb-4 " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
