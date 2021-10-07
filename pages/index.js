import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Kyle R. I. Pla</title>
        <meta name="description" content="Kyle R. I. Pla - Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
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
          src='/placeholder.jpeg'
          alt='icon' 
          width={200}
          height={200}
          />
          
        <h1 className="profile-name">Kyle Robert Isiah Pla </h1>
        <h4 className="profile-title">Software Developer | Audio Engineer</h4>
        <div className="card">
          Hello 👋 <br />Thank you for visiting my page. <br /> Feel free to browse through my links below <br />
          <i className="fas fa-long-arrow-alt-down fa-2x" ></i>
        </div>

        <div className="links">
            <ul>
              <li className="instagram">
                <a href="https://www.instagram.com/kyle__rip" className="link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="twitter">
                <a href="https://twitter.com/KylePla" className="link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="linkedin">
                <a href="https://linkedin.com/in/kylepla" className="link">
                  <i className="fab fa-linkedin"></i> Linked<i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="github">
                <a href="https://github.com/kpla001" className="link">
                  <i className="fab fa-github"></i> Github
                </a>
              </li>
              <li className="spotify">
                <a href="https://open.spotify.com/artist/6Ht4ILQE4RvOcH3zBsFt8x?si=sVUF544lT7CFexDcLY2mKQ&dl_branch=1" className="link">
                  <i className="fab fa-spotify"></i> Listen on Spotify
                </a>
              </li>


            </ul>
          </div>


        </div>
      </main>

    </>
  )
}
