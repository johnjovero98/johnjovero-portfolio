import Image from "next/image"


export default function SkillsList() {
    return <div className="skills grid gap-1 md:grid-cols-2">
        {/* frontend */}
        <div className="skills-card">
            <div className="skills-card-icon shrink-0">
                <Image
                    src={`/img/skill-frontend-icon.png`}
                    width={100}
                    height={100}
                    alt="monitor icon"
                    className="w-full p-[15px]"
                />

            </div>

            <div>
                <h3>Frontend</h3>
                <h4>The Fundamentals:</h4>
                <ul>
                    <li>Semantic HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES6)</li>
                </ul>


                <h4>JS Frameworks:</h4>
                <ul>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>NEXT JS</li>
                </ul>

                <h4>CSS Frameworks:</h4>
                <ul>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                </ul>

                <h4>Backend Communication:</h4>
                <ul>
                    <li>RESTful API (Fetch)</li>
                </ul>
            </div>
        </div>

        {/* backend */}
        <div className="skills-card">
            <div className="skills-card-icon shrink-0">
                <Image
                    src={`/img/skill-backend-icon.png`}
                    width={120}
                    height={120}
                    alt="monitor icon"
                    className="w-full p-[15px]"
                />

            </div>

            <div>
                <h3>Backend</h3>
                <h4>Scripting:</h4>
                <ul>
                    <li>PHP</li>
                </ul>


                <h4>Databasing:</h4>
                <ul>
                    <li>SQL</li>
                    <li>RDBMS (PHPMyAdmin, MS SQL Server)</li>
                </ul>

                <h4>CMS:</h4>
                <ul>
                    <li>Wordpress</li>
                </ul>

                <p className="text-balance">(I’m more of a front-end developer, but I’m always open to learn and enhance my backend skills.)</p>
                <p>Goal: learn Laravel with Vue</p>

            </div>
        </div>



        {/* UX/UI design */}
        <div className="skills-card">
            <div className="skills-card-icon shrink-0">
                <Image
                    src={`/img/skill-design-icon.png`}
                    width={120}
                    height={120}
                    alt="monitor icon"
                    className="w-full p-[15px]"
                />

            </div>


            <div>
                <h3>UX/UI Design</h3>

                <h4>Tools:</h4>
                <ul>
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                </ul>

                <h4>Concepts:</h4>
                <ul>
                    <li>Wireframing</li>
                    <li>Graphic Design</li>
                    <li>Layout Design</li>
                    <li>Typography</li>
                    <li>Design Patterns</li>
                    <li>User Personas</li>
                    <li>User Flow</li>
                    <li>Information Architecture</li>
                </ul>
            </div>
        </div>

        {/* Other Tools */}
        <div className="skills-card">
            <div className="skills-card-icon shrink-0">
                <Image
                    src={`/img/skill-others-icon.png`}
                    width={120}
                    height={120}
                    alt="monitor icon"
                    className="w-full p-[15px]"
                />

            </div>

            <div>

                <h3>Other Tools</h3>

                <h4>Version Control:</h4>
                <ul>
                    <li>Git</li>
                    <li>Github</li>
                </ul>

                <h4>Project Management:</h4>
                <ul>
                    <li>Trello</li>
                    <li>MS Teams</li>
                </ul>

                <h4>Additional:</h4>
                <ul>
                    <li>"Proficient" in Excel</li>
                    <li>Chocolate cookie enthusiast</li>
                </ul>
            </div>
        </div>
    </div>
}

