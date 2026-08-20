import { lazy, Suspense } from "react";
import Navbar from "../components/layout/Navbar";
import MarketingTeaser from "../components/sections/MarketingTeaser";

const Hero = lazy(() => import("../components/hero/Hero"));
const About = lazy(() => import("../components/sections/About"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Education = lazy(() => import("../components/sections/Education"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Contact = lazy(() => import("../components/sections/Contact"));

export default function MainPortfolio() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white relative">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <MarketingTeaser />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
