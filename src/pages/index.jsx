import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'

const url = 'https://cms.talkdesk.com/wp-json/external/globalsearch'

export default function Home({ data }) {
  const [currentSelection, setCurrentSelection] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [posts, setPosts] = useState([])

  const labels = [{ label: 'All', slug: 'all' }].concat(data.menu)

  const getFilteredPosts = (filtered) => {
    setFilteredData(filtered)
  }

  const getAllPosts = (allPosts) => {
    setPosts(allPosts)
  }

  useEffect(() => {
    getFilteredPosts(
      data.posts.filter((post) => post.category === currentSelection)
    )
    getAllPosts(data.posts)
  }, [data.posts, currentSelection])

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

  return { props: { data } }
}
