import Image from "next/image";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBannner";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="mb-4 bg-linear-to-b from-blue-100 to-white">
          <HeroBanner/>
        </div>

        <section className="mb-4">
          Web Development Projects

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
