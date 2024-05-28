export default function Page({ params }: { params: { category: string, id: string } }) {
  return <h1>Blog:  {params.category} / {params.id}</h1>
}