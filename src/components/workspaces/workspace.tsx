"use client"
import React, { useCallback, useRef, useState } from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectLabel,
} from "../ui/select"
import {
  CreditCard,
  HomeIcon,
  PlusCircle,
  Settings,
  Stars,
  Trash,
  Users,
  X,
} from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import WorkSpaceTabs from "./workspace-tabs"

type WorkspaceRole = "owner" | "guest" | "member"

export interface WorkspaceProps {
  name: string
  role: WorkspaceRole
  avatar: string
}

const workspaceLinks = [
  { name: "settings", icon: <Settings size={16} /> },
  { name: "members", icon: <Users size={16} /> },
  { name: "billing", icon: <CreditCard size={16} /> },
  { name: "upgrade", icon: <Stars className="text-yellow-500" size={16} /> },
]

function Workspace({ workspaces }: { workspaces: WorkspaceProps[] }) {
  return (
    <Select>
      <SelectTrigger className="w-full py-8 ">
        <SelectValue placeholder="Select Workspace" />
      </SelectTrigger>
      <SelectContent className="">
        <div className="flex items-center justify-between px-2">
          <small className="uppercase text-gray-500 text-sm tracking-wide">
            Workspaces
          </small>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <PlusCircle size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create a new workspace</DialogTitle>
                <DialogDescription>
                  Create a new workspace to start collaborating with your team
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="">
                  <WorkSpaceTabs
                    onImageSelect={(image) => {
                      console.log(image)
                    }}
                  />
                </div>
                <div className="">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Workspace Name"
                    defaultValue={"New Workspace"}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        {workspaces.map((workspace) => (
          <SelectItem value={workspace.role} key={workspace.name}>
            <div className="flex items-center gap-2 justify-start text-left">
              <Avatar className="h-11 w-11 rounded-lg">
                <AvatarImage src={workspace.avatar} />
              </Avatar>

              <div className="flex flex-col items-start">
                <h3 className="font-semibold truncate capitalize">
                  {workspace.name}
                </h3>
                <p className="text-sm text-gray-500 tracking-wide capitalize">
                  {workspace.role}
                </p>
              </div>
            </div>
          </SelectItem>
        ))}

        <SelectSeparator />
        {/* links  */}
        <div className="space-y-4 px-2">
          {workspaceLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-3 ">
              {link.icon}
              <span className="capitalize">{link.name}</span>
              {link.name === "billing" && (
                <Badge variant="secondary">Free Plan</Badge>
              )}
            </div>
          ))}
        </div>
      </SelectContent>
    </Select>
  )
}

export default Workspace
