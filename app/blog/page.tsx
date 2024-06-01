import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
  return await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 0,
    },
  }).then((data) => data.json())
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

export default async function Blog() {
  const posts = await getData()

  return (
    <>
      <h1>Blogs</h1>

      <ul>
        {posts.map((post: any) => {
          const { id, userId, title } = post

          return (
            <li key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
