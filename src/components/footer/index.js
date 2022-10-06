import React from 'react';
import ReactLogo from '../../assets/images/logo192.png';
import Spotify from '../../assets/images/spotify-logo.svg';
import Github from '../../assets/images/github-icon-transparent.png';
import Resume from '../../assets/images/icons8-resume-100.png';
import Linkedin from '../../assets/images/linkedin-icon.png';
import Instagram from '../../assets/images/instagram-logo.svg';
import Phone from '../../assets/images/phone-icon.png';
import Email from '../../assets/images/email-icon.png';


function Footer(props) {
    

  return (
    <footer id="contact" className="flex-row px-1">
        <div>
          <h2>Built with React<img className='react-logo' alt='ReactLogo' src={ReactLogo}></img> </h2>
        
            <a href="mailto:austin.coding@gmail.com"><img className='social-icons white-icons' alt='email-logo' src={Email}></img></a> 
                   
                    <a href="tel:980.241.4194"><img className='social-icons white-icons' alt='cell-logo' src={Phone}></img></a>
                    <a href="https://www.instagram.com/capt.mischeif_95/" target={'_blank'} rel="noreferrer"><img className='social-icons white-icons' alt='instagram logo' src={Instagram}></img></a>
                    <a href="https://docs.google.com/document/d/1U7qVsWVwF4Z0S1K0xie9Jdhnupf-XNPezYCLKh90JfE/edit?usp=sharing" target={'_blank'} rel="noreferrer"><img className='social-icons' alt='resume icon' src={Resume}></img> Resume</a>
                    <a href="https://github.com/austindavis95" target={'_blank'} rel="noreferrer"><img className='social-icons white-icons' alt='github logo' src={Github}></img> Github</a>
                    <a href="https://open.spotify.com/user/1214582229" target={'_blank'} rel="noreferrer"><img className='social-icons white-icons' alt='spotify logo' src={Spotify}></img> Spotify</a>
                    <a href=" https://www.linkedin.com/in/austin-davis-8570a6239/" target={'_blank'} rel="noreferrer"><img className='social-icons' alt='linkedin icon' src={Linkedin}></img>  Linkedin</a>
                  
                </div>
  



         
        
      
    </footer>
  );
}


export default Footer;




