import { Link } from 'react-router-dom';
import Navigation from '../navigationBar/navigation.component';
import vogue_variety_display from '../../assets/vogue-variety-high-resolution-logo_new.png';
import youtube_clone_display from '../../assets/Youtube 2017 New Logo.jpg';
import portfolio_diplay from '../../assets/Screenshot 2024-01-31 160235.png';
import rentalProject_display from '../../assets/Rental Project SS.png';
import mlProjects_display from '../../assets/Predictive analysis.png';
import magic_cards_display from '../../assets/magic_card.png';
import './projects.styles.scss';
import {motion} from 'framer-motion'

const projects = [
    {
        projectDisplay : vogue_variety_display,
        projectTitle : 'Vouge Variety',
        projectDesp : 'E-Commerce Website Based on React',
        route : 'https://voguevariety.netlify.app/',
        id : '1',
        initial : -1000,
        duration : 0.3,
    },
    {
        projectDisplay : youtube_clone_display,
        projectTitle : 'Youtube Clone',
        projectDesp : 'YouTube Clone based on React',
        route : 'https://youtubeclonebyyashgupta.netlify.app/',
        id : '2',
        initial : 1000,
        duration : 0.4,
    },
    {
        projectDisplay : portfolio_diplay,
        projectTitle : 'Porfolio',
        projectDesp : 'A Portfolio Websote Based on React',
        route : 'https://portfolio-yashgupta.netlify.app/',
        id : '3',
        initial : 1000,
        duration : 0.4,
    },
    {
        projectDisplay : rentalProject_display,
        projectTitle : 'Product Rental Application',
        projectDesp : 'Applicaion based in JAVA GUI and DBMS',
        route : 'https://github.com/YashGupta4115/Product_Rental_System/tree/master',
        id : '4',
        initial : -1000,
        duration : 0.6,
    },
    {
        projectDisplay : mlProjects_display,
        projectTitle : 'Predictive Analysis',
        projectDesp : 'Multiple ML Projects',
        route : 'https://github.com/YashGupta4115/Machine-Learning-and-Data-Science-Projects',
        id : '5',
        initial : -1000,
        duration : 0.3,
    },
    {
        projectDisplay : magic_cards_display,
        projectTitle : 'Magic Card Game',
        projectDesp : 'React Based guess game',
        route : '',
        id : '6',
        initial : -1000,
        duration : 0.6,
    }
]

const Projects = () => {
    return (
        <div className="projects-container">
            <Navigation/>
            <div className='project-items-container'>
                <motion.div 
                    className='project-items-heading'
                    initial={{ y: -100 }}
                        animate={{ y:0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 1, 0.3, 0.4],
                        }}
                >
                    Projects
                </motion.div>
                <div className='projects-inside-container'>
                    {
                        projects.map((item)=> {
                            return (
                                <Link className='project-items-link' key={item.id} to={item.route} target='_blank'>
                                    <motion.div 
                                        className='project-items'
                                        initial={{x : item.initial}}
                                        animate={{x : 0}}
                                        transition={{
                                            x : {duration : item.duration,ease: [0, 1, 0.3, 0.4]}
                                        }}    
                                    >
                                        <span className='projectImage-container'>
                                            <img className="projectImage" alt={item.id} src={item.projectDisplay}/>
                                        </span>
                                        <span className='projectTitle'>{item.projectTitle}</span>
                                        <span className='projectDesp'>{item.projectDesp}</span>
                                    </motion.div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;