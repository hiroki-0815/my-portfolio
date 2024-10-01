import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import Tape from "@/sections/Tape";
import About from "@/sections/About";

export default function Home() {
  return (
    <div className="px-3">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Tape />
      <About />
    </div>
  );
}
