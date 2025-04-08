
import Blinker from "./Blinker";

export default function ProjectDetailSection ({ title, children }) {
    return <section className="flex gap-[15px] items-baseline">
        <Blinker />
        <div>
            <h3 className="text-h4 font-bold text-blue-300">{title}</h3>
            <div className="project-details relative pb-1">
                <div className="pt-[.5rem]">
                    {children}
                </div>
            </div>
        </div>
    </section>

}