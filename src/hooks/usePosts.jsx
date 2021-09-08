import { createContext, useEffect, useState, useContext } from 'react'

const url = 'https://cms.talkdesk.com/wp-json/external/globalsearch'

const PostsContext = createContext()

export function PostsProvider({ children }) {
  const [labels, setLabels] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const appLabel = {
      label: 'App',
      slug: 'app',
    }

    fetch(url)
      .then((response) => {
        if (response.ok) return response.json()

        throw new Error('something went wrong while requesting posts')
      })
      .then((posts) => {
        setLabels([appLabel].concat(posts.menu))
        setPosts(posts.posts)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <PostsContext.Provider value={{ posts, labels }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  const context = useContext(PostsContext)

  return context
}
