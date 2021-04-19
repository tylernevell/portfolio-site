import React from 'react';

function ProjectSquare(props) {
    return (
        <a href={props.project.linkString} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
            <div className="box" style={{backgroundImage: `url(${props.project.imgString})`, backgroundPositionX: "-80px"}}>
                <p>{props.project.name}</p>
                <p>Test</p>
            </div>
        </a>
    );
}

export default ProjectSquare;