import React from 'react'
import {BsInstagram, BsGithub} from 'react-icons/bs'
import {FaShareAlt, FaLinkedinIn} from 'react-icons/fa'
import {GrDocumentUser} from 'react-icons/gr'



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/meet-patel2580/" target="_blank" rel="noreferrer noopener">
            <FaLinkedinIn/>
          </a>
        </div>
        <div>
          <a href="https://github.com/Meet-Patel2580" target="_blank" rel="noreferrer noopener">
            <BsGithub/>
          </a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/17RMw_jwaudqwuPrPoAgVAsNKMDKUURBz/view?usp=sharing" target="_blank" rel="noreferrer noopener">
          <GrDocumentUser/>
          </a>
        </div>
        
      
    </div>
  )
}

export default SocialMedia
