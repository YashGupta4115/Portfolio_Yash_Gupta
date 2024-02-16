import Navigation from '../navigationBar/navigation.component';
import './about.styles.scss';
import profile from '../../assets/profile-pic2.png';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [{name: 'JAVA'}, {name : 'JAVA GUI Development'}, {name : 'C++'}, {name : 'C'}, {name : 'HTML'}, {name : 'CSS'}, {name : 'ReactJS'}, {name : 'Machine Learning'}, 
    {name : 'Python'}, {name : 'Matplotlib'}, {name : 'Scikit-Learn'}, {name : 'Numpy'}, {name : 'Pandas'}, {name : 'Seaborn'}, {name : 'SQL'}, {name : 'Firebase'}, {name : 'Data Structures and Algorithm'},
    {name : 'Design and Analysis of Algorithm'}, {name : 'DP'}, {name : 'Generative AI(Basics)'}, {name : 'Team Collaborating skills'}];
    return(
        <div id="about"className='about-container'>
            <Navigation/>
            <div className='about-items-container'>
                <div className='about-items-heading'>ABOUT ME</div>
                <div className='about-items-components'>
                    <div className='about-items-container-left'>
                        <motion.img 
                            className='profile_picture' 
                            alt='profile-pic' 
                            src={profile}
                            initial={{ x: -1000 }}
                            animate={{ x:  0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0, 1, 0.3, 0.4],
                            }}/>
                    </div>
                    <div className='about-items-container-right'>
                        <div className='about-right-container-Description'>
                            <div className='skill-description-container'>
                                <motion.span 
                                    className='skill-heading'
                                    initial={{ x: 1000 }}
                                    animate={{ x:  0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0, 1, 0.3, 0.4],
                                    }}
                                >Skills</motion.span><br/>
                                <div className='skill-description'>
                                    {
                                        skills.map((skill)=>{
                                            return (
                                                <motion.div
                                                    className="skill-item"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.5,
                                                        ease: [0, 0.71, 0.2, 1.01]
                                                    }}>
                                                    {skill.name}
                                                </motion.div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;