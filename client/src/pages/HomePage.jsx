import React from 'react'
import ResumeHandler from '../components/ResumeHandler';
import TextExtractor from '../components/TextExtractor';

function Homepage() {
  return (
    <div>
        <h3>Result</h3>
        <TextExtractor/>
        <h2>Skill Matcher</h2>
        <ResumeHandler/>
    </div>
  )
}

export default Homepage