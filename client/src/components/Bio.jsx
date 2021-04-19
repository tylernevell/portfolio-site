import React from 'react';

function Bio() {
    return (
        <div className="bio">
            <h3 className="job-title">Software Engineer</h3>
            <p>
                Hi there,
            </p>
            <p>
                I am currently seeking Software Engineer positions in Web Development. Proficient in&nbsp;
                <span className="bold"> React</span>, &nbsp;
                <span className="bold">Node</span>, &nbsp;
                <span className="bold">Express</span>, &nbsp;
                <span className="bold">MongoDb/Mongoose</span>, &nbsp;
                <span className="bold">EJS</span>, &nbsp;
                <span className="bold">CSS</span>, &nbsp;
                <span className="bold">HTML</span>
                , and &nbsp;
                <span className="bold">OAuth2.0</span>.
            </p>
            <p>
                I have dual degrees in Marketing and Computer Science from the University
                of Colorado and experience in both the front-end and back-end of web
                development. I have a passion for learning and believe that the best way
                to live life is to search for new ways to grow as a person.
            </p>
            <p>
                With previous experience in the professional world and a strong foundation in
                Data Structures, Algorithms, and Software Development techniques, I will bring
                to your office a rounded, intelligent, and personable mind to fit that important
                role you are trying to fill.
            </p>
            <p className="helpful-links">
                <a href="TylerNevell_resume_2021_safe.pdf" style={{color: "white", textDecoration: "none"}} download>
                    <i style={{fontSize: "25px"}} className="far fa-file-alt" />&nbsp; &nbsp; <span className="link">Grab a copy of my résumé!</span>
                </a>
            </p>
            <p className="helpful-links">
                <a href="mailto:tylernevelljobs@gmail.com" style={{color: "white", textDecoration: "none"}}>
                    <i style={{fontSize: "23px"}} className="far fa-envelope" /> &nbsp; <span className="link">Send over an email about Job Opportunities!</span>
                </a>
            </p>
        </div>
    );
}

export default Bio;