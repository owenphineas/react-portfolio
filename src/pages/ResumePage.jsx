function Resume () {
    return <div className="resume">
        <div className="resume-headers">
            <h4 className="education-label">Education</h4>
            <h4 className="languages-label">Languages and frameworks</h4>
            <h4 className="technologies-label">Technologies</h4>
        </div>
        <div className="column">
            <div className="colleges">
                <div>
                    <p className="bold">Hamline University, Saint Paul, Minnesota</p>
                    <p>BA, English, May 2022</p>
                </div>
                <div>
                    <p className="bold">University of Minnesota, Minneapolis, Minnesota</p>
                    <p>Certificate, Full Stack Web Development, July 2024</p>
                </div>
            </div>
            <div>
                <ul className="resume-list languages">
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
                <ul className="resume-list technologies">
                    <li>SQL</li>
                    <li>Node</li>
                    <li>MongoDB/Mongoose</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>
        <div className="buffer-right"></div>
    </div>
}

export default Resume;