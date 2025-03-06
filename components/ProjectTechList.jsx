export default function ProjectTechList({ projectTechList }) {


    return <ul className="flex flex-wrap gap-[5px]">
        {
            projectTechList.map((projectTech, index) => {
                return <li key={index} className="bg-blue-500 text-white text-small px-1 rounded-full">
                    {projectTech}
                </li>
            })
        }
    </ul>
}