import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Portfolio() {
    return (
        <div id="portfolio-page">
            <Head>
                <title>Kyle Pla - Portfolio</title>

                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content="Kyle Robert Isiah Pla - Development Portfolio"/>
                <meta charset="UTF-8"/> 
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />

            </Head>
            <article id="portfolioPage" className="portfolioPage">
                {/* <a href="https://www.kylepla.com/" className="homeButton">
                    <i className="fas fa-home"></i>
                </a> */}
                <div className="portfolioMain">

                    <section className="portfolioHeader">
                        <h1 className="portfolioTitle">Portfolio</h1>
                    </section>
                    <main>

                    <div className="portfolioWrap">
                        <h4 className ="ironhackTitle">Ironhack</h4>
                        <h4 className="projectTitle"> Project 1: Free Lunch</h4>
                        <Image 
                        className="screenShot"
                        src='/FreeLunchScreenShot.png'
                        alt='icon' 
                        width={3524 /3}
                        height={1880 /3}
                        />
                        <div className="projectLinks">
                            <a href="https://github.com/kpla001/Free-Lunch-Ironhack-Game" 
                            className="githubLink">
                            <i className="fas fa-code-branch"></i> Github
                            </a>
                            <a href="https://kpla001.github.io/Free-Lunch-Ironhack-Game/" 
                            className="demoLink">
                            <i className="fas fa-play"></i> Live Demo*
                            </a>
                        </div>
                        <div className="projectDescription">
                            <h6 className="projectDescription">Description:</h6>
                            <p className="projectDescription">
                                An arcade-style game built using simple HTML, CSS, JavaScript and {`<canvas>`}<br/><br/>
                                <b>Programming Concepts Employed:</b> <br/>
                                <p className="subBullets">
                                • Looping<br/>
                                • DOM Manipulation<br/>
                                • Object Oriented Programming<br/><br/>
                                </p>
                                <b>Background:</b> <br/>
                                <p className="subBullets">
                                • As someone born and raised in Florida, I wanted to incorporate our unofficial State mascot as the centerpiece for my project, seeking to highlight the pollution and human interference that plagues their natural habitats in a tongue-in-cheek manner.
                                </p>
                            </p> 
                        </div>
                        <hr/>
                        <br/>
                        <h4 className ="ironhackTitle">Ironhack</h4>
                        <h4 className="projectTitle"> Project 2: Song Bird</h4>
                        <Image 
                        className="screenShot"
                        src='/SongBirdScreenShot.png'
                        alt='icon' 
                        width={3524 /3}
                        height={1884 /3}
                        />
                        <div className="projectLinks">
                            <a href="https://github.com/rgonzalez09/song-bird" 
                            className="githubLink">
                            <i className="fas fa-code-branch"></i> Github
                            </a>
                            <a href="https://song-bird-discover-music.herokuapp.com" 
                            className="demoLink">
                            <i className="fas fa-play"></i> Live Demo*
                            </a>
                        </div>
                        <div className="projectDescription">
                            <h6 className="projectDescription">Description:</h6>
                            <p className="projectDescription">
                                A music-based social media platform and query tool made with HTML, CSS, and simple JavaScript<br/><br/>
                                <b>Programming Concepts Employed:</b> <br/>
                                <p className="subBullets">
                                • DOM Manipulation<br/>
                                • Object Oriented Programming<br/>
                                • Back-end Routing<br/>
                                • Middleware<br/>
                                • REST APIs<br/>
                                • Authorization {'&'} Authentication<br/>
                                • CRUD Model<br/>
                                <br/>
                                </p>
                                <b>Technologies Used:</b> <br/>
                                <p className="subBullets">
                                • Node.JS<br/>
                                • Express.JS<br/>
                                • MongoDB<br/>
                                • Handlebars<br/>
                                <br/>
                                </p>
                                <b>Background:</b> <br/>
                                <p className="subBullets">
                                • My project partners and I, having a shared fondness of music, decided to center our project around the popular streaming app Spotify{`'s`} API, which provides millions of data points surrounding the artists, albums, and tracks available through the platform.
                                </p>
                            </p> 
                        </div>
                        <hr/>
                        <br/>
                        <h4 className ="ironhackTitle">Ironhack</h4>
                        <h4 className="projectTitle"> Project 3: Recipez</h4>
                        <Image 
                        className="screenShot"
                        src='/RecipezScreenShot.png'
                        alt='icon' 
                        width={3524 /3}
                        height={1884 /3}
                        />
                        <div className="projectLinks">
                            <a href="https://github.com/kpla001/Ironhack-Project-3" 
                            className="githubLink">
                            <i className="fas fa-code-branch"></i> Github
                            </a>
                            <a href="https://ironhack-recipez.netlify.app" 
                            className="demoLink">
                            <i className="fas fa-play"></i> Live Demo*
                            </a>
                        </div>
                        <div className="projectDescription">
                            <h6 className="projectDescription">Description:</h6>
                            <p className="projectDescription">
                                A food-based web app and query tool that allows users to search for recipes by name or included ingredients, with an option to save them into {'"CookBooks"'}<br/><br/>
                                <b>Programming Concepts Employed:</b> <br/>
                                <p className="subBullets">
                                • Object Oriented Programming<br/>
                                • Back-end Routing<br/>
                                • Middleware<br/>
                                • REST APIs<br/>
                                • Authorization {'&'} Authentication<br/>
                                • CRUD Model<br/>
                                • JavaScript Frameworks<br/>
                                <br/>
                                </p>
                                <b>Technologies Used:</b> <br/>
                                <p className="subBullets">
                                • Node.JS<br/>
                                • Express.JS<br/>
                                • MongoDB<br/>
                                • React.JS <br/>
                                &nbsp;&nbsp;– Hooks<br/>
                                &nbsp;&nbsp;– Functional {'&'} Class Components <br/>
                                &nbsp;&nbsp;– React Router<br/>
                                <br/>
                                </p>
                                <b>Background:</b> <br/>
                                <p className="subBullets">
                                • As individuals who enjoy cooking, baking, and general meal preparation, my group identified a common dilemma we all frequently face while looking up new recipes online: many online articles require the reader to sift through impertinent personal narratives by the author{'(s)'}, which takes time away from the actual cooking. This app attempts to solve that problem by removing irrelevant info and providing only what{"'s"} needed through a quick and easy search tool. Then, saving recipes into CookBooks allows for organization and easy access later on.
                                </p>
                            </p> 
                        </div>
                        <hr/>
                        <br/>
                        <br/>
                        <h4 className="projectTitle">kylepla.com</h4>
                        <Image 
                        className="screenShot"
                        src='/kyleplaScreenShot.png'
                        alt='icon' 
                        width={3524 /3}
                        height={1880 /3}
                        />
                        <div className="projectLinks">
                            <a href="https://github.com/kpla001/kylepla.com" 
                            className="githubLink">
                            <i className="fas fa-code-branch"></i> Github
                            </a>
                            <a href="https://www.kylepla.com" 
                            className="demoLink">
                            <i className="fas fa-play"></i> Live Demo
                            </a>
                        </div>
                        <div className="projectDescription">
                            <h6 className="projectDescription">Description:</h6>
                            <p className="projectDescription">
                                A responsive personal website for myself and link tree alternative, containing various internal and external links to each of my professional and social media profiles, on one single page. <br/><br/>
                                <b>Programming Concepts Employed:</b> <br/>
                                <p className="subBullets">
                                • Object Oriented Programming<br/>
                                • JavaScript Frameworks<br/>
                                • SPAs<br/>
                                <br/>
                                </p>
                                <b>Technologies Used:</b> <br/>
                                <p className="subBullets">
                                • React.JS<br/>
                                • Next.JS<br/>
                                • SASS<br/>
                                </p>
                            </p> 
                        </div>
                        <br/>
                    </div>
                    </main>
                </div>
                <div href="https://github.com/kpla001/kylepla.com" className="footer">
                    *Live Demo best viewed on desktop{' '}
                    <i className="fas fa-desktop"></i>
                </div>
            </article>

            </div>
    )
}
