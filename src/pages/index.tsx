import { useState, useEffect, FormEvent } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

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
  const labels = [{ label: 'All', slug: 'all' }, ...data.menu]

  function handleSearchItem(e: FormEvent<EventTarget>, inputData: string) {
    e.preventDefault()

    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(inputData.toLowerCase())
    )
    setFilteredPosts(results)
    setSearch(inputData)
  }

  function handleFilteredData(currentFilter: string) {
    const filteredData = posts.filter(
      (post) => post.category === currentFilter
    )
    setFilteredPosts(currentFilter == "" ? posts : filteredData)
  }

  function handlePaginatedData(selectedPosts: Post[]) {
    setFilteredPosts(selectedPosts)
  }

  return (
    <>
      <Head>
        <title>Talkdesk Challenge</title>
      </Head>

      <main>
        <SearchArea handleSearchItem={handleSearchItem} />
        <SearchContent
          labels={labels}
          posts={filteredPosts}
          filteredData={handleFilteredData}
          searchedContent={search}
          handlePaginatedData={handlePaginatedData}
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
