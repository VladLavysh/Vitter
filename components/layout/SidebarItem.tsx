"use client"

import useCurrentUser from "@/hooks/useCurrentUser"
import useLoginModal from "@/hooks/useLoginModal"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { IconType } from "react-icons"
import { BsDot } from "react-icons/bs"

interface SidebarItemProps {
  label: string
  path?: string
  icon: IconType
  alert?: boolean
  auth?: boolean
  onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  path,
  icon: Icon,
  alert,
  auth,
  onClick,
}) => {
  const loginModal = useLoginModal()
  const { data: currentUser } = useCurrentUser()

  const router = useRouter()
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }

    if (auth && !currentUser) {
      return loginModal.onOpen()
    }

    if (path) router.push(path)
  }, [onClick, router, path, auth, currentUser, loginModal])

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      "
      >
        <Icon size={28} color="white" />
        {alert && (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        )}
      </div>
      <div
        className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
        transition
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert && (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        )}
      </div>
    </div>
  )
}

export default SidebarItem
