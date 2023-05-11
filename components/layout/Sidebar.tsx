"use client"

import { BsHouseFill, BsBellFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi"
import { signOut } from "next-auth/react"
import useCurrentUser from "@/hooks/useCurrentUser"
import SidebarLogo from "./SidebarLogo"
import SidebarItem from "./SidebarItem"
import SidebarTweetButton from "./SidebarTweetButton"

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser()

  const items = [
    {
      label: "Home",
      path: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      path: `users/${currentUser?.id}`,
      icon: FaUser,
      auth: true,
    },
    // Explore, Messages, Bookmarks, Lists, More
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.path}
              label={item.label}
              path={item.path}
              icon={item.icon}
              //alert={item.alert}
              auth={item.auth}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
