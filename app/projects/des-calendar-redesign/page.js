import Image from "next/image";
import { PROJECT_LIST } from "@/constants/ProjectList";


import Header from "@/components/Header"
import AnimatedBackground from "@/components/AnimatedBackground";
import ProjectDetailFeatImg from "@/components/ProjectDetailFeatImg";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import Footer from "@/components/Footer"




export default async function DESCalProjectPage() {
    const URLslug = "des-calendar-redesign";
    const project = PROJECT_LIST.find((project) => project.projectSlug === URLslug);

    return <>

        <Header />

        <main className="project-description-page mb-2">
            <div className="hidden md:lg:block">
                <AnimatedBackground />
            </div>

            <section className="container mx-auto px-1">
                <h2 className="text-h4 lg:text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">{project.projectTitle}</h2>
                <div className="project-content">
                    <div className="project-feat-img-container">
                        <ProjectDetailFeatImg
                            imgSrc={'/projects-img/project-img-devcal.png'}
                            imgAlt={'Dev Edmonton Calendar Project Feature Image'}
                            projectLink={'https://devedmonton.com/calendar'}
                            projectData={project}
                        />
                    </div>


                    {/* project Descriptions */}
                    <div className="project-details-section">
                        {/* Task */}
                        <ProjectDetailSection title={"Task"}>
                            <p>This UI redesign project is an open-source contribution for the Dev Edmonton Society website. Although the past calendar design is functional, my goal for this project is to further improve the calendar UI component’s aesthetic and usability.</p>
                        </ProjectDetailSection>


                        {/* Features */}
                        <ProjectDetailSection title={"Features"}>
                            <h4>Major Changes:</h4>
                            <ul>
                                <li>Implement &quot;All day&quot; event grid view</li>
                                <li>Fix Overall Layout</li>
                                <li>Follow design patterns for calendar UI components</li>
                            </ul>


                            <h4>UI Before:</h4>
                            <Image
                                src={"/projects-img/calendar-ui-before.png"}
                                alt="Calendar UI before the revisions"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />

                            <h4>UI After (Month View):</h4>
                            <Image
                                src={"/projects-img/calendar-month-view-demo.gif"}
                                alt="Calendar UI after the revisions month view"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />

                            <h4>UI After (Week View):</h4>
                            <Image
                                src={"/projects-img/calendar-week-view-demo.gif"}
                                alt="Calendar UI after the revisions week view"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />
                        </ProjectDetailSection>

                        {/* Results */}
                        <ProjectDetailSection title={'Results'}>
                            <p>My revisions got successfully deployed in the production– increasing the event&apos;s page visitation rate. I also received some positive feedback on the design and usability.</p>
                        </ProjectDetailSection>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}