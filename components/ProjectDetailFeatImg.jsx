import Image from "next/image";
import Link from "next/link";
import ProjectTechList from "./ProjectTechList";



export default function ProjectDetailFeatImg({ imgSrc, imgAlt, projectLink, projectData }) {
    return <>

        <div className="flex justify-center w-full">
            <Image
                src={imgSrc}
                alt={imgAlt}
                width={2000}
                height={1181}
                className="mb-1 lg:max-w-[400px]"
            />
        </div>
        <div className="technologies">
            <ProjectTechList projectTechList={projectData.projectTech} />

            <Link href={projectLink} target="_blank" className="cta-button mt-1">
                See this project in action
            </Link>
        </div>

    </>
}