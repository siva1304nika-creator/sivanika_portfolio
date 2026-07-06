import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
import Navbar from "./components/layout/Navbar";
// import Hero from "./components/hero/Hero";
// import About from "./components/sections/About";
// import Skills from "./components/sections/Skills";
// import Projects from "./components/sections/Projects";
// import Contact from "./components/sections/Contact";

const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const DigitalMarketing = lazy(() => import("./components/sections/DigitalMarketing"));
const Contact = lazy(() => import("./components/sections/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />

          <main className="bg-black text-white">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <DigitalMarketing />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
