import Image from "next/image"


export default function HeroBanner() {
    return <div className="flex flex-col lg:flex-row gap-1 px-1 py-3  items-center container mx-auto">

        {/* introduction */}
        <div className=" lg:w-[60%]">
            {/* Introduction */}
            <div>
                <h2 className="text-h6  md:text-h4 font-bold mb-1" >Hello! I'm John</h2>
                <p className="text-h4 md:text-h2 font-bold mb-1 text-balance">
                    <span className="text-blue-300">Web Developer </span>& <span className="text-blue-300">UX/UI Designer</span>
                </p>
                <p className="mb-1 text-balance">Enthusiastic about <strong>building web applications that enhance users’ digital experience</strong>. I always put myself in the position of users when developing and testing my builds. </p>

                <p className="mb-1">Continuously striving for a<strong> pixel perfect</strong> and <strong>fully functional</strong> results</p>
            </div>


            {/* CTA */}
            <div className="flex flex-col md:flex-row gap-1">
                <a href="#projects" className="cta-button">Check out my works</a>
                <a href="/about" className="cta-button">Get to know me</a>
            </div>
        </div>


        {/* Image */}
        <div className="lg:w-[40%] ">
            <Image
                src={"/img/hero-image.png"}
                alt="John Jovero"
                width={481}
                height={540}
                className="lg:w-full"
            />
        </div>


    </div>
}