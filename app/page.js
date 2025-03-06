import Image from "next/image";
import { PROJECT_LIST } from "@/constants/ProjectList";

// components
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBannner";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="mb-4 bg-linear-to-b from-blue-100 to-white">
          <HeroBanner />
        </div>

        <section className="mb-4">
          <div className="container mx-auto px-1">

            <h2 className="font-black  text-h5 md:text-h3 mb-1 text-blue-300">Web Development Projects</h2>
            <ProjectList ProjectList={PROJECT_LIST} />
          </div>


        </section>


        <section className="mb-4">
          Technical Skills
        </section>

        <section className="mb-4">
          Let's talk about web stuff!
        </section>
      </main >

    </>
  );
}
