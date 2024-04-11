import { cn } from "@/lib/utils"
import React, { useState } from "react"

interface ColorSelectorProps {
  colors: string[]
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  // Handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
  }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="">
        {/* Left side: Box with a selected color */}
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: selectedColor || colors[0],
            border: "1px solid #000",
          }}
          className="rounded-md"
        />
      </div>
      <div>
        {/* Right side: List of available colors */}
        <div
          // style={{ display: "flex", flexDirection: "column" }}
          className="flex gap-3 items-center"
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: color,
                border: "1px solid #000",
                marginBottom: "5px",
                cursor: "pointer",
                opacity: selectedColor === color ? 0.5 : 1,
              }}
              className="rounded-md"
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorSelector
