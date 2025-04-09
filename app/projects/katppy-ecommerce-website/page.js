import Image from "next/image";
import Link from "next/link";
import { PROJECT_LIST } from "@/constants/ProjectList";


import Header from "@/components/Header"
import AnimatedBackground from "@/components/AnimatedBackground";
import ProjectDetailFeatImg from "@/components/ProjectDetailFeatImg";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import Footer from "@/components/Footer"




export default async function DESCalProjectPage() {
    const URLslug = "katppy-ecommerce-website";
    const project = PROJECT_LIST.find((project) => project.projectSlug === URLslug);

    return <>

        <Header />


        <main className="project-description-page mb-2">
            <div className="hidden md:lg:block">
                <AnimatedBackground />
            </div>

            <section className="container mx-auto px-1">
                <h2 className="text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">Katppy E-Commerce Website (Ongoing)</h2>

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
                        <ProjectDetailSection title={"Overview"}>
                            <p>Katppy is an online store that specializes in decoden DIY craft supplies such as kawaii resin charms, toy figures, crystal beads, and blind bag toys. </p>
                        </ProjectDetailSection>

                        <ProjectDetailSection title={"Goals"}>
                            <p className="mb-1" >This project is assigned for my DMIT Capstone Project at NAIT along with other two members.</p>
                            <p className="mb-1" ><strong>Role:</strong> Project Leader, Developer </p>
                            <p className="mb-1" >The goal of the project was to create a custom, visually appealing, and user-friendly WooCommerce store tailored to Katppy’s niche audience such as DIY crafters and collectors.</p>
                            <p className="mb-1">Additionally, our client wants to decrease the service cost of running an online shop, so she decides to switch from Etsy to WooCommerce.</p>

                            <strong>Personal Goal:</strong> 
                            <p className="mb-1">My personal goal for this project is to build a thousand-dollar looking e-commerce website to showcase in my portfolio.</p>
                        </ProjectDetailSection>


                        <ProjectDetailSection title={"Development"}>
                            <h4>Custom Theme Development</h4>

                            <h4>TailwindCSS Integration</h4>

                            <h4>WooCommerce Customization</h4>

                            <h4>Mailchimp Integration</h4>

                            <h4>Stripe Integration (In Progress)</h4>

                            <h4>Gmail SMTP Integration</h4>


                        </ProjectDetailSection>



                        <ProjectDetailSection title={"Preview"}>
                            <p>The shop is not live in public since we're still testing and migrating some products, so here is a preview of it</p>
                        </ProjectDetailSection>

                        <ProjectDetailSection title={"Results"}>
                            Successfully migrating the content into production.
                            Established a solid eCommerce foundation for the business to grow and scale product offerings.
                        </ProjectDetailSection>
                    </div>
                </div>
            </section>
        </main >

        <Footer />
    </>
}