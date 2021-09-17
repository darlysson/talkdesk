import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'

const url = 'https://cms.talkdesk.com/wp-json/external/globalsearch'

interface dataProps {
  data: {
    posts: [
      {
        id: number,
        title: string,
        description: string,
        slug: string,
        url: string,
        date: string,
        category: string,
      }
    ]
    menu: [
      {
        label: string,
        slug: string,
      }
    ]
  }
}

interface postProps {
  id: number,
  title: string,
  description: string,
  slug: string,
  url: string,
  date: string,
  category: string,
}

export interface labelProps {
  labels: [
    {
      label: string,
      slug: string
    }
  ]
}

export default function Home({ data }: dataProps) {
  const [currentSelection, setCurrentSelection] = useState<string>('')
  const [searchedItems, setSearchedItems] = useState<postProps[]>([])
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(url)
  const data = await response.json()

  return { props: { data } }
}
