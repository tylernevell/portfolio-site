import React from 'react';

function ProjectSquare(props) {
    // const [isHover, setIsHover] = useState(false);
    //
    // function hello() {
    //     console.log("Mouse entered.");
    // }

    return (
        <a href={props.project.linkString} target="_blank" rel="noopener noreferrer">
                <div className="project-box">
                    <div className="project-text">
                        <h3 className="project-title">{props.project.name}</h3>
                        <p className="project-description">{props.project.description}</p>
                    </div>
                    <img src={props.project.imgString} alt={props.project.imgString} />
                </div>


        </a>
    );
}

export default ProjectSquare;