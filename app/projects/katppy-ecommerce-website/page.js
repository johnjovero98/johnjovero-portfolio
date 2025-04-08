import Image from "next/image";
import Link from "next/link";
import { PROJECT_LIST } from "@/constants/ProjectList";


import Header from "@/components/Header"
import ProjectDetailFeatImg from "@/components/ProjectDetailFeatImg";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import Footer from "@/components/Footer"




export default async function DESCalProjectPage() {
    const URLslug = "katppy-ecommerce-website";
    const project = PROJECT_LIST.find((project) => project.projectSlug === URLslug);

    return <>
        <div className="sticky top-0 bg-white z-20 shadow-lg">
            <Header />
        </div>


        <main className="project-description-page mb-2">

            <section className="container mx-auto px-1">
                <h2 className="text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">Katppy E-Commerce Website</h2>

                <div className="project-content">


                    <div className="project-feat-img-container">
                        <ProjectDetailFeatImg
                            imgSrc={'/projects-img/project-img-katppy.png'}
                            imgAlt={'Katppy Project Feature Image'}
                            projectLink={'https://katppy.com/'}
                            projectData={project}
                        />
                    </div>


                    {/* project Descriptions */}
                    <div className="project-details-section">
                        {/* Overview */}
                        <ProjectDetailSection title={"Overview"}>
                            <p className="text-balance">Katppy is an online store that specializes in decoden DIY craft supplies such as kawaii resin charms, toy figures, crystal beads, and blind bag toys. </p>
                        </ProjectDetailSection>

                        



                    </div>
                </div>
            </section>
        </main >

        <Footer />
    </>
}