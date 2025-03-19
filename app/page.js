import Image from "next/image";
import { PROJECT_LIST } from "@/constants/ProjectList";

// components
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBannner";
import ProjectList from "@/components/ProjectList";
import SkillsList from "@/components/SkillsList";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

      <div className="sticky top-0 bg-white z-20 shadow-lg">
        <Header />
      </div>

      <main>
        <div className="mb-1 bg-linear-to-b from-blue-100 to-white">
          <HeroBanner />
        </div>

        <section className="mb-4 scroll-m-1" id="projects">
          <div className="container mx-auto px-1">

            <h2 className="font-bold  text-h4 md:text-h3 mb-1 text-blue-300">Projects</h2>
            <ProjectList ProjectList={PROJECT_LIST} />
          </div>

        </section>


        <section className="relative inset-shadow-sm">
          <AnimatedBackground />

          <div className="container mx-auto px-1 py-2">
            <h2 className="font-bold  text-h4 md:text-h3 mb-2 text-blue-300">Technical Skills</h2>
            <SkillsList />
          </div>
        </section>


        {/* contact section */}
        <section className="shadow-inner bg-linear-to-b from-blue-white to-blue-100">
          <div className="container mx-auto px-1 py-2">
            <ContactSection />
          </div>
        </section>
      </main >

    <Footer/>
    </>
  );
}
