import React, { useState } from "react"
import Dropzone, { useDropzone } from "react-dropzone"
import { Button } from "./ui/button"
import { Cloud, File, FileUp } from "lucide-react"
function DropAndDragFiles() {
  const [files, setFiles] = useState<File[]>([])

  const allowedFileType = ["png", "jpg", "jpeg"]

  const onFileDropChange = (files: File[]) => {
    console.log("files dropped", files)
  }

  const removeSelectedFile = (file: File) => {
    setFiles(files.filter((f) => f !== file))
  }

  const onUploadFiles = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("uploading files")
  }

  const onRemoveAllFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFiles([])
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles])
        onFileDropChange(acceptedFiles)
      },
      multiple: true,
    })

  console.log()

  return (
    <>
      <form
        {...getRootProps()}
        onSubmit={(e) => e.preventDefault()}
        className={`p-3 border border-gray-500 border-dashed } ${
          isDragActive ? "bg-slate-300" : ""
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col md:flex-row gap-1.5 md:py-4 ">
          <div className="flex-grow group items-center w-full mx-auto flex flex-col justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
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

            <strong className="text-sm font-medium">
              Drag and drop file here or{" "}
              <span className="text-blue-500 underline group-hover:text-blue-600">
                browse
              </span>
            </strong>

            <p className="text-xs text-muted-foreground">
              Maximum file size: 5MB
            </p>
            <input
              className="block w-0 h-0 inset-0 opacity-0 "
              name="files"
              type="file"
              multiple
            />
          </div>
        </div>
      </form>

      <p className="text-muted-foreground w-full text-sm py-2">
        {/* only <strong>{allowedFileType}</strong> files */}
        Supported format:{" "}
        <span className="text-accent-foreground uppercase text-xs tracking-wide">
          {allowedFileType
            .map((type) => `.${type}`)
            .join(", ")
            .replace(/\./g, "")}
        </span>
      </p>

      <FileOverView
        files={files}
        removeSelectedFile={removeSelectedFile}
        onUploadFiles={onUploadFiles}
        onRemoveAllFile={onRemoveAllFile}
      />
    </>
  )
}

export default DropAndDragFiles

interface FileOverViewProps {
  files: File[]
  removeSelectedFile: (file: File) => void
  onUploadFiles: (e: React.MouseEvent<HTMLButtonElement>) => void
  onRemoveAllFile: (e: React.MouseEvent<HTMLButtonElement>) => void
  isUploaded?: boolean
}

function FileOverView({
  files,
  removeSelectedFile,
  onUploadFiles,
  onRemoveAllFile,
  isUploaded,
}: FileOverViewProps) {
  return (
    <>
      {files.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-muted-foreground">
            Selected Files: {files.length}
          </p>
          <ul>
            {files.map((file) => (
              <React.Fragment key={file.name}>
                <li className="flex items-center space-x-4">
                  <File />
                  {file.name} -{" "}
                  <span>size {(file.size / 1000).toFixed(0)} KB</span>
                </li>
                <Button
                  variant={"destructive"}
                  onClick={() => removeSelectedFile(file)}
                >
                  Remove
                </Button>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
