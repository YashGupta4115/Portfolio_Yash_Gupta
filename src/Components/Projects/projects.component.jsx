import { Link } from 'react-router-dom';
import Navigation from '../navigationBar/navigation.component';
import vogue_variety_display from '../../assets/vogue-variety-high-resolution-logo_new.png';
import youtube_clone_display from '../../assets/Youtube 2017 New Logo.jpg';
import portfolio_diplay from '../../assets/Screenshot 2024-01-31 160235.png';
import './projects.styles.scss';

const projects = [
    {
        projectDisplay : vogue_variety_display,
        projectTitle : 'Vouge Variety',
        projectDesp : 'E-Commerce Website Based on React',
        route : 'https://voguevariety.netlify.app/',
        id : '1'
    },
    {
        projectDisplay : youtube_clone_display,
        projectTitle : 'Youtube Clone',
        projectDesp : 'YouTube Clone based on React',
        route : '/project2',
        id : '2'
    },
    {
        projectDisplay : portfolio_diplay,
        projectTitle : 'Porfolio',
        projectDesp : 'A Portfolio Websote Based on React',
        route : 'https://portfolio-yashgupta.netlify.app/',
        id : '3'
    },
    {
        projectDisplay : portfolio_diplay,
        projectTitle : 'Product Rental Application',
        projectDesp : 'Applicaion based in JAVA GUI and DBMS',
        route : '/project4',
        id : '4'
    }
]

const Projects = () => {
    return (
        <div className="projects-container">
            <Navigation/>
            <div className='project-items-container'>
                <div className='project-items-heading'>
                    Projects
                </div>
                <div className='projects-inside-container'>
                    {
                        projects.map((item)=> {
                            return (
                                <Link key={item.id} to={item.route} target='_blank'>
                                    <div className='project-items'>
                                        <span className='projectImage-container'>
                                            <img className="projectImage" alt={item.id} src={item.projectDisplay}/>
                                        </span>
                                        <span className='projectTitle'>{item.projectTitle}</span>
                                        <span className='projectDesp'>{item.projectDesp}</span>
                                    </div>
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