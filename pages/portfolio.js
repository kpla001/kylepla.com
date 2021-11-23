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


            </Head>
            <body id="portfolioPage" className="portfolioPage">
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


                    <div className="links">

                    </div>

                    </div>
                    </main>
                </div>
            </body>

            </div>
    )
}
