"use client"

import { ClipLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import Header from "@/components/Header"
import UserHero from "@/components/users/UserHero"
import UserBio from "@/components/users/UsersBio"
import useUser from "@/hooks/useUser"

const UserPage = () => {
  const searchParams = useSearchParams()
  const userId = searchParams.get("userId")
  const { data: user, isLoading } = useUser(userId as string)

  if (!userId)
    return (
      <p className="text-neutral-400 text-md m-auto">There is no such user</p>
    )

  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return (
    <>
      <Header showBackArrow label={`${user.name}'s profile`} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
    </>
  )
}

export default UserPage
