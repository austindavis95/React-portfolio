import React from 'react';

function Gallery(props) {
  
  return (
    <div id="portfolio">
    <h1>
      Portfolio
    </h1>
    <section>
      <h2 className='portfolio-title'>
        Køzmazuul
      </h2>
      
      HTM, CSS & JavaScript
      
      <a href="https://austindavis95.github.io/Kozmazuul/"> view demo

      </a>

      <a href="https://github.com/austindavis95/Kozmazuul"> view source code

      </a>
    </section>
    <section>
      <h2 className='portfolio-title'>
        BringTheTech
      </h2>
      Node, Express, Handlebars, HTML, CSS, JavaScript, MySQL & Sequelize ORM
      <a href="https://limitless-dusk-20283.herokuapp.com"> view demo

      </a>

      <a href="https://github.com/Mckinleyfaustin/BringTheTech"> view source code

      </a>
    </section>
    <section>
      <h2 className='portfolio-title'>
        CATastrophic
      </h2>
      HTML, CSS, Bulma Framework, JavaScript, CATAAS API & Cat-Fact API
      <a href="https://"> view demo

      </a>

      <a href="https://"> view source code

      </a>
    </section>
    </div>
  );
}
export default Gallery;