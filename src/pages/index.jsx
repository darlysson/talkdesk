import Head from 'next/head'
import { SearchArea } from '../components/SearchArea'
import { SearchContent } from '../components/SearchContent'

import { PostsProvider } from '../hooks/usePosts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Talkdesk Challenge</title>
      </Head>

      <main>
        <PostsProvider>
          <SearchArea />
          <SearchContent />
        </PostsProvider>
      </main>
    </>
  )
}

// escrever função getServerSideProps aqui
// then: Passar isso para o SearchContent
