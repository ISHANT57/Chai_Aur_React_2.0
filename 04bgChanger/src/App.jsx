import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {[
            { name: "Red", value: "red" },
            { name: "Green", value: "green" },
            { name: "Blue", value: "blue" },
            { name: "Yellow", value: "yellow", text: "black" },
            { name: "Pink", value: "pink" },
            { name: "Purple", value: "purple" },
            { name: "Orange", value: "orange" },
            { name: "Black", value: "black" },
          ].map(({ name, value, text = "white" }) => (
            <button
              key={value}
              onClick={() => setColor(value)}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: value, color: text }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
