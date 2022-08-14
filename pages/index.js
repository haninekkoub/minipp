import Header from '../component/header'
import Project from '../component/project.js'
import Head from 'next/head' 

export default function Home() {
  return (
    <div className='container'>
        <Head>
          <title>Hani nekkoub</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Header />
      <Project />
    </div>
  )
}
