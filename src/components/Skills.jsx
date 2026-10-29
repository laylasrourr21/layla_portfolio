import { useState } from 'react'
import {
    FaJava, FaPython, FaPhp, FaCubes, FaJs,
    FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaSyncAlt,
} from 'react-icons/fa'
import {
    SiCplusplus, SiDart, SiJquery, SiNextdotjs, SiNestjs,
    SiFlutter, SiFlask, SiArduino,
} from 'react-icons/si'
import '../styles/Skills.css'

/* Edit categories and skills here.
   `file` is the cute file name shown on the tab, `title` is the real category name. */
const categories = [
    {
        id: 'languages',
        file: 'languages.js',
        lang: 'JavaScript',
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: FaJava },
            { name: 'Python', icon: FaPython },
            { name: 'PHP', icon: FaPhp },
            { name: 'OOP', icon: FaCubes },
            { name: 'C++', icon: SiCplusplus },
            { name: 'JavaScript', icon: FaJs },
            { name: 'Dart', icon: SiDart },
        ],
    },
    {
        id: 'web',
        file: 'web.jsx',
        lang: 'React JSX',
        title: 'Web Development',
        skills: [
            { name: 'HTML', icon: FaHtml5 },
            { name: 'CSS', icon: FaCss3Alt },
            { name: 'Bootstrap', icon: FaBootstrap },
            { name: 'jQuery', icon: SiJquery },
            { name: 'AJAX', icon: FaSyncAlt },
            { name: 'React', icon: FaReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'Nest.js', icon: SiNestjs },
        ],
    },
    {
        id: 'mobile',
        file: 'mobile.dart',
        lang: 'Dart',
        title: 'Mobile Development',
        skills: [
            { name: 'Flutter', icon: SiFlutter },
            { name: 'Dart', icon: SiDart },
        ],
    },
    {
        id: 'ml',
        file: 'ml.py',
        lang: 'Python',
        title: 'Machine Learning',
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'Flask', icon: SiFlask },
        ],
    },
    {
        id: 'hardware',
        file: 'robotics.ino',
        lang: 'Arduino C++',
        title: 'Hardware & Robotics',
        skills: [
            { name: 'Arduino Uno', icon: SiArduino },
            { name: 'C++', icon: SiCplusplus },
        ],
    },
]

function Skills() {
    const [active, setActive] = useState(0)
    const current = categories[active]

    // Left / Right arrow keys move between tabs
    const onKeyDown = (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
        e.preventDefault()
        const step = e.key === 'ArrowRight' ? 1 : -1
        const next = (active + step + categories.length) % categories.length
        setActive(next)
        document.getElementById(`skills-tab-${categories[next].id}`)?.focus()
    }

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

                        {/* Editor window */}
                        <div className="editor">

                            {/* Title bar: window dots + file tabs */}
                            <div className="editor-bar">
                                <div className="editor-dots" aria-hidden="true">
                                    <span className="dot dot-clay" />
                                    <span className="dot dot-gold" />
                                    <span className="dot dot-olive" />
                                </div>

                                <div
                                    className="editor-tabs"
                                    role="tablist"
                                    aria-label="Skill categories"
                                    onKeyDown={onKeyDown}
                                >
                                    {categories.map((cat, i) => (
                                        <button
                                            key={cat.id}
                                            id={`skills-tab-${cat.id}`}
                                            type="button"
                                            role="tab"
                                            aria-selected={i === active}
                                            aria-controls="skills-panel"
                                            tabIndex={i === active ? 0 : -1}
                                            className={`editor-tab${i === active ? ' is-active' : ''}`}
                                            onClick={() => setActive(i)}
                                        >
                                            {cat.file}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Panel */}
                            <div
                                className="editor-body"
                                id="skills-panel"
                                role="tabpanel"
                                aria-labelledby={`skills-tab-${current.id}`}
                            >
                                <div key={current.id}>
                                    <p className="editor-comment">// {current.title}</p>

                                    <ul className="skills-list">
                                        {current.skills.map(({ name, icon: Icon }, i) => (
                                            <li
                                                className="skill-item"
                                                key={name}
                                                style={{ '--i': i }}
                                            >
                                                <div className="skill-tile">
                                                    <Icon aria-hidden="true" />
                                                </div>
                                                <span className="skill-name">{name}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="editor-cursor" aria-hidden="true" />
                                </div>
                            </div>

                            {/* Status bar */}
                            <div className="editor-status">
                                <span><i className="status-dot" aria-hidden="true" /> {current.skills.length} skills loaded</span>
                                <span className="d-none d-sm-inline">{current.lang}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block" />
                </div>
            </div>
        </section>
    )
}

export default Skills