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
                <div className="portfolioMain">

                    <section className="portfolioHeader">
                        <h1 className="portfolioTitle">Projects</h1>
                    </section>
                    <main>

                    <div className="portfolioWrap">
                        <h4 className="projectTitle">Project 1: Free Lunch</h4>
                        <Image 
                        className="screenShot"
                        src='/FreeLunchScreenShot.png'
                        alt='icon' 
                        width={3524 /4}
                        height={1880 /4}
                        />
                        <div className="projectLinks">
                            <a href="https://github.com/kpla001/Free-Lunch-Ironhack-Game" 
                            className="githubLink">
                            <i className="fas fa-code-branch"></i> Github
                            </a>
                            <a href="https://kpla001.github.io/Free-Lunch-Ironhack-Game/" 
                            className="demoLink">
                            <i className="fas fa-play"></i> Live Demo
                            </a>
                        </div>

                        <div className="links">

                        </div>

                    </div>
                    </main>
                </div>
            </article>

            </div>
    )
}
