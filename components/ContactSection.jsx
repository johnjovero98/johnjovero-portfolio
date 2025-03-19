import Image from "next/image"
import ContactForm from "./ContactForm"

export default function ContactSection() {

    return <>

        <div className="flex gap-2 flex-col lg:flex-row">


            <div className="lg:w-1/2">
                <h2 className="font-bold mb-1  text-h4 md:text-h3 text-blue-300 text-balance">Let’s talk about web stuff!</h2>
                <p className="mb-1">Fill out the the form provided if you have any inquiries. I’m open always for any exciting opportunities that will foster meaningful collaborations.</p>
                <ul>

                    <li className="mb-1">
                        <strong>Location:</strong>
                        <p>Based in Edmonton, AB (open for relocation)</p>
                    </li>

                    <li className="mb-1">
                        <strong>Email:</strong>
                        <p>john.jovero@outlook.com (or use the form provided)</p>
                    </li>
                </ul>

                <div className="flex justify-center">
                    <Image
                        src={`/img/rocket-launch.png`}
                        width={163}
                        height={163}
                        alt="graphic image of a rocket"
                    />
                </div>
            </div>


            {/* contact form */}
            <ContactForm />
        </div>


    </>
}