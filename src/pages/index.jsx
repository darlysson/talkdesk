import { useState } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'

const url = 'https://cms.talkdesk.com/wp-json/external/globalsearch'

export default function Home({ data }) {
  const [currentSelection, setCurrentSelection] = useState('')
  const posts = data.posts
  const labels = [{ label: 'All', slug: 'all' }].concat(data.menu)
  const filteredData = data.posts.filter(
    (post) => post.category === currentSelection
  )

  return (
    <>
      <Head>
        <title>Talkdesk Challenge</title>
      </Head>

      <main>
        <SearchArea />
        <SearchContent
          labels={labels}
          posts={currentSelection === '' ? posts : filteredData}
          filteredLength={
            currentSelection === '' ? posts.length : filteredData.length
          }
          selectedFilter={setCurrentSelection}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(url)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: { data } }
}
