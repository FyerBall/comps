import React from "react"
import Workspace, { WorkspaceProps } from "./workspaces/workspace"
import { CreditCard, HomeIcon, Settings, Users } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const workspaces: WorkspaceProps[] = [
  {
    name: "My Workspace",
    role: "owner",
    avatar: "https://github.com/git.png",
  },
  {
    name: "Company's Workspace",
    role: "member",
    avatar: "https://github.com/google.png",
  },
  {
    name: "Another Workspace",
    role: "guest",
    avatar: "https://github.com/apple.png",
  },
]

const workspaceLinks = [
  { name: "home", icon: <HomeIcon size={16} /> },
  { name: "billing", icon: <CreditCard size={16} /> },
  { name: "settings", icon: <Settings size={16} /> },
  { name: "members", icon: <Users size={16} /> },
]

function LeftSidebar() {
  return (
    <aside className="w-64 h-screen space-y-4">
      <Workspace workspaces={workspaces} />
      <nav role="sidebar">
        <ul>
          {workspaceLinks.map((link) => (
            <li key={link.name} className="group">
              <Link
                href={`/${link.name}`}
                className="flex items-center gap-3 p-4 transition ease-in-out duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:bg-opacity-50 rounded-md capitalize"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default LeftSidebar
