import Image from "next/image";
import Link from "next/link";
import { PROJECT_LIST } from "@/constants/ProjectList";



import Header from "@/components/Header"
import AnimatedBackground from "@/components/AnimatedBackground";
import ProjectDetailFeatImg from "@/components/ProjectDetailFeatImg";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import Footer from "@/components/Footer"




export default async function DESCalProjectPage() {
    const URLslug = "anthonys-kitchen";
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
                            imgSrc={'/projects-img/project-img-anthonys.png'}
                            imgAlt={"Anthony's Kitchen Project Feature Image"}
                            projectLink={'https://www.figma.com/design/fayZ19yd1NjTcOYgJ3muUs/anthonys-kitchen-wireframe?node-id=0-1&t=ncYrTT0i7GousQar-1'}
                            projectData={project}
                        />
                    </div>


                    {/* project Descriptions */}
                    <div className="project-details-section">
                        <ProjectDetailSection title={"Overview"}>
                            <p>This design challenge is part of my Web Design and Usability course from NAIT&apos;s
                                (former) Digital Media and I.T. program. </p>

                        </ProjectDetailSection>

                        <ProjectDetailSection title={"Challenge Statement"}>
                            <p className="italic text-h6 mt-1">&quot;Anthony would like you to design a landing page that would help <strong>engage</strong> visitors enough to regularly use his website for their recipe needs.&quot;</p>

                        </ProjectDetailSection>

                        <ProjectDetailSection title={"Ideation"}>
                            <p>On my research phase, I looked at popular recipe sites (like Tasty) and noted some design patterns. The websites I used for inspirations had common patterns like friendly faces, mouth-watering food images, recipe categories, and featured recipes from contributors.</p>


                            <p>And to keep the users engaged and encourage regular visitation, I decided to implement sections on the landing page that can potentially increase conversion. Sections include...</p>

                            <ol className="list-decimal pl-1">
                                <li>Weekly Featured Recipes</li>
                                <li>A call-to-action for users/community members to submit their recipes</li>
                                <li>Recipe catalogue section</li>
                                <li>A brief introduction to Chef Anthony</li>
                            </ol>
                        </ProjectDetailSection>


                        <ProjectDetailSection title={"Branding"}>

                            <p>My branding goal for Anthony&apos;s Kitchen is to evoke a sense of warmth, approachability, and trust. Hence, I opted to use a friendly second-person voice for the heading texts as if Anthony itself is talking to the users. </p>

                            <h4>Logo Story</h4>
                            <p>The logo features the brand name “anthony’s kitchen” in a cursive font like it was handwritten. It evokes a sense of &quot;personal touch&quot;, which reflects the overall purpose of the website— a platform where people can share their personal recipes. Behind the text is a chef’s hat adding a playful visual cue that signals that the website is all about food.</p>


                        </ProjectDetailSection>

                        <ProjectDetailSection title={"UX/UI design process"}>
                            <section>
                                <p>For the visual communication, I used warm pastel colors for a minimal and clean look. I also incorporated a lot of organic shapes to bring softness to the UI.</p>

                                <div className="mb-1 border border-solid border-gray-100 shadow-lg rounded-lg w-fit" >
                                    <Image
                                        src={"/projects-img/anthonys-kitchen-styleguide.png"}
                                        alt="Anthony's Kitchen Style Guide"
                                        width={1000}
                                        height={1000}
                                        className="w-full max-w-[600px] rounded-lg"
                                    />

                                </div>

                                <p>To increase conversion and enhance user experience, I included call-to-actions such as... </p>
                                <ol className="list-decimal pl-1">
                                    <li>Encouraging users to view the featured recipes of the week</li>
                                    <li>A button to take users to a page where they can submit their own recipes</li>
                                    <li>A section where users can browse recipes by categories or instantly search for a specific dish</li>
                                    <li>A brief introduction to Anthony and his achievements, prompting users to go follow his instagram page</li>
                                </ol>
                            </section>

                        </ProjectDetailSection>


                        <ProjectDetailSection title={"Results"}>
                            <p>Long story short, I got an A for this project and compliments on the attention to detail 😎</p>

                            <h4>Here is a preview of the desktop wireframe</h4>
                            <p>Yes! It is also mobile friendly. <a className="text-blue-300 hover:underline" target="_blank" href='https://www.figma.com/design/fayZ19yd1NjTcOYgJ3muUs/anthonys-kitchen-wireframe?node-id=0-1&t=ncYrTT0i7GousQar-1'>
                                Full project here
                            </a></p>


                            <div className="mb-1 border border-solid border-gray-100 shadow-lg rounded-lg w-fit" >
                                <Image
                                    src={"/projects-img/anthonys-kitchen-desktop-wireframe.png"}
                                    alt="Anthony's Kitchen dekstop wireframe"
                                    width={1000}
                                    height={1000}
                                    className="w-full max-w-[600px] rounded-lg"
                                />

                            </div>

                        </ProjectDetailSection>






                    </div>
                </div>
            </section>
        </main >

        <Footer />
    </>
}