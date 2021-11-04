import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Resume() {
  return (
<div id="resume-page">
    <Head>
    <title>Kyle Pla - Resume</title>

    <meta name="viewport" content="width=device-width"/>
    <meta name="description" content="The Curriculum Vitae of Kyle Pla."/>
    <meta charset="UTF-8"/> 


    <link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'/>


    <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
    </Head>
    <body id="top">
    <div id="cv" className="instaFade">
        <div className="mainDetails">
            {/* <div id="headshot" className="quickFade">
                <img src="headshot.jpg" alt="Alan Smith" />
            </div>  */}
            
            <div id="name">
                <h1 className="quickFade delayTwo">Kyle R. I. Pla</h1>
                <h2 className="quickFade delayThree">Full-stack Web Developer</h2>
            </div>
            
            <div id="contactDetails" className="quickFade delayFour">
                <ul>
                    <li><a href="mailto:kyle.ri.pla@gmail.com">kyle.ri.pla@gmail.com</a></li>
                    <li>
                    <li>(305)523-9744 </li>
                    <li> Miami, Florida 33187 </li>
                    <a href="https://www.linkedin.com/in/kylepla">linkedin.com/in/kylepla</a></li>
                </ul>
            </div>
            <div className="clear"></div>
        </div>
        
        <div id="mainArea" className="quickFade delayFive">
            <section>
                <article>
                    <div className="sectionTitle">
                        <h1>Personal Profile</h1>
                    </div>
                    
                    <div className="sectionContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </div>
                </article>
                <div className="clear"></div>
            </section>
            
            
            <section>
                <div className="sectionTitle">
                    <h1>Work Experience</h1>
                </div>
                
                <div className="sectionContent">
                    <article>
                        <h2>Job Title at Company</h2>
                        <p className="subDetails">April 2011 - Present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </article>
                    
                    <article>
                        <h2>Job Title at Company</h2>
                        <p className="subDetails">Janruary 2007 - March 2011</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </article>
                    
                    <article>
                        <h2>Job Title at Company</h2>
                        <p className="subDetails">October 2004 - December 2006</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </article>
                </div>
                <div className="clear"></div>
            </section>
            
            
            <section>
                <div className="sectionTitle">
                    <h1>Key Skills</h1>
                </div>
                
                <div className="sectionContent">
                    <ul className="keySkills">
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                        <li>A Key Skill</li>
                    </ul>
                </div>
                <div className="clear"></div>
            </section>
            
            
            <section>
                <div className="sectionTitle">
                    <h1>Education</h1>
                </div>
                
                <div className="sectionContent">
                    <article>
                        <h2>College/University</h2>
                        <p className="subDetails">Qualification</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                    </article>
                    
                    <article>
                        <h2>College/University</h2>
                        <p className="subDetails">Qualification</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                    </article>
                </div>
                <div className="clear"></div>
            </section>
            
        </div>
    </div>
    </body>
</div>
  )
}