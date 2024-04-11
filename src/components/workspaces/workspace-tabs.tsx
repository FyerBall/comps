"use client"
import React, { useCallback, useRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

import ColorSelector from "../color-selector"
import CustomEmojiPicker from "../emoji-picker"
import { Trash } from "lucide-react"

const colors = [
  "#264653",
  "#2a9d8f",
  "#e9c46a",
  "#f4a261",
  "#e76f51",
  "#00509d",
]

interface WorkSpaceTabsProps {
  onImageSelect: (image: File) => void
}

const WorkSpaceTabs: React.FC<WorkSpaceTabsProps> = ({ onImageSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [fileSize, setFileSize] = useState<number | null>(null)

  const handleImageSelect = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [])

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        // Check if the selected file is an image
        if (file.type.startsWith("image/")) {
          onImageSelect(file)
          setFileName(file.name)
          setFileSize(file.size)
          const reader = new FileReader()
          reader.onload = () => {
            if (typeof reader.result === "string") {
              setFilePreview(reader.result)
            }
          }
          reader.readAsDataURL(file)
        } else {
          alert("Please select an image file.")
          // Clear the input value to allow re-selection
          e.target.value = ""
        }
      }
    },
    [onImageSelect]
  )

  const handleRemoveImage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation() // Prevent click event from bubbling up to the parent div
      setFilePreview(null)
      setFileName(null)
      setFileSize(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    },
    []
  )

  return (
    <div className=" relative">
      <Tabs defaultValue="icon">
        <TabsList>
          <TabsTrigger value="icon">icon</TabsTrigger>
          <TabsTrigger value="color">color</TabsTrigger>
          <TabsTrigger value="custom-logo">custom logo</TabsTrigger>
        </TabsList>
        <TabsContent value="icon">
          <div className="p-2 rounded-md flex items-center gap-3 dark:hover:bg-gray-800 dark:hover:bg-opacity-50">
            <CustomEmojiPicker />
            <p className="text-gray-500 dark:text-gray-400">
              Choose an emoji to represent your workspace
            </p>
          </div>
        </TabsContent>
        <TabsContent value="color">
          <div className="p-2 rounded-md dark:hover:bg-gray-800 dark:hover:bg-opacity-50">
            <ColorSelector colors={colors} />
          </div>
        </TabsContent>
        <TabsContent value="custom-logo">
          <input
            type="file"
            accept={"image/jpeg, image/png, image/jpg"}
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div
            onClick={handleImageSelect}
            // border border-gray-200 dark:border-gray-700
            className="flex items-center gap-4 cursor-pointer hover:bg-secondary p-2 rounded-md  dark:hover:bg-gray-800 dark:hover:bg-opacity-50"
          >
            {filePreview ? (
              <div className="flex gap-4 items-end">
                <img
                  src={filePreview}
                  alt="Selected file"
                  className="h-10 w-10 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="line-clamp-1 text-sm text-gray-500 dark:text-gray-400">
                    {fileName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {(fileSize || 0) / 1000} KB
                  </p>
                </div>

                <Button
                  variant={"destructive"}
                  size={"icon"}
                  onClick={handleRemoveImage}
                >
                  <Trash size={16} />
                </Button>
              </div>
            ) : (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-transparent"
              >
                <svg
                  width="71"
                  height="53"
                  viewBox="0 0 71 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55172 9.49956L17.7131 7.63933V41.4918L12.8018 42.5257C9.51306 43.2181 6.29705 41.0744 5.67081 37.7725L1.64319 16.5359C1.01599 13.2288 3.23148 10.0529 6.55172 9.49956Z"
                    stroke="#2563EB"
                    stroke-width="2"
                  />
                  <path
                    d="M64.4483 9.49956L53.2869 7.63933V41.4918L58.1982 42.5257C61.4869 43.2181 64.703 41.0744 65.3292 37.7725L69.3568 16.5359C69.984 13.2288 67.7685 10.0529 64.4483 9.49956Z"
                    stroke="#2563EB"
                    stroke-width="2"
                  />
                  <g filter="url(#filter0_dd_112811_61862)">
                    <rect
                      x="17.5656"
                      y="1.75409"
                      width="35.8689"
                      height="42.7541"
                      rx="5"
                      stroke="#2563EB"
                      stroke-width="2"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <path
                    d="M48.4344 44.5082H22.5655C19.8041 44.5082 17.5656 42.2696 17.5656 39.5082L17.5656 36.0471L29.9724 22.8992L39.4825 33.8432C40.2832 34.7646 41.7154 34.76 42.5102 33.8335L47.7456 27.7306L53.4344 33.8519V39.5082C53.4344 42.2696 51.1958 44.5082 48.4344 44.5082Z"
                    className="fill-blue-800/50"
                    stroke="#2563EB"
                    stroke-width="2"
                  />
                  <circle
                    cx="40.0902"
                    cy="15.0984"
                    r="4.16393"
                    className="fill-blue-800/50"
                    stroke="#2563EB"
                    stroke-width="2"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_112811_61862"
                      x="13.5656"
                      y="0.754089"
                      width="43.8689"
                      height="51.7541"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_112811_61862"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_112811_61862"
                        result="effect2_dropShadow_112811_61862"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_112811_61862"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Button>
            )}
            {!filePreview && (
              <div className="flex flex-col">
                <small className="text-gray-500 dark:text-gray-400">
                  Maximum file size: 5MB
                </small>
                <small className="text-gray-500 dark:text-gray-400">
                  Supported formats: jpeg, png, jpg
                </small>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default WorkSpaceTabs
