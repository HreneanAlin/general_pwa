import React from 'react';
import cvPDF from "../cv/CV_HreneanAlin_04102020.pdf"
function About(props) {
    return (
        <main className="about-container">
            <h1>This site was made using React.js</h1>
            <p>Check my CV <a href={cvPDF} without rel="noopener noreferrer" target="_blank">here</a></p>
        </main>
    );
}

export default About;