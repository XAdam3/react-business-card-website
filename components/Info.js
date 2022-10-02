import React from "react"

export default function Info(){
    return (
        <>
        <img className="image" src="../Dev-Adam.jpg" alt="A Photo of Adam Smiling"/>
     <div className="content">
        <div className="info">
            
            <h2 className="title">Adam Assalimy</h2>
            
            <h4 className="subtitle">Graphic Designer<br/>Frontend Developer</h4>
            
            <a className="website-link" href="https://dev-adam.netlify.app">AdamAssalimy.Website</a>
            
            <div className="btns">
        
                <a className="email-link" href="mailto:graphicdesigneradam3@gmail.com">
              
                    <i className="fa-solid fa-envelope"></i>
                  Email
                </a>    
                
                <a className="linkedin-link" target="_blank" href="https://www.linkedin.com/in/adamassalimy/">
                
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </div>
            </div>
        
        </div>
        </>
    )
}

