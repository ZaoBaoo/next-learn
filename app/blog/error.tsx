'use client'

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Упс, {error.message}</h1>
}
