import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          My name is Austin Davis. I am a twenty-six year old student studying computer science. Although I am new to computer science. I am hardworking, punctual, and always give all my effort to the task at hand. I do my very best to be a valued member of the team. Im very excited to continue my path in computer science and cant wait to start my carrer as a Front-end Developer! A little about me. I currently live in Lincolnton North Carolina. Outside of school my hobbies include music and painting. Music is my main passion. I currently play in two bands as a vocalist and guitarist. My primary band just wrapped up recording our first E.P. which we are excited to realase soon. Im very excited to see how my skills in web developement and music will intermingle.
        </p>
      </div>
    </section>
  )
}

export default About

