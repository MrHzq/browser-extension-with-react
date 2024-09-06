import { useState } from "react"

function IndexSidePanel() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>Welcome to IndexSidePanel!</h1>
    </div>
  )
}

export default IndexSidePanel
