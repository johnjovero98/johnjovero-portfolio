import Image from "next/image";
import { PROJECT_LIST } from "@/constants/ProjectList";

// components
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBannner";
import ProjectList from "@/components/ProjectList";
import SkillsList from "@/components/SkillsList";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="mb-4 bg-linear-to-b from-blue-100 to-white">
          <HeroBanner />
        </div>

        <section className="mb-4 scroll-m-1" id="projects">
          <div className="container mx-auto px-1">

            <h2 className="font-black  text-h4 md:text-h3 mb-1 text-blue-300">Projects</h2>
            <ProjectList ProjectList={PROJECT_LIST} />
          </div>


        </section>


        <section className="mb-4">

          <div className="container mx-auto px-1">
            <h2 className="font-black  text-h4 md:text-h3 mb-1 text-blue-300">Technical Skills</h2>
            <SkillsList />
          </div>
        </section>

        <section className="mb-4">
          Let's talk about web stuff!
        </section>
      </main >

    </>
  );
}
