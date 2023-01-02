import React, {useState} from 'react'
import './Footer.scss';
import {images} from '../../constants'
import {client} from '../../client'
import {AppWrap, MotionWrap} from '../../wrapper'

const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message} = formData;
  const handleChangeInput = (e)=>{
    const{name,value} = e.target;
    setFormData({...formData,[name]: value})
  }

  const handleSubmit = ()=>{
    setLoading(true);

    const contact={
      _type:"contact",
      name: formData.name,
      email:email,
      message:message,
    }
    client.create(contact).then(()=>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
    <h2 className="head-text">Let's <span> Chat</span></h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:patelmeet2580@gmail.com" className="p-text">patelmeet2580@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel: 647-612-3630" className="p-text">647-612-3630</a>
      </div>
      </div>
{!isFormSubmitted?
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
      </div>
      <div className="app__flex">
        <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}/>
      </div>
      <div>
        <textarea 
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <button type="button" classname="p-text" onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    :
    <div>
      <h3 className="head-text">Thank You for getting in touch</h3>
    </div>
    }
   
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
