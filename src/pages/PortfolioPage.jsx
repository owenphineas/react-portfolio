function Project(props) {
    return (
        <div className="projects">
            {props.projects.map(item => (
                <div className="project-item" key={item.id}>
                    {item.projectName}
                </div>
            ))}
        </div>
    )
}

export default Project;