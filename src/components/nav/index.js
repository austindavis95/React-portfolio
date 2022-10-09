import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="guitar"> 🎸 </span> Austin Davis
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>

          
          <li className="mx-2">
            <a data-testid="contact" href="#contact" onClick={() => setContactSelected(false)}>
              Contact Me
            </a>
          </li>
          

        
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          
          <li className="mx-2">
            <a data-testid="resume" href="https://docs.google.com/document/d/1U7qVsWVwF4Z0S1K0xie9Jdhnupf-XNPezYCLKh90JfE/edit?usp=sharing" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;