import icon from "data-base64:~assets/icon.png"
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
      <h1>Welcome to IndexPopup!</h1>

      <button
        onClick={() => {
          chrome.tabs.create({
            url: "./tabs/test.html"
          })
        }}>
        open tab page
      </button>

      <img src={icon} style={{ width: 20, height: 20 }} />
    </div>
  )
}

export default IndexPopup
