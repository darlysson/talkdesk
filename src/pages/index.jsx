import react, { useState } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'

const url = 'https://cms.talkdesk.com/wp-json/external/globalsearch'

export default function Home({ data }) {
  const [posts] = useState(data.posts.slice(0, 10))
  const [labels] = useState(
    [
      {
        label: 'App',
        slug: 'app',
      },
    ].concat(data.menu)
  )

  return (
    <>
      <Head>
        <title>Talkdesk Challenge</title>
      </Head>

      <main>
        <SearchArea />
        <SearchContent posts={posts} labels={labels} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(url)
  const data = await response.json()

  return { props: { data } }
}
