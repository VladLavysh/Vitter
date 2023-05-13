"use client"

import { ClipLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import Header from "@/components/Header"
import UserHero from "@/components/users/UserHero"
import UserBio from "@/components/users/UserBio"
import useUser from "@/hooks/useUser"
import PostFeed from "@/components/posts/PostFeed"
import Head from "next/head"

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
      <Head>
        <title>Vitter | User</title>
        <meta
          name="User Profile"
          content="Vitter is a social media app built with Next.js and MongoDB."
          key="desc"
        />
      </Head>
      <Header showBackArrow label={`${user.name}'s profile`} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  )
}

export default UserPage
