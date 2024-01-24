import Navigation from '../navigationBar/navigation.component';
import './contact.styles.scss';

const ContactMe = ()=>{
    return (
        <div id="contact"className='contact-container'>
            <Navigation/>
            <div className='contact-items-container'>
                <div className='phone-contact general-container'>
                    <div className='contact-container-heading'>Phone</div>
                    <div className='contact-container-desciption'>6201461718</div>
                </div>
                <div className='email-contact general-container'>
                    <div className='contact-container-heading'>E-mail</div>
                    <div className='contact-container-desciption'>yashguptayashu2003@gmail.com</div>
                </div>
                <div className='address-contact general-container'>
                    <div className='contact-container-heading'>Address</div>
                    <div className='contact-container-desciption'>KIIT University</div>
                </div>
            </div>     
        </div>
    )
}

export default ContactMe;