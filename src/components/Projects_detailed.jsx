import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight,
    FaGithub, FaExternalLinkAlt, FaTimes,
} from 'react-icons/fa'
import projects from './ProjectData'
import '../styles/Detailed.css'

/* ------------------------------------------------------------------
   Full details of one project (used in the side panel and on its own page)
------------------------------------------------------------------- */
function ProjectDetails({ project, Title = 'h2' }) {
    const [index, setIndex] = useState(0)

    const images = project.images || []
    const tags = project.tags || project.tech || []
    const paragraphs = String(project.detailed_description || '')
        .split(/\n\s*\n/)
        .filter(Boolean)

    const go = (step) => setIndex((i) => (i + step + images.length) % images.length)

    return (
        <div className="pj-details">
            {images.length > 0 && (
                <div className="pj-gallery">
                    <div
                        className="pj-stage"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (images.length < 2) return
                            if (e.key === 'ArrowRight') go(1)
                            if (e.key === 'ArrowLeft') go(-1)
                        }}
                    >
                        <img key={index} src={images[index]} alt={`${project.name} ${index + 1}`} />

                        {images.length > 1 && (
                            <>
                                <button type="button" className="pj-nav pj-prev" onClick={() => go(-1)} aria-label="Previous screenshot">
                                    <FaChevronLeft aria-hidden="true" />
                                </button>
                                <button type="button" className="pj-nav pj-next" onClick={() => go(1)} aria-label="Next screenshot">
                                    <FaChevronRight aria-hidden="true" />
                                </button>
                            </>
                        )}
                    </div>

                    {images.length > 1 && (
                        <div className="pj-dots">
                            {images.map((_, i) => (
                                <button
                                    type="button"
                                    key={i}
                                    className={`pj-dot${i === index ? ' is-active' : ''}`}
                                    onClick={() => setIndex(i)}
                                    aria-label={`Show screenshot ${i + 1}`}
                                    aria-current={i === index}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            <Title className="pj-details-title" id="pj-details-title">{project.name}</Title>

            {tags.length > 0 && (
                <ul className="pj-tags">
                    {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
            )}

            <div className="pj-text">
                {paragraphs.length > 0
                    ? paragraphs.map((text, i) => <p key={i}>{text}</p>)
                    : <p>{project.short_description}</p>}
            </div>

            {(project.github || project.link) && (
                <div className="pj-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="pj-btn">
                            <FaGithub aria-hidden="true" /> View code
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="pj-btn pj-btn-ghost">
                            <FaExternalLinkAlt aria-hidden="true" /> Live demo
                        </a>
                    )}
                </div>
            )}
        </div>
    )
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
function Detailed() {
    const { id } = useParams()
    const isAll = id === '0'

    const [selected, setSelected] = useState(null)
    const closeRef = useRef(null)
    const triggerRef = useRef(null)

    const selectedProjects = isAll
        ? projects
        : projects.filter((project) => String(project.id) === id)

    const openDetails = (project, e) => {
        triggerRef.current = e.currentTarget
        setSelected(project)
    }
    const closeDetails = () => {
        setSelected(null)
        triggerRef.current?.focus()
    }

    // Side panel: Escape closes it, page behind stops scrolling
    useEffect(() => {
        if (!selected) return
        closeRef.current?.focus()
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e) => e.key === 'Escape' && closeDetails()
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = previous
            window.removeEventListener('keydown', onKey)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <main className="pj-page">
            <div className="container px-4">
                <div className="row">
                    <div className="col-lg-1 d-none d-lg-block" />

                    <div className="col-12 col-lg-10">
                        

                        {/* ---------- All projects: 3 per row, no details ---------- */}
                        {isAll && (
                            <>
                                <header className="pj-head">
                                    <h1 className="pj-title">All projects</h1>
                                    <p className="pj-sub">{projects.length} projects. Pick one to see the details.</p>
                                </header>

                                <div className="pj-grid">
                                    {projects.map((project) => {
                                        const image = project.images?.[0]
                                        const tags = project.tags || project.tech || []
                                        return (
                                            <article className="pj-card" key={project.id}>
                                                <div className="pj-media">
                                                    {image
                                                        ? <img src={image} alt={project.name} loading="lazy" />
                                                        : <span aria-hidden="true">{project.name?.charAt(0)}</span>}
                                                </div>

                                                <div className="pj-body">
                                                    <h2 className="pj-name">{project.name}</h2>
                                                    <p className="pj-desc">{project.short_description}</p>

                                                    {tags.length > 0 && (
                                                        <ul className="pj-tags pj-tags-sm">
                                                            {tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
                                                        </ul>
                                                    )}

                                                    <button
                                                        type="button"
                                                        className="pj-more"
                                                        onClick={(e) => openDetails(project, e)}
                                                    >
                                                        Show details <FaArrowRight aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </article>
                                        )
                                    })}
                                </div>
                            </>
                        )}

                        {/* ---------- One project on its own page ---------- */}
                        {!isAll && selectedProjects.length > 0 && (
                            <div className="pj-single">
                                <ProjectDetails project={selectedProjects[0]} Title="h1" />
                            </div>
                        )}

                        {/* ---------- Not found ---------- */}
                        {!isAll && selectedProjects.length === 0 && (
                            <div className="pj-empty">
                                <h1>Project not found</h1>
                                <p>This project doesn't exist or may have been moved.</p>
                                <Link to="/" className="pj-btn">Back to home</Link>
                            </div>
                        )}
                    </div>

                    <div className="col-lg-1 d-none d-lg-block" />
                </div>
            </div>

            {/* ---------- Side panel with the details ---------- */}
            {selected && (
                <div className="pj-drawer" onClick={closeDetails}>
                    <aside
                        className="pj-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="pj-details-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            ref={closeRef}
                            className="pj-close"
                            onClick={closeDetails}
                            aria-label="Close details"
                        >
                            <FaTimes aria-hidden="true" />
                        </button>

                        <ProjectDetails key={selected.id} project={selected} />
                    </aside>
                </div>
            )}
        </main>
    )
}

export default Detailed