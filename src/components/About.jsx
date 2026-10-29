import { FaProjectDiagram, FaPalette, FaCompass, FaSeedling } from 'react-icons/fa'
import '../styles/About.css'

/* Edit the four traits here */
const traits = [
    {
        icon: FaProjectDiagram,
        title: 'Analytical mind',
        text: 'Finding patterns. Untangling complexity.',
    },
    {
        icon: FaPalette,
        title: 'Creative eye',
        text: 'Turning ideas into thoughtful experiences.',
    },
    {
        icon: FaCompass,
        title: 'Curious spirit',
        text: 'Exploring questions beyond the obvious.',
    },
    {
        icon: FaSeedling,
        title: 'Always evolving',
        text: 'Learning, experimenting, improving.',
    },
]

function About() {
    return (
        <section className="main1" id="about">
            <div className="container px-4">
                <div className="row">
                    <div className="col-lg-1 d-none d-lg-block" />

                    <div className="col-12 col-lg-10">
                        <div className="row g-5 align-items-center">

                            {/* Left: statement */}
                            <div className="col-12 col-lg-5">
                                <h2 className="mind-label">LOGIC · MATHEMATICS · CODE</h2>

                                <h3 className="mind-title">
                                    My mind runs on <span className="mind-mark">“why?”</span>
                                </h3>

                                <p className="mind-text">
                                    I’m fascinated by the logic hidden inside complex problems,
                                     the patterns that connect mathematical ideas,
                                      and the precision behind a well-written algorithm.
                                I enjoy breaking difficult challenges into smaller pieces,
                                 questioning assumptions, and finding solutions that are not just correct, but make sense
                                </p>

                                <p className="mind-closing">
                                    <span>Question everything.</span>
                                    <span>Trace the logic.</span>
                                    <span>Find the solution..</span>
                                </p>
                            </div>

                            {/* Right: trait tiles */}
                            <div className="col-12 col-lg-7">
                                <div className="mind-grid">
                                    {traits.map(({ icon: Icon, title, text }) => (
                                        <article className="mind-card" key={title}>
                                            <span className="mind-icon">
                                                <Icon aria-hidden="true" />
                                            </span>
                                            <h4 className="mind-card-title">{title}</h4>
                                            <p className="mind-card-text">{text}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-1 d-none d-lg-block" />
                </div>
            </div>
        </section>
    )
}

export default About