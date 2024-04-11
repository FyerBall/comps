import React, { useState } from "react"
import dynamic from "next/dynamic"
import { EmojiClickData } from "emoji-picker-react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Trash } from "lucide-react"

const EmojiPicker = dynamic(() => import("emoji-picker-react"))

const CustomEmojiPicker: React.FC = () => {
  //   const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false)
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.emoji)
    // setIsPickerOpen(!isPickerOpen)
  }

  const handleRemove = () => {
    setSelectedEmoji(null)
  }

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        {selectedEmoji ? (
          <div className="flex items-center gap-2 p-2 rounded-md w-full">
            <span className="text-4xl">{selectedEmoji}</span>
          </div>
        ) : (
          <Button variant={"outline"}></Button>
        )}
      </PopoverTrigger>
      <PopoverContent
        className="p-0
          border-none"
      >
        <EmojiPicker onEmojiClick={handleEmojiSelect} />
      </PopoverContent>
    </Popover>
  )
}

export default CustomEmojiPicker
