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
                <h2 className="text-h4 lg:text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">Katppy E-Commerce Website</h2>

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
                            <p><strong>Role:</strong> Project Leader, Developer </p>
                            <p>I was assigned, along with other 2 members, to build this website as a part of our capstone project under NAIT&apos;s Digital Media & I.T. program.</p>
                            <p>Our client wants to decrease the service cost of running an online shop, so she decides to switch platform— from Etsy to WooCommerce.</p>
                            <p>The goal of the project was to create a custom, visually appealing, and user-friendly WooCommerce store tailored to Katppy’s niche audience such as DIY crafters and collectors.</p>

                            <strong>Personal Goal:</strong>
                            <p>My personal goal for this project is to build a thousand-dollar looking e-commerce website to showcase in my portfolio.</p>
                        </ProjectDetailSection>


                        <ProjectDetailSection title={"Development"}>
                            <p>My role as a lead developer is to ensure the technical requirement are met, while maintaining best practices. Such actions include developing a custom WordPress (with WooCommerce) support and integrating third-party services ( for email, payments, marketing).
                            </p>

                            <p>As the project leader, I make sure all deliverables are finishined in a timely manner.</p>

                            <p>I also collaborated with my design team and client to align decisions with Katppy’s branding and aesthetic.</p>

                            <h4>Custom Theme Development</h4>
                            <ul>
                                <li>Built the site using the Underscores (_s) WordPress starter theme for flexibility and performance</li>
                                <li>Developed custom plugins to showcase products and reviews on the landing page</li>
                            </ul>

                            <h4>TailwindCSS Integration</h4>
                            <ul>
                                <li>Utilized Tailwind CSS into the WordPress theme to rapidly build a clean and modern-looking user interfaces</li>
                            </ul>

                            <h4>WooCommerce Customization</h4>
                            <ul>
                                <li>Implemented AJAX filter and search bar to improve online shopping experience</li>
                            </ul>

                            <h4>Accessibility (WCAG) Enhancements</h4>
                            <ul>
                                <li>Followed WCAG standards by adding aria labels to improve screen reader support</li>
                                <li>Used semantic HTML and accessible navigation patterns</li>
                                <li>Applied accessible typography guidelines, including proper contrast ratios, scalable font sizes, and readable typefaces</li>
                            </ul>

                            <h4>Mailchimp Integration</h4>
                            <ul>
                                <li>Integrated Mailchimp for email marketing and customer retention</li>
                                <li>Prepared for future campaigns like welcome emails, new arrivals, and seasonal promos to keep the community engaged</li>
                            </ul>

                            <h4>Stripe Integration</h4>
                            <ul>
                                <li>Set up Stripe as the future payment gateway for seamless and secure checkout</li>
                                <li>Enabled express checkout like Apple Pay, and Google Pay options to improve the payment process speed</li>
                            </ul>

                            <h4>Gmail SMTP Integration</h4>
                            <ul>
                                <li>Configured Gmail SMTP for reliable and secure transactional email delivery</li>
                                <li>Ensured that contact form messages land in the inbox (not spam), supporting seamless customer communication</li>
                            </ul>
                        </ProjectDetailSection>



                        <ProjectDetailSection title={"Preview"}>
                            <p>The shop is not live in public since our client is still organizing some products, so here are some screenshots of it.</p>



                            <Link href="https://katppy.com/shop/?woo-share=EMDRTvvmS0PWiY5Y4App1ryGIEhxkOsv" target="_blank" className="text-blue-300 hover:underline  font-bold mb-1 inline-block">
                                Shop Preview Link
                            </Link>


                            <h4>Shop page preview:</h4>
                            <div className="mb-1 border border-solid border-gray-100 shadow-lg rounded-lg w-fit">
                                <Image
                                    src={"/projects-img/katppy-shop-page.png"}
                                    alt="katppy shop page preview"
                                    width={600}
                                    height={600}
                                    className="w-full max-w-[600px] rounded-lg"
                                />
                            </div>




                            <h4>Product detail page preview:</h4>
                            <div className="mb-1 border border-solid border-gray-100 shadow-lg rounded-lg w-fit">

                                <Image
                                    src={"/projects-img/katppy-product-detail-page.png"}
                                    alt="katppy shop page preview"
                                    width={600}
                                    height={600}
                                    className="w-full max-w-[600px] rounded-lg"
                                />

                            </div>



                            <h4>Order Confirmation Email via Gmail SMTP:</h4>
                            <div className="mb-1 border border-solid border-gray-100 shadow-lg rounded-lg w-fit">
                                <Image
                                    src={"/projects-img/order-email-sample.png"}
                                    alt="Email sample for order confirmation"
                                    width={600}
                                    height={600}
                                    className="w-full max-w-[600px] rounded-lg"

                                />
                            </div>
                        </ProjectDetailSection>

                        <ProjectDetailSection title={"Results"}>
                            <p>By building this website, we established a solid e-commerce foundation for the business to grow and scale product offerings. The shop also creates a personalized shopping experience for Katppy&apos;s customers.</p>
                        </ProjectDetailSection>
                    </div>
                </div>
            </section>
        </main >

        <Footer />
    </>
}