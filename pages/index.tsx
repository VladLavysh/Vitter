//import PostFeed from "@/components/posts/PostFeed"
import Head from "next/head"
import Header from "@/components/Header"
import Form from "@/components/UI/Form"
import PostFeed from "@/components/posts/PostFeed"

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitter | Home</title>
        <meta
          name="Home page"
          content="Vitter is a social media app built with Next.js and MongoDB."
          key="desc"
        />
      </Head>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  )
}
