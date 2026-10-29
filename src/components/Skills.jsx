import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
    FaDatabase, FaFlask, FaGitAlt, FaFigma, FaBrain,
} from 'react-icons/fa'
import '../styles/Skills.css'

const skills = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Python', icon: FaPython },
    { name: 'MySQL', icon: FaDatabase },
    { name: 'Flask', icon: FaFlask },
    { name: 'Git', icon: FaGitAlt },
    { name: 'UI/UX', icon: FaFigma },
    { name: 'AI/ML', icon: FaBrain },
]

function Skills() {
    return (
        <section className="skills-section" id="skills">
            {/* decorative background shapes */}
            <div className="skills-circle-left" aria-hidden="true" />
            <div className="skills-circle-right" aria-hidden="true" />

            <div className="container px-4">
                <div className="row">
                    <div className="col-lg-1 d-none d-lg-block" />
                    <div className="col-12 col-lg-10">
                        <h2 className="skills-title">MY SKILLS</h2>

                        <ul className="skills-list">
                            {skills.map(({ name, icon: Icon }) => (
                                <li className="skill-item" key={name}>
                                    <div className="skill-tile">
                                        <Icon aria-hidden="true" />
                                    </div>
                                    <span className="skill-name">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block" />
                </div>
            </div>
        </section>
    )
}

export default Skills