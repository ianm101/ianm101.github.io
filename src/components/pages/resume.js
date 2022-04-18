import React from 'react';
import ResumePDF from "../../documents/imurray_resume.pdf";

const Resume = () => {
    return (
        <div>
            <a href={ResumePDF} target="_blank">My resume</a>
        </div>
    );
}

// prop is the logo to pass in
const ResumeDownload = (props) => {
    return 
}

export default Resume;