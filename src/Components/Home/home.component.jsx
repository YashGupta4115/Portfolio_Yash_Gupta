import { Link } from 'react-router-dom';
import Navigation from '../navigationBar/navigation.component';
import './home.styles.scss';

const Home = ()=> {
    return (
        <div className='home-page-container'>
            <Navigation/>
            <div className="home-container" >
                <div className='top-home-container'>
                    <p className='top-home-container-heading'>Pixel-perfect Coder</p>
                    <p className='top-home-container-description'>An Enthusiast Full Stack Developer</p>    
                </div>
                <div className='bottom-home-container'>
                    <div className='bottom-home-grid-items bottom-home-nested-container'>
                        <div className='bottom-home-nested-grid-items'>
                            <span className='bottom-home-nested-grid-heading'>100+</span>
                            <span className='bottom-home-nested-grid-description'>DSA Problems</span>
                        </div>
                        <div className='bottom-home-nested-grid-items'>
                            <span className='bottom-home-nested-grid-heading'>React</span>
                            <span className='bottom-home-nested-grid-description'>Expert</span>
                        </div>
                        <div className='bottom-home-nested-grid-items'>
                                <span className='bottom-home-nested-grid-heading'>4</span>
                                <span className='bottom-home-nested-grid-description'>Projects</span>
                                <Link  className="bottom-home-nested-grid-description" to='/projects'>View all</Link>
                        </div>
                        <div className='bottom-home-nested-grid-items'>
                            <span className='bottom-home-nested-grid-heading'>10+</span>
                            <span className='bottom-home-nested-grid-description'>Skills</span>
                        </div>
                    </div>
                    <div className='bottom-home-grid-items bottom-home-grid-item'>
                        <span>This is test sentence </span>
                    </div>
                    <div className='bottom-home-grid-items bottom-home-grid-item'>Component - 3</div>
                    <div className='bottom-home-grid-items bottom-home-grid-item'>Component - 4</div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;