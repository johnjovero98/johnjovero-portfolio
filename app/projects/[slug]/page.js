
import { PROJECT_LIST } from "@/constants/ProjectList"

// import components
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import Blinker from "@/components/Blinker";



export default async function ProjectPage({ params }) {
    const { slug } = await params;

    // Find the project that matches the slug
    const project = PROJECT_LIST.find((project) => project.projectSlug === slug);

    // If no project is found, show a "not found" message
    if (!project) {
        return <p>Project not found!</p>;
    }

    return <>
        <div className="sticky top-0 bg-white z-20 shadow-lg">
            <Header />
        </div>


        <main className="project-description-page mb-2">
            <section className="container mx-auto px-1">
                <h2 className="text-h2 font-bold text-balance text-center mt-2 mb-2 text-blue-300">{project.projectTitle}</h2>

                {/* task */}
                <section className="flex gap-[15px] items-baseline">
                    <Blinker />
                    <div>
                        <h3 className="text-h4 font-bold">Task</h3>
                        <div className="project-details relative pb-1">
                            <p className="whitespace-pre-line text-balance">{project.projectTask}</p>
                        </div>
                    </div>
                </section>


                {/* Features */}
                <section className="flex gap-[15px] items-baseline">
                    <Blinker />
                    <div>
                        <h3 className="text-h4 font-bold">Features</h3>
                        <div className="project-details relative pb-1">
                        </div>
                    </div>
                </section>


                {/* Results */}
                <section className="flex gap-[15px] items-baseline">
                    <Blinker />
                    <div>
                        <h3 className="text-h4 font-bold">Results</h3>
                        <div className="project-details relative pb-1">
                        </div>
                    </div>
                </section>
            </section>
        </main>
        <Footer />
    </>
}