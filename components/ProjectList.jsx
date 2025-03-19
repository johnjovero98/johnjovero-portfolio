import Image from "next/image"
import Link from "next/link"

import ProjectTechList from "./ProjectTechList"


export default function ProjectList({ ProjectList }) {
    return <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 ">

        {
            ProjectList.map((project, index) => {
                return <li key={project.projectSlug} className="project-list-card ">

                    <Link href={`/${project.projectSlug}`}>
                        <div>
                            <Image
                                src={`/projects-img/${project.projectFeatImage}`}
                                width={426}
                                height={341}
                                alt={`${project.projectTitle} feature image thumbnail`}
                                className="w-full border border-gray-200 rounded-lg mb-[10px]"
                            />
                        </div>

                        <h3 className="font-bold text-h6 mb-[10px]">{project.projectTitle}</h3>

                        <ProjectTechList projectTechList={project.projectTech} />
                    </Link>
                </li>
            })
        }


    </ul>
}