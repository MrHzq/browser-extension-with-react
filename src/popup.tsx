import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>Welcome to React Extension!</h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
