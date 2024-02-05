import Navigation from '../navigationBar/navigation.component';
import './about.styles.scss';
import profile from '../../assets/profile-pic2.png';

const About = () => {
    return(
        <div id="about"className='about-container'>
            <Navigation/>
            <div className='about-items-container'>
                <div className='about-items-heading'>ABOUT ME</div>
                <div className='about-items-components'>
                    <div className='about-items-container-left'>
                        <img className='profile_picture' alt='profile-pic' src={profile}/>
                    </div>
                    <div className='about-items-container-right'>
                        <div className='about-right-container-Description'>
                        Hi, My name is Yash Gupta. I am a highly motivated and detail-orientedcomputer science student at KIIT, graduating in 2025. My courseworkhas provided me with a strong foundation in machine learning, datamining, and artificial intelligence. Eager to contribute to innovativeteams, I am passionate about leveraging my skills and knowledge indata science to tackle real-world problems.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;