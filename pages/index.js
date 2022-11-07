import Head from 'next/head'

import Projects from '../components/Projects'





export default function Home() {
  return (
    <div>
      <Head>
        <title>Decademia</title>
        <meta name="description" content="Invest in biopharma researchers and their work" />
        <link rel="icon" href="../public/assets/declogo.svg" />
      </Head>

    <Projects />

     

    </div>
  )
}
