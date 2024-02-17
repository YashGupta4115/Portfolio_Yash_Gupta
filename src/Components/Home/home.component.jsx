import { Link } from 'react-router-dom';
import Navigation from '../navigationBar/navigation.component';
import './home.styles.scss';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Home = ()=> {
    const isMobile = useMediaQuery({ query: '(max-width: 0px)' });

    return (  
        <div className='home-page-container'>
            <Navigation/>
            <div className="home-container" >
                <div className='top-home-container'>
                    <motion.p 
                        className='top-home-container-heading'
                        initial={isMobile ? {} :{ y: -100 }}
                        animate={isMobile ? {} :{ y:0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 1, 0.3, 0.4],
                        }}
                        >Pixel-perfect Coder</motion.p>
                    <motion.p 
                        className='top-home-container-description'
                        initial={isMobile ? {} :{ x: 1000 }}
                        animate={isMobile ? {} :{ x:0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0, 1, 0.3, 0.4],
                        }}
                    >An Enthusiast Full Stack Developer</motion.p>    
                </div>
                <div className='bottom-home-container'>
                    <div className='bottom-home-grid-items bottom-home-nested-container'>
                        <motion.div 
                            className='bottom-home-nested-grid-items'
                            initial={isMobile ? {} :{ y: 500 }}
                            animate={isMobile ? {} :{ y:0 }}
                            whileHover={isMobile ? {} :{ scale: [null, 1.02, 1.05], duration: 0.1}}
                            transition={{
                                y :{duration: 0,
                                ease: [0, 1, 0.3, 0.4]},
                                scale: { duration: 0.1 },
                            }}
                        >
                            <span className='bottom-home-nested-grid-heading'>100+</span>
                            <span className='bottom-home-nested-grid-description'>DSA Problems</span>
                        </motion.div>
                        <motion.div 
                            className='bottom-home-nested-grid-items'
                            initial={isMobile ? {} :{ y: 600 }}
                            animate={isMobile ? {} :{ y:0 }}
                            whileHover={isMobile ? {} :{ scale: [null, 1.02, 1.05], duration: 0.1 }}
                            transition={{
                                y : {duration: 0.2,
                                ease: [0, 0, 0.3, 1]},
                                scale: { duration: 0.1 },
                            }}
                            >
                            <span className='bottom-home-nested-grid-heading'>React</span>
                            <span className='bottom-home-nested-grid-description'>Expert</span>
                        </motion.div>
                        <motion.div 
                            className='bottom-home-nested-grid-items'
                            initial={isMobile ? {} :{ y: 800 }}
                            animate={isMobile ? {} :{ y:0 }}
                            whileHover={isMobile ? {} :{ scale: [null, 1.02, 1.05], duration: 0.1 }}
                            transition={{
                                y : {duration:0.6, ease: [1, 1, 1, 0.4]},
                                scale: { duration: 0.1 },
                            }}
                            >
                                <span className='bottom-home-nested-grid-heading'>5+</span>
                                <span className='bottom-home-nested-grid-description'>Projects</span>
                                <Link  className="bottom-home-nested-grid-description" to='/projects'>View all</Link>
                        </motion.div>
                        <motion.div 
                            className='bottom-home-nested-grid-items'
                            initial={isMobile ? {} :{ y: 1000 }}
                            animate={isMobile ? {} :{ y:0 }}
                            whileHover={isMobile ? {} :{ scale: [null, 1.02, 1.05] }}
                            transition={{
                                y: { duration: 0.4, ease: [1, 0, 0.3, 0.4] }, // Individual duration for y property
                                scale: { duration: 0.1 }, // Duration for scale during hover
                              }}
                            >
                            <span className='bottom-home-nested-grid-heading'>10+</span>
                            <span className='bottom-home-nested-grid-description'>Skills</span>
                        </motion.div>
                    </div>
                    <motion.div 
                        className='bottom-home-grid-items bottom-home-grid-item'
                        initial={isMobile ? {} :{ y: -1000 }}
                        animate={isMobile ? {} :{ y:0 }}
                        whileHover={isMobile ? {} :{ scaleY: 1.03 }}
                        transition={{
                            y : {duration: 0.3,
                            ease: [0, 1, 0.3, 0.4]},
                            scaleY: { duration: 0.1 },
                        }}
                    >
                        <span>Data Analyst with Machine Learning </span>
                        <span>10+ Data Prediction Projects</span>
                        <span>Data Pre-Processing and Data Mining</span>
                    </motion.div>
                    <motion.div 
                        className='bottom-home-grid-items bottom-home-grid-item'
                        initial={isMobile ? {} :{ x: -1000 }}
                        animate={isMobile ? {} :{ x:0 }}
                        whileHover={isMobile ? {} :{ scaleY: 1.03 }}
                        transition={{
                            x : {duration: 0,
                            ease: [0, 1, 0.3, 0.4]},
                            scaleY: { duration: 0.1 },
                        }}
                    >
                        <span>Team Collaborater</span>
                        <span>Fluent Comminication</span>
                        <span>Problem Solving</span>
                    </motion.div>
                    <motion.div 
                        className='bottom-home-grid-items bottom-home-grid-item'
                        initial={isMobile ? {} :{ x: 1000 }}
                        animate={isMobile ? {} :{ x:0 }}
                        whileHover={isMobile ? {} :{ scaleY: 1.03 }}
                        transition={{
                            x : {duration: 0,
                            ease: [0, 1, 0.3, 0.4]},
                            scaleY: { duration: 0.1 },
                        }}
                    >
                        <span>Certificates</span>
                        <Link  className="bottom-home-nested-grid-description" to='https://github.com/YashGupta4115/Certificates' target='_blank'>View all</Link>
                    </motion.div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;