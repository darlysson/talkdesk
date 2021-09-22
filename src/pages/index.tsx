import { GetServerSideProps } from 'next'
import { useState } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'
import { Post } from '../../types'

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

export default function Home({ data }: dataProps) {
  const posts = data.posts;
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)
  const [search, setSearch] = useState('')
  const labels = [{ label: 'All', slug: 'all' }].concat(data.menu)

  function handleSearchItem(e: React.FormEvent<EventTarget>) {
    e.preventDefault()

    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredPosts(results)
  }

  function handleFilteredData(currentFilter: string) {
    const filteredData = posts.filter(
      (post) => post.category === currentFilter
    )
    setFilteredPosts(currentFilter == "" ? posts : filteredData)
  }

  return (
    <>
      <Head>
        <title>Talkdesk Challenge</title>
      </Head>

      <main>
        <SearchArea
          inputContent={setSearch}
          searchItems={handleSearchItem}
        />

        <SearchContent
          labels={labels}
          posts={filteredPosts}
          filteredData={handleFilteredData}
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
