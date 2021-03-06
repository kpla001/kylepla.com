import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div id="landing-page">
      <Head>
        <title>Kyle R. I. Pla</title>
        <meta name="description" content="Kyle R. I. Pla - Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-11BLYJLS9K`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-11BLYJLS9K');
            `,
          }}
        />

        {/* <script src="https://kit.fontawesome.com/92716430d3.js" crossOrigin="anonymous"></script> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      </Head>


      <main>
        <div className="wrap">
        <Image 
          className="photo"
          src='/profile-photo.png'
          alt='icon' 
          width={414.83}
          height={497.5}
          />

        <section className="profile">
          <h1 className="profile-name">Kyle Robert Isiah Pla </h1>
          <h4 className="profile-title">Full-stack Developer | Electronic Music Producer</h4>
        </section>

        <div className="card">
          Hello 👋 <br />Thank you for visiting my website. <br /> Feel free to browse through my links below <br />
          <i className="fas fa-long-arrow-alt-down fa-2x" ></i>
        </div>

        <div className="links">
            <ul>
              <li className="email">
                <a href="mailto:kyle.ri.pla@gmail.com" className="link">
                <i className="far fa-envelope"></i> Send me an e-mail
                </a>
              </li>
              <li className="resume">
                <Link href="/resume" > 
                  <a className="link"> 
                    <i className="fas fa-file"></i>
                    <span> </span>
                    View my resume
                  </a>
                </Link>
              </li>
              <li className="portfolio">
                <Link href="/portfolio" > 
                  <a className="link"> 
                  <i className="fas fa-search"></i>
                    <span> </span>
                    Browse my portfolio
                  </a>
                </Link>
              </li>
              <li className="linkedin">
                <a href="https://linkedin.com/in/kylepla" className="link">
                  <i className="fab fa-linkedin"></i> Linked<i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="https://twitter.com/KylePla" className="link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="github">
                <a href="https://github.com/kpla001" className="link">
                  <i className="fab fa-github"></i> Github
                </a>
              </li>
              <li className="instagram">
                <a href="https://www.instagram.com/kyle__rip" className="link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="spotify">
                <a href="https://open.spotify.com/user/1253012721?si=610aace52f304752" className="link">
                  <i className="fab fa-spotify"></i> My Spotify Playlists
                </a>
              </li>
              <li className="spotify-artist">
                <a href="https://open.spotify.com/artist/6Ht4ILQE4RvOcH3zBsFt8x?si=sVUF544lT7CFexDcLY2mKQ&dl_branch=1" className="link">
                  <i className="fab fa-spotify"></i> Listen to me on Spotify
                </a>
              </li>
              <li className="soundcloud">
                <a href="https://soundcloud.com/user-73091524-35879270" className="link">
                <i className="fab fa-soundcloud"></i> SoundCloud
                </a>
              </li>
            </ul>
          </div>

          <iframe
            className="calendly"
            src="https://calendly.com/kylepla/15-60min"
            width="100%"
            height="950"
            scrolling="no"
            frameBorder="0"
          ></iframe>

        </div>
      </main>
        <a href="https://github.com/kpla001/kylepla.com" className="copyright-text">
            View this code on Github {''}
            <i className="fab fa-github-alt"></i> 
          </a>

    </div>
  )
}
