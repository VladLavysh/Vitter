import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Header from "@/components/Header"
import NotificationsFeed from "@/components/NotificationsFeed"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Vitter | Notifications</title>
        <meta
          name="Notifications page"
          content="Vitter is a social media app built with Next.js and MongoDB."
          key="desc"
        />
      </Head>
      <Header label="Notifications" showBackArrow />
      <NotificationsFeed />
    </>
  )
}

export default Notifications
