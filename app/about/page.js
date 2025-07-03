import Image from "next/image"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function AboutPage() {
    return <>
        <Header />

        <main className="about-page">
            <div className="container mx-auto max-w-5xl p-1 min-h-[100dvh]">
                <div className="hidden md:lg:block">
                    <AnimatedBackground />
                </div>

                <h2 className="text-h4 lg:text-h2 font-bold text-balance mt-2 mb-2 text-blue-300 text-center">Get to know me a bit more</h2>

                <div className="flex gap-2 flex-col lg:flex-row items-start">
                    {/* about page img */}
                    <div className="lg:w-[25%] lg:sticky lg:top-[10.5rem]">
                        <Image
                            src={'/img/about-page-img.jpg'}
                            width={1000}
                            height={1000}
                            className="about-img shadow-blue-300 w-full object-cover rounded-full"
                            alt="Picuture of John working from home"
                        />
                    </div>


                    {/* about page description */}
                    <section className="lg:w-[75%]">
                        <h3>How I got into web dev</h3>
                        <p>I’ve always been tech-savvy and have loved working with computers since I was a kid. My first web development experience was editing the HTML and CSS code of my Tumblr and MySpace themes. I enjoyed making my profile look aesthetically pleasing. I even copied and pasted code to put a music player on it! However, it was just a hobby at that time.</p>


                        <p>Initially, I chose to pursue a degree in accounting at the University of Alberta. Long story short…  I mostly use the knowledge I gained from it to do my taxes. To be honest, I was not fully engaged with accounting and can’t see myself having a long-term career in it.</p>

                        <h3>FAQ: At what moment did you make the path switch?</h3>


                        <p>3rd year into my studies, I declared Management Information Systems as a minor. It sparked my interest in technology again. I learned the fundamentals of programming, databasing, system analysis and design, analytics, and more “nerdy tech stuff.” I was particularly fond of the E-Commerce course I took, where I designed wireframes and built a website using WordPress.</p>

                        <p>(Random fact: I started programming formally with Python. I plan to learn Django at some point.)</p>

                        <p>Shortly after graduating, I took a risk by going back to school again. I chose to study at NAIT, taking their DMIT-Web Development and Design program with the hopes of expanding my knowledge in web development technologies. It’s been a great academic journey from there!</p>


                        <p>I am fully engaged in my web development courses, where I have had the opportunity to design and build websites using modern technologies like Next.js. Recently, I successfully completed my DMIT Capstone Project, which allowed me to gain practical experience by working with industry clients and applying what I learned in the classroom to real-world scenarios.</p>

                        <p>Now, I find web development is the right career path for me because I get to be creative and technical at the same time.</p>

                        <h3>Now let’s briefly switch gears into my personal life and hobbies</h3>
                        <p>Outside smashing my keyboard while debugging JavaScript codes, I love to go on adventures by travelling, hiking, kayaking, and aurora chasing. I also like staying active by working out at the gym and taking a stroll in the river valley. It’s a good way to keep my back healthy, given how this career path calls for prolonged sitting.</p>
                        
                        <p className="font-bold">Some cool pics I took on my adventures:</p>
                        <div className="columns-2 md:columns-3 gap-[.5rem] space-y-[.5rem]">
                            <Image className="w-full rounded-lg" width={300} height={300} src={'/img/about-aurora.jpg'} alt="picture of aurora" />
                            <Image className="w-full rounded-lg" width={300} height={300} src={'/img/about-mountains.jpg'} alt="picture of snowy mountain trail" />
                            <Image className="w-full rounded-lg" width={300} height={300} src={'/img/about-museum.jpg'} alt="picture of louvre interior" />
                            <Image className="w-full rounded-lg" width={300} height={300} src={'/img/about-mountains2.jpg'} alt="picture of lake agnes on a snowy day" />
                            <Image className="w-full rounded-lg" width={300} height={300} src={'/img/about-plane.jpg'} alt="picture of a window seat plane with clouds" />
                            <Image className="w-full rounded-lg" width={300} height={300} src={'/img/about-edmonton.jpg'} alt="picture of a edmonton skyline at night" />
                        </div>
                    </section>
                </div>
            </div>
        </main>
        

        <Footer />
    </>
}