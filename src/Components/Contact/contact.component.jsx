import Navigation from '../navigationBar/navigation.component';
import './contact.styles.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import resume from '../../assets/Yash Gupta.pdf';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = ()=>{
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [msg , setMsg] = useState('');

    const onUsernameChange = (event)=> {
        const searchFieldString = event.target.value;
        setUsername(searchFieldString);
    }
    const onEmailChange = (event)=> {
        const searchFieldString = event.target.value;
        setEmail(searchFieldString);
    }
    const onMsgChange = (event)=> {
        const searchFieldString = event.target.value;
        setMsg(searchFieldString);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const serviceId = 'service_Porfolio';
        const templateId='template_lfmjmg7';
        const publicKey='QzFNUwH8g5Uub6Ou4';

        const temptParams = {
            from_name : username,
            from_email: email,
            to_name: 'Yash Gupta',
            message: msg,
        };

        emailjs.send(serviceId,templateId,temptParams,publicKey)
        .then((response)=>{
            console.log('Email sent!');
            alert("We have received your message. We'll reply soon!!");
            setUsername('');
            setEmail('');
            setMsg('');
        })
        .catch((error) => {
            console.log('Error sending mail!');
            alert("There was an error sending email. Pls retry!");
        });


        

    }
    
    return (
        <div id="contact"className='contact-container'>
            <Navigation/>
            <div className='contact-items-container'>
                <div className='page-heading'>Contact Me</div>
                <div className='contact-items-components'>
                    <div className='contact-left-component'>
                        <span className='email-contact'><IoIosMail size={30}  className='icons'/>yashguptayashu2003@gmail.com</span>
                        <span className='phone-contact'><FaPhoneAlt size={30}  className='icons'/>6201461718</span>
                        <div className='social-icons-container'>
                            <a className='icon-links' href='https://github.com/YashGupta4115' target='_blank' rel="noreferrer"><FaGithub  size={30} className='icons'/></a>
                            <a className='icon-links' href='https://www.linkedin.com/in/yash-gupta-489922260/'  target='_blank' rel="noreferrer"><FaLinkedin size={30} className='icons'/></a>
                        </div>
                        <a href={resume} download={resume}><button className='contact-button'>Download Resume</button></a>
                    </div>
                    <div className='contact-right-component-container'>
                        <form className='contact-right-component' onSubmit={handleSubmit}>
                            <input 
                                placeholder='Your Name'
                                type='text' 
                                className='contact-right-input'
                                value={username}
                                onChange={onUsernameChange}/>
                            <input 
                                type='email' 
                                placeholder='Your Email' 
                                className='contact-right-input'
                                value={email}
                                onChange={onEmailChange}/>
                            <textarea 
                                placeholder='Your Message'
                                className='contact-right-textarea'
                                rows={8} 
                                cols={48}
                                value={msg}
                                onChange={onMsgChange}/>
                            <button className='contact-button'>Leave A Message !</button>
                        </form>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default ContactMe;