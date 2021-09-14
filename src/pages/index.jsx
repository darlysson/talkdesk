import { useState } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'

const url = 'https://cms.talkdesk.com/wp-json/external/globalsearch'

export default function Home({ data }) {
  const [currentSelection, setCurrentSelection] = useState('')
  const [searchedItems, setSearchedItems] = useState([])
  const [search, setSearch] = useState('')

  const posts = data.posts
  const labels = [{ label: 'All', slug: 'all' }].concat(data.menu)
  const filteredData = data.posts.filter(
    (post) => post.category === currentSelection
  )

  function handleSearchItem() {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchedItems(results)
  }

  return (
    <>
      <Head>
        <title>Talkdesk Challenge</title>
      </Head>

      <main>
        <SearchArea inputContent={setSearch} searchItems={handleSearchItem} />
        <SearchContent
          labels={labels}
          posts={
            searchedItems.length > 0
              ? searchedItems
              : currentSelection === ''
              ? posts
              : filteredData
          }
          filteredLength={
            searchedItems.length > 0
              ? searchedItems.length
              : currentSelection === ''
              ? posts.length
              : filteredData.length
          }
          selectedFilter={setCurrentSelection}
          searchedContent={search}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(url)
  const data = await response.json()

  return { props: { data } }
}
