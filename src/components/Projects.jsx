import { FaArrowRight } from 'react-icons/fa'
import '../styles/Projects.css'
import projects from './ProjectData'
import { Link } from 'react-router-dom'
function Project() {
    return (
        <section className="projects-section" id="projects">
            <div className="container px-4">
                <div className="row">
                    <div className="col-lg-1 d-none d-lg-block" />

                    <div className="col-12 col-lg-10">

                        {/* Header */}
                        <div className="projects-head">
                            <h2 className="projects-title">FEATURED PROJECTS</h2>
                            <Link to="/projects/0" className="projects-all">
                                View All Projects <FaArrowRight aria-hidden="true" />
                            </Link>
                        </div>

                        {/* Cards */}
                        <div className="projects-grid">
                            {projects.slice(0, 3).map((project) => {
                                const image = project.images?.[0]
                                const tags = project.tags || project.tech || []
                                const href = project.link || project.github || null
                                const Card = href ? 'a' : 'div'
                                const cardProps = href
                                    ? { href, target: '_blank', rel: 'noreferrer' }
                                    : {}

                                return (
                                    <Card
                                        key={project.id}
                                        className={`project-card${href ? ' is-link' : ''}`}
                                        {...cardProps}
                                    >
                                        <div className="project-media">
                                            {image ? (
                                                <img src={image} alt={project.name} loading="lazy" />
                                            ) : (
                                                <span className="project-fallback" aria-hidden="true">
                                                    {project.name?.charAt(0)}
                                                </span>
                                            )}
                                        </div>

                                        <div className="project-body">
                                            <div className="project-top">
                                                <h3 className="project-name">{project.name}</h3>
                                                <span className="project-arrow" aria-hidden="true">
                                                    <Link to="/projects/{project.id}" ><FaArrowRight /></Link>
                                                </span>
                                            </div>

                                            <p className="project-desc">{project.short_description}</p>

                                            {tags.length > 0 && (
                                                <ul className="project-tags">
                                                    {tags.map((tag) => (
                                                        <li key={tag}>{tag}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-lg-1 d-none d-lg-block" />
                </div>
            </div>
        </section>
    )
}

export default Project