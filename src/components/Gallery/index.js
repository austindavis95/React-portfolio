import React from 'react';
import vault from '../../assets/content/vault.gif'
function Gallery(props) {
  
  return (
    <div id="portfolio">
    <h1>
      Portfolio
    </h1>
    <section>
      <h2 className='kozmazuul'>
        Køzmazuul
      </h2>
      <p className='subtitle'> HTM, CSS & JavaScript</p>
          <img alt="Kozmazuul" src={Kozmazuul} />
      
      <a href="https://austindavis95.github.io/Kozmazuul/"> view demo

      </a>

      <a href="https://github.com/austindavis95/Kozmazuul"> view source code

      </a>
    </section>
    <section>
      <h2 className='bring-the-tech'>
        BringTheTech
      </h2>
      Node, Express, Handlebars, HTML, CSS, JavaScript, MySQL & Sequelize ORM
      <a href="https://limitless-dusk-20283.herokuapp.com"> view demo

      </a>

      <a href="https://github.com/Mckinleyfaustin/BringTheTech"> view source code

      </a>
    </section>
    <section>
      <h2 className='catastrophic'>
        CATastrophic
      </h2>
      HTML, CSS, Bulma Framework, JavaScript, CATAAS API & Cat-Fact API
      <a href="https://hollenbebe08.github.io/project-catastrophic/"> view demo

      </a>

      <a href="https://github.com/hollenbebe08/project-catastrophic"> view source code

      </a>
    </section>
    </div>
  );
}
export default Gallery;