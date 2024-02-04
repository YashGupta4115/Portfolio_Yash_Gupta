import Navigation from '../navigationBar/navigation.component';
import './contact.styles.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const ContactMe = ()=>{
    return (
        <div id="contact"className='contact-container'>
            <Navigation/>
            <div className='contact-items-container'>
                <div className='contact-item-heading'>Contact Me</div>
                <div className='contact-items-components'>
                    <div className='contact-left-component'>
                        <span className='email-contact'><IoIosMail size={30}  className='icons'/>yashguptayashu2003@gmail.com</span>
                        <span className='phone-contact'><FaPhoneAlt size={30}  className='icons'/>6201461718</span>
                        <div className='social-icons-container'>
                            <a className='icon-links' href='https://github.com/YashGupta4115' target='_blank' rel="noreferrer"><FaGithub  size={30} className='icons'/></a>
                            <a className='icon-links' href='https://www.linkedin.com/in/yash-gupta-489922260/'  target='_blank' rel="noreferrer"><FaLinkedin size={30} className='icons'/></a>
                        </div>
                        <a href='../../assets/Yash gupta-Resume.pdf' download><button className='contact-button'>Download Resume</button></a>
                    </div>
                    <div className='contact-right-component'>
                        <input placeholder='Your Name'type='text' className='contact-right-input'/>
                        <input type='email' placeholder='Your Email' className='contact-right-input'/>
                        <textarea placeholder='Your Message'className='contact-right-textarea'rows={8} cols={48}/>
                        <button className='contact-button'>Submit</button>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default ContactMe;