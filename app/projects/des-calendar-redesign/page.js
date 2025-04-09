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

                <h2 className="text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">DES Calendar UI Redesign</h2>


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
                            <p className="text-balance mb-1">This is the first feature I updated that got into production. By the time I successfully completed this project, I felt confident and sure of myself that I had chosen the right path to become a web developer!</p>

                            <p className="text-balance mb-1">This UI redesign project is an open-source contribution for the Dev Edmonton Society website. Although the past calendar design is functional, my goal for this project is to further improve the calendar UI component’s aesthetic and usability.</p>
                        </ProjectDetailSection>


                        {/* Features */}
                        <ProjectDetailSection title={"Features"}>
                            <h4 className="font-bold text-h6  leading-[3rem]" >Major Changes:</h4>
                            <ul className="list-disc pl-1">
                                <li>Fix &quot;All day&quot; view</li>
                                <li>Fix Overall Layout</li>
                                <li>Follow design patterns for calendar UI components</li>
                            </ul>

                            <p className="font-bold text-h6 leading-[3rem]" >UI Before:</p>
                            <Image
                                src={"/projects-img/calendar-ui-before.png"}
                                alt="John Jovero"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />

                            <p className="font-bold text-h6 leading-[3rem]" >UI After:</p>
                            <Image
                                src={"/projects-img/calendar-month-view-demo.gif"}
                                alt="John Jovero"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />

                            <Image
                                src={"/projects-img/calendar-week-view-demo.gif"}
                                alt="John Jovero"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />
                        </ProjectDetailSection>


                        {/* Results */}
                        <ProjectDetailSection title={'Results'}>
                            <p className="text-balance">My revisions got successfully deployed in the production– increasing the event&apos;s page visitation rate. I also received some positive feedback on the design and usability.</p>
                        </ProjectDetailSection>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </>
}