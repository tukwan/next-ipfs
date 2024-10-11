import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // fetch("http://localhost:3000/api/geo/")
    fetch("https://next-ipfs-api.vercel.app/api/geo/")
      .then((response) => response.json())
      .then((data) => console.log("GEO CORS:", data))
  }, [])

  return <h1>Next IPFS Client</h1>
}
