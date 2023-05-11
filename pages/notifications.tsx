import Head from "next/head"
import Header from "@/components/Header"

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
      <Header label="Notifications" />
    </>
  )
}

export default Notifications
