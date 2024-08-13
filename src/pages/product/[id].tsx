import { useRouter } from "next/router"

export default function Product() {
  const { id } = useRouter().query

  return (
    <h1>Produto: { id }</h1>
  )
}