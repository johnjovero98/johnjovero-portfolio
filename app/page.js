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

      <Header />


      <main>
        <div className="mb-1 bg-linear-to-b from-blue-100 to-transparent shadow"> 
          <HeroBanner />
        </div>

        <section className="mb-4 scroll-m-1 scroll-mt-[10rem]" id="projects">
          <div className="container mx-auto px-1">

            <h2 className="font-bold  text-h4 md:text-h3 mb-1 text-blue-300">Projects</h2>
            <ProjectList ProjectList={PROJECT_LIST} />
          </div>
        </section>


        <section className="relative">
          <div className="hidden md:lg:block">
            <AnimatedBackground />
          </div>

          <div className="container mx-auto px-1 py-2">
            <h2 className="font-bold  text-h4 md:text-h3 mb-2 text-blue-300">Technical Skills</h2>
            <SkillsList />
          </div>
        </section>


        {/* contact section */}
        <section id="contact" className=" bg-linear-to-b from-blue-white to-blue-100 scroll-mt-[7.5rem]">
          <div className="container mx-auto px-1 py-2">
            <ContactSection />
          </div>
        </section>
      </main >

      <Footer />
    </>
  );
}
