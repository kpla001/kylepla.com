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
          src='/placeholder.jpeg'
          alt='icon' 
          width={275}
          height={275}
          />
          
        <h1 className="profile-name">Kyle Robert Isiah Pla </h1>
        <h4 className="profile-title">Software Developer | Audio Engineer</h4>
        <div className="card">
          Hello 👋 <br />Thank you for visiting my page. <br /> Feel free to browse through my links below <br />
          <i className="fas fa-long-arrow-alt-down fa-2x" ></i>


        </div>
        </div>

        




      </main>

    </>
  )
}
