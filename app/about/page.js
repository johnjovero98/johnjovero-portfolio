import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function AboutPage() {
    return <>
        <Header />

        <main className="about-page">
            <div className="container mx-auto p-1 min-h-[100dvh]">
                <div className="hidden md:lg:block">
                    <AnimatedBackground />
                </div>


            </div>
        </main>

        <Footer />
    </>
}