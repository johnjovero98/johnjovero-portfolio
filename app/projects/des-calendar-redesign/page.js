import Image from "next/image";
import Link from "next/link";
import { PROJECT_LIST } from "@/constants/ProjectList";


import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Blinker from "@/components/Blinker";
import ProjectTechList from "@/components/ProjectTechList";



export default async function DESCalProjectPage() {
    const projectSlug = "des-calendar-redesign";  // Slug you're looking for

    const project = PROJECT_LIST.find(p => p.projectSlug === projectSlug);

    console.log(project);

    return <>
        <div className="sticky top-0 bg-white z-20 shadow-lg">
            <Header />
        </div>


        <main className="project-description-page mb-2">
            <section className="container mx-auto px-1">
                <h2 className="text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">DES Calendar UI Redesign</h2>

                <div className="flex flex-col lg:flex-row items-start gap-2">
                    <div className="w-[90%] lg:sticky lg:top-[10.5rem]">
                        <Image
                            src={"/projects-img/project-img-devcal.png"}
                            alt="John Jovero"
                            width={2000}
                            height={1181}
                            className="mb-1"
                        />

                        <div className="technologies">
                            <h3 className="font-bold leading-[3rem]">Technologies Used:</h3>
                            <ProjectTechList projectTechList={project.projectTech} />

                            <Link href="https://devedmonton.com/calendar" target="_blank" className="cta-button mt-1">
                                Live Link
                            </Link>
                        </div>
                    </div>



                    <div className="grow-2">
                        {/* task */}
                        <section className="flex gap-[15px] items-baseline">
                            <Blinker />
                            <div>
                                <h3 className="text-h4 font-bold text-blue-300">Task</h3>
                                <div className="project-details relative pb-1">
                                    <p className="text-balance mb-1 pt-1">This is the first feature I updated that got into production. By the time I successfully completed this project, I felt confident and sure of myself that I had chosen the right path to become a web developer!</p>

                                    <p className="text-balance mb-1">This UI redesign project is an open-source contribution for the Dev Edmonton Society website. Although the past calendar design is functional, my goal for this project is to further improve the calendar UI component’s aesthetic and usability.</p>
                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section className="flex gap-[15px] items-baseline">
                            <Blinker />
                            <div>
                                <h3 className="text-h4 font-bold text-blue-300">Features</h3>
                                <div className="project-details relative pb-1">
                                    <p className="font-bold text-h6 pt-1" >Major Changes:</p>
                                    <ul className="list-disc pl-1">
                                        <li>Fix &quot;All day&quot; view</li>
                                        <li>Fix Overall Layout</li>
                                        <li>Follow design patterns for calendar UI components</li>
                                    </ul>


                                    <p className="font-bold text-h6 pt-1" >UI Before:</p>
                                    <Image
                                        src={"/projects-img/calendar-ui-before.png"}
                                        alt="John Jovero"
                                        width={600}
                                        height={600}
                                        className="mb-1 border border-gray-200 rounded-lg shadow-md"
                                    />

                                    <p className="font-bold text-h6 pt-1" >UI After:</p>
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


                                </div>
                            </div>
                        </section>


                        {/* Results */}
                        <section className="flex gap-[15px] items-baseline">
                            <Blinker />
                            <div>
                                <h3 className="text-h4 font-bold text-blue-300">Results</h3>
                                <div className="project-details relative pb-1">
                                    <p className="text-balance pt-1">My revisions got successfully deployed in the production– increasing the event&apos;s page visitation rate. I also received some positive feedback on the design and usability.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>


            </section>
        </main>
        <Footer />
    </>
}