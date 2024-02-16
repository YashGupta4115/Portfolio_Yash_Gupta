import './navigation.styles.scss';
// import { useState } from 'react';
import author_profile from '../../assets/profile-pic.png';
import { GoHomeFill } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const Navigation = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 0px)' });

    // const [ navIconToggle, setNavIconToggle] = useState(false)
    // const NavigationToggleHandler = ()=>{
    //     setNavIconToggle(!navIconToggle);
    // }
    return (

    <motion.div 
        className="navigation-container"
        initial = {isMobile ? {} :{x : -500}}
        animate = {isMobile ? {} :{x : 0}}
        transition={{
            duration : 0.6,
            ease : [0,0,0.3,0.4]
        }}
    >
        <div className="left-navigation">
            <div className="left-navigation-container">
                    <div className='left-navigaiton-container-Ar_profile'>
                        <Link to='/about'>
                            <img className="author-profile" alt="author-profile" src={author_profile}/>
                        </Link> 
                    </div>
                    <div className='left-navigation-container-Ar_name'>
                        <Link to='/about'>
                            <span className='user-name'>Yash Gupta</span>
                        </Link>
                    </div>    
            </div>
        </div>
        {/* <div className={`mid-navigation ${navBarToggle? 'active' : ''}`}> */}
        <div className="mid-navigation">
            <Link className='nav-links' to='/home'>
                <div className="mid-navigation-components-container" >
                    <div className="mid-navigation-components"><GoHomeFill size={10} className='nav-icons'/>&nbsp;
                    <span className="nav-text">Home</span>
                </div>
                </div>
            </Link>
            <Link className='nav-links' to='/projects'>
                <div className='mid-navigation-components-container'  >
                    <div className="mid-navigation-components"><GrProjects size={15} className='nav-icons'/>&nbsp;
                    <span className="nav-text">Projects</span>
                </div>
                </div>
            </Link>
            
            <Link className='nav-links' to='/about'>
                <div className='mid-navigation-components-container'>
                    <div className="mid-navigation-components"><SiAboutdotme size={15} className='nav-icons'/>&nbsp;
                    <span className="nav-text">About</span>
                </div>
                </div>
            </Link>
            
            <Link className='nav-links' to='/contact'>
                <div className='mid-navigation-components-container'>
                    <div className="mid-navigation-components"><RiContactsFill size={15} className='nav-icons'/>&nbsp;
                    <span className="nav-text">Contact</span>
                </div>
                </div>
            </Link>
            
        </div>
        {/* <div className={`navigation-toggle-container ${navBarToggle ? 'active' : ''}`} onClick={NavigationToggleHandler}>
            {
                navBarToggle ? <HiX size={20}/> : <FaBars size={20}/>
            }
        </div> */}
    </motion.div>
    )
}
export default Navigation;
