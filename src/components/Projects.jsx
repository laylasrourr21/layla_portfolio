import '../styles/Projects.css'
import projects from './ProjectData'

function Project() {
    return (
        <div className="main1 container-fluid">

            {projects.slice(0, 3).map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>

                    <img
                        src={project.images[0]}
                        alt={project.name}
                        className='img-responsive'
                        style={{height:"200px",width:"200px"}}
                    />

                    <p>{project.short_description}</p>
                </div>
            ))}

        </div>
    )
}

export default Project