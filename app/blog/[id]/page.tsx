import { Metadata } from 'next'

async function getData(idPost: string) {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, {
    next: {
      revalidate: 60,
    },
  }).then((data) => data.json())
}

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params

  const post = await getData(id)

  return {
    title: `Блог ${id} ${post.title}`,
  }
}

export default async function Post({ params }: Props) {
  const { id } = params

  const { title, body } = await getData(id)

  return (
    <ul>
      <h2>{title}</h2>
      <p>{body}</p>
    </ul>
  )
}
