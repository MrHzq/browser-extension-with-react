import { useState } from "react"

function IndexNewTab() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>Welcome to IndexNewTab!</h1>
    </div>
  )
}

export default IndexNewTab
