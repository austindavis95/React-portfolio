import React from 'react';
import HygieiaFitness from '../../assets/images/Hygieia-demogif.gif';
import Kozmazuul from '../../assets/images/Kozmazuul-Demo.gif';
import BringTheTech from '../../assets/images/BringTheTech-demo.gif';
import CATastrophic from '../../assets/images/catp.jpeg';
import MyPortfolio from '../../assets/images/my-first-portfolio-gif.gif';
function Gallery(props) {
  
  return (
    <div id="portfolio">
    <h1 className='text-underline'>
      Portfolio
    </h1>
    <section>
      <h2 className='HygieiaFitness'>
        Hygieia Fitness 
      </h2>
      <p className='subtitle'> React, Node.js</p>
          <img alt="HygieiaFitness" src={HygieiaFitness} />
      
      <a href="https://hygieia-fitness-p3g6.herokuapp.com/"> Click me to view site!

      </a>

      <a href="https://github.com/PGCranford/Hygieia-Fitness"> view source code

      </a>
    </section>
    <section>
      <h2 className='kozmazuul'>
        Køzmazuul
      </h2>
      <p className='subtitle'> HTM, CSS & JavaScript</p>
          <img alt="Kozmazuul" src={Kozmazuul} />
      
      <a href="https://austindavis95.github.io/Kozmazuul/"> Click me to view site!

      </a>

      <a href="https://github.com/austindavis95/Kozmazuul"> view source code

      </a>
    </section>
    <section>
      <h2 className='bring-the-tech'>
        BringTheTech
      </h2>
      <p className='subtitle'> Node, Express, Handlebars, HTML, CSS, JavaScript, MySQL & Sequelize ORM</p>
          <img alt="BringTheTech" src={BringTheTech} />
      
      <a href="https://limitless-dusk-20283.herokuapp.com"> Click me to view site!

      </a>

      <a href="https://github.com/Mckinleyfaustin/BringTheTech"> view source code

      </a>
    </section>
    <section>
      <h2 className='catastrophic'>
        CATastrophic
      </h2>
      <p className='subtitle'> HTML, CSS, Bulma Framework, JavaScript, CATAAS API & Cat-Fact API</p>
          <img alt="CATastrophic" src={CATastrophic} />
      <a href="https://hollenbebe08.github.io/project-catastrophic/"> Click me to view site!

      </a>

      <a href="https://github.com/hollenbebe08/project-catastrophic"> view source code

      </a>
    </section>
    <section>
      <h2 className='my-portfolio'>
        My first Portfolio!
      </h2>
      <p className='subtitle'> HTM, CSS & JavaScript</p>
          <img alt="MyPortfolio" src={MyPortfolio} />
      
      <a href="https://austindavis95.github.io/my-first-portfolio"> Click me to view site!

      </a>

      <a href="https://github.com/austindavis95/my-first-portfolio"> view source code

      </a>
    </section>
    </div>
  );
}
export default Gallery;