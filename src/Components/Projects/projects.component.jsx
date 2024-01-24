import { Link } from 'react-router-dom';
import Navigation from '../navigationBar/navigation.component';
import './projects.styles.scss';

const projects = [
    {
        projectTitle : 'project 1',
        projectDesp : 'project desp',
        route : '/project1',
        id : '1'
    },
    {
        projectTitle : 'project 2',
        projectDesp : 'project desp',
        route : '/project2',
        id : '2'
    },
    {
        projectTitle : 'project 3',
        projectDesp : 'project desp',
        route : '/project3',
        id : '3'
    },
    {
        projectTitle : 'project 4',
        projectDesp : 'project desp',
        route : '/project4',
        id : '4'
    }
]

const Projects = () => {
    return (
        <div className="projects-container" style={{backgroundImage: `url(${require('../../assets/backgroundImage.jpg')})`
    }} >
            <Navigation/>
            <div className='project-items-container'>
                <div className='project-items-heading'>
                    Projects
                </div>
                <div className='projects-inside-container'>
                    {
                        projects.map((item)=> {
                            return (
                                <Link key={item.id} to={item.route}>
                                    <div className='project-items'>
                                        <span className='projectImage-container'>
                                            <img className="projectImage" alt={item.id} src={`https://robohash.org/${item.id}`}/>
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