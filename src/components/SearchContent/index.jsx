import React from 'react'
import { Sidebar } from '../Sidebar'
import { PostItem } from '../PostItem'

export function SearchContent() {
  return (
    <section>
      <Sidebar />

      <div className='postContent'>
        <small>Showing 721 results for talkdesk</small>

        <div className='postList'>
          <PostItem />
        </div>
      </div>
    </section>
  )
}
