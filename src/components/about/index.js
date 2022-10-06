import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about" className="text-underline">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Full stack web developer with experience with HTMl, CSS, JavaScript, Mongoose, Node.js, and MySQL. I have just recently graduated from UNCCs full stack web development coding bootcamp. In which I learned new languages weekly and completed assignments that corresponded to the material I was currently learning. As well as working as a team with my classmates to complete three individual full stack applications. That can be found on my Github as well as my portfolio.  Though I am new to web development, I am hardworking, work and communicate well with others, and I learn quickly. Thank you for your interest in my portfolio!
        </p>
      </div>
    </section>
  )
}

export default About

