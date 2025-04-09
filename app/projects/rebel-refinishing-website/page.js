import Image from "next/image";
import { PROJECT_LIST } from "@/constants/ProjectList";

import Header from "@/components/Header"
import AnimatedBackground from "@/components/AnimatedBackground";
import ProjectDetailFeatImg from "@/components/ProjectDetailFeatImg";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import Footer from "@/components/Footer"

export default async function DESCalProjectPage() {
    const URLslug = "rebel-refinishing-website";
    const project = PROJECT_LIST.find((project) => project.projectSlug === URLslug);

    return <>
        <Header />

        <main className="project-description-page mb-2">

            <div className="hidden md:lg:block">
                <AnimatedBackground />
            </div>


            <section className="container mx-auto px-1">

                <h2 className="text-h4 lg:text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">DES Calendar UI Redesign</h2>


                <div className="project-content">
                    <div className="project-feat-img-container">
                        <ProjectDetailFeatImg
                            imgSrc={'/projects-img/project-img-rebel.png'}
                            imgAlt={'Rebel Refinishing Project Feature Image'}
                            projectLink={'https://www.rebelrefinishing.ca/'}
                            projectData={project}
                        />
                    </div>

                    {/* project Descriptions */}
                    <div className="project-details-section">
                        {/* Task */}
                        <ProjectDetailSection title={"Overview"}>
                            <p>Rebel Refinishing is a local refinishing business looking to elevate its online presence. The original website was built using Wix, which limited both design flexibility and performance.</p>
                            <p>As a collaborative freelance project with a fellow student, our goal was to migrate the site from Wix to a custom NEXT JS app, improve its UI/UX, and ultimately increase user engagement and conversion rate.</p>
                        </ProjectDetailSection>

                        <ProjectDetailSection title={"Goals"}>
                            <p><strong>Role:</strong> Front-end Developer and UX/UI designer </p>

                            <h4>Project Goals:</h4>
                            <ul>
                                <li>Modernize the design with a clean, user-friendly interface</li>
                                <li>Improve performance and responsiveness across all devices</li>
                                <li>Showcase past work in an engaging and organized way</li>
                                <li>Enable easy content management via a headless CMS</li>
                                <li>Drive more conversions through clearer calls-to-action and intuitive navigation</li>
                            </ul>

                            <h4>Website Before:</h4>
                            <Image
                                src={"/projects-img/rebel-website-before.webp"}
                                alt="Calendar UI before the revisions"
                                width={600}
                                height={600}
                                className="mb-1 border border-gray-200 rounded-lg shadow-md"
                            />
                        </ProjectDetailSection>

                        <ProjectDetailSection title={'Contributions'}>

                            <p>As the Frontend Developer, I was responsible for implementing key components of the user interface using Next.js and Tailwind CSS</p>

                            <h4>Key Features Implemented:</h4>
                            <ul>
                                <li><strong>Hero Banner:</strong> Designed and developed a responsive, visually striking hero section with clear call to action.</li>
                                <li><strong>Customer Testimonials:</strong> Built a clean, carousel-style testimonial section to add credibility to the business. It links to the original Google review posted.</li>
                                <li><strong>Project Showcase Page:</strong> Developed a polaroid cork board style that features before-and-after transformations of client projects.</li>
                                <li><strong>Masonry Gallery:</strong> Implemented a responsive image gallery with a masonry layout to highlight a variety of project images specific to each service.</li>
                            </ul>
                        </ProjectDetailSection>

                        <ProjectDetailSection title={'Results'}>
                            <p>Rebuilding the Rebel Refinishing website was a valuable collaborative experience that allowed me to apply my frontend development skills in a real-world freelance setting. By leveraging modern tools like Next.js and Prismic, we delivered a clean, performant, and user-centric website that met both the client’s and users’ needs.</p>
                            <h4>Project Outcome:</h4>
                            <ul>
                                <li>Improved usability and mobile responsiveness, making the site more accessible across devices.</li>
                                <li>Faster page loads and smoother navigation contributed to a noticeable increase in user engagement.</li>
                                <li>Enhanced visual storytelling through a more structured and attractive project showcase.</li>
                            </ul>
                        </ProjectDetailSection>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </>
}