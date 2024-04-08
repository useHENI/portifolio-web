import React from 'react'
import "./resume.css";
import pdf from './Resume.pdf';



function Resume() {
  return (
    <section>
            
        
        <iframe src={pdf} width="100%" height="775" frameborder="0"></iframe> 
        
    
    </section>
  )
}

export default Resume;