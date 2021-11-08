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


    </Head>
    <body id="top">
    <div id="cv" className="instaFade">
        <div className="mainDetails">
            {/* <div id="headshot" className="quickFade">
                <img src="headshot.jpg" alt="Alan Smith" />
            </div>  */}
            
            <div id="name">
                <h1 className="quickFade delayTwo">Kyle R. I. Pla</h1>
                <h2 className="quickFade delayThree">Full-stack Developer</h2>
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
                        <h1>Profile Summary</h1>
                    </div>
                    
                    <div className="sectionContent">
                        <p>Full-stack web developer with a background in banking and a passion for tech, continuously looking to expand expertise in web-based programming languages, frameworks, and applications. My objective is to to help organizations drive client conversions via website engagement, as well as simplify their internal business procedures through effective software implementation.
                        </p>
                    </div>
                </article>
                <div className="clear"></div>
            </section>
            
            
            <section>
                <div className="sectionTitle">
                    <h1>Experience</h1>
                </div>
                
                <div className="sectionContent">
                    <article>
                        <h2>Commercial Loan QC Analyst</h2>
                        <h4>
                            <a className="resumeOrganizations" href="https://commercial.bmoharris.com/en/">
                               {`BMO Harris Bank `}
                            </a>
                            {`▪ Chicago, Illinois`}
                        </h4>
                        <p className="subDetails">March 2021 – June 2021 (Contract)</p> 
                        <p>• Exercised quality control on syndicated / bilateral loans, for BMO Harris Bank’s corporate & commercial lending segment, which has over $545 billion in assets</p>
                        <p>• Programmed remittance instructions into the Loan IQ platform in order to maintain data accuracy and ensure timely receipt of scheduled loan payments from commercial clients through automated system</p>
                        <p>• Delivered meticulous attention to detail in reviewing legal credit documents for $10 million – $1 billion loans, to ensure consistency with configurations in Loan IQ database</p>
                        <p>• Liaised between BMO Harris, other agent banks, and commercial borrowers to verify highly confidential remittance instructions and account details for multi million dollar wire payments</p>
                        <p>• Constructed weekly reporting on syndicated loans for bank analysts and managing directors and helped foster rapport with internal business partners</p>
                        <br/>
                    </article>
                    
                    <article>
                        <h2>Credit Product Manager</h2>
                        <h4>
                            <a className="resumeOrganizations" href="https://www.jpmorganchase.com/">
                               {`J.P.Morgan Chase & Co. `}
                            </a>
                            {`▪  Columbus, Ohio`}
                        </h4>
                        <p className="subDetails">February 2018 – November 2019</p>
                        <p>• Managed suite of commercial real estate and term loan products for Chase’s Business Banking Segment, which originates over $600 million per year in new loans for small to medium sized businesses</p>
                        <p>• Analyzed credit account data and product metrics for $13 billion  loan portfolio to identify trends and opportunities for the business</p>
                        <p>• Designed promotional offers which allowed Chase to expand into multiple new markets in Boston, Philadelphia, and D.C.</p>
                        <p>• Drove 7% in annual portfolio growth by presenting monthly business metrics to Chase executives for strategic decision making</p>
                        <p>• Directed initiative that reduced business expenses by 2% through in-depth analysis and simplification of all loan fees</p>
                        <p>• Developed training materials and delivered presentations on various finance related topics to audience of over 1,600 bankers across Chase’s national footprint, which drove decrease in customer dissatisfaction rates by 4%</p>
                        <br/>
                    </article>
                    
                    
                    <article>
                        <h2>Business Relationship Manager</h2>
                        <h4>
                            <a className="resumeOrganizations" href="https://www.jpmorganchase.com/">
                               {`J.P.Morgan Chase & Co. `}
                            </a>
                            {`▪ Miami, Florida`}
                        </h4>
                        <p className="subDetails">June 2015 – February 2018</p>
                        <p>• Managed portfolio of over 90 business clients by tending to their ongoing banking needs and promoting credit solutions</p>
                        <p>• Delivered $1.5 million in new loans to business clients, utilizing finance and risk management acumen to identify opportunities</p>
                        <p>• Created 30% in additional revenue for business clients through implementation of credit card processing capabilities</p>
                        <p>• Increased deposits by $10 million by serving as a trusted advisor to local community of small to medium sized businesses with up to $5 million in annual revenues</p>
                        <p>• Data mined prospect lists to assist management in identifying viable business opportunities as the sole intern for five different markets, contributing to 8% increase in deal pipeline in 2015</p>
                        <br/>
                    </article>
                    <article>
                        <h2>Customer Account Associate</h2>
                        <h4>
                            <a className="resumeOrganizations" href="https://www.fpl.com/about/company-profile.html">
                               {`NextEra Energy Inc. (FPL) `}
                            </a>
                            {`▪  Miami, Florida`}
                        </h4>
                        <p className="subDetails">June 2014 – June 2015</p>
                        <p>• Led internal partners in field services, operations, and customer affairs divisions across the largest power company in the U.S.</p>
                        <p>• Resolved an average of 70 calls per day through employment of internal procedures and enhanced customer service tactics</p>
                        <p>• Managed customer satisfaction rate of 98% by consistently solving customer issues such as power outages and billing concerns</p>
                        <p>• Consistently met efficiency benchmark of 3 minutes per call through effective implementation of company protocols </p>
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
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>NextJS</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
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
                        <h2>Full Stack Web Development - Bootcamp Graduate </h2>
                        <h4>
                            <a className="resumeOrganizations" href="hhttps://www.ironhack.com/en">
                               {`Ironhack `}
                            </a>
                            {`▪  Miami, Florida`}
                        </h4>
                        <p className="subDetails">June 2021 – November 2021</p>
                        <br/>
                    </article>
                    <article>
                        <h2>Master of Science (M.S.), Finance</h2>
                        <h4>
                            <a className="resumeOrganizations" href="https://www.fiu.edu">
                               {`Florida International University `}
                            </a>
                            {`▪  Miami, Florida`}
                        </h4>
                        <p className="subDetails">August 2016 – August 2017</p>
                        <br/>
                    </article>
                    
                    <article>
                        <h2>{`Bachelor's of Business Administration (B.B.A.)`}</h2>
                        <h4>
                            <a className="resumeOrganizations" href="https://www.fiu.edu">
                            {`Florida International University `}
                            </a>
                            {`▪  Miami, Florida`}
                        </h4>
                        <p className="subDetails">August 2012 – May 2016</p>
                        <p>Majors: Finance, Marketing </p>
                        <br/>
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