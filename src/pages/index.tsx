import Head from 'next/head'

import Main from 'components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Another NextJS boilerplate</title>
      </Head>
      <Main
        title={'Another NextJS boilerplate'}
        description={
          'Boilerplate to work with NextJS, TypeScript and Styled Component'
        }
      />
    </>
  )
}
