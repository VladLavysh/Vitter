import { useSearchParams } from "next/navigation"
import { ClipLoader } from "react-spinners"
import usePost from "@/hooks/usePost"
import Header from "@/components/Header"
import Form from "@/components/UI/Form"
import PostItem from "@/components/posts/PostItem"
import Head from "next/head"
//import CommentFeed from "@/components/posts/CommentFeed"

const PostView = () => {
  const postId = useSearchParams().get("postId")

  const { data: fetchedPost, isLoading } = usePost(postId as string)

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Vitter | Post</title>
        <meta
          name="Post"
          content="Vitter is a social media app built with Next.js and MongoDB."
          key="desc"
        />
      </Head>
      <Header showBackArrow label="Vitee" />
      <PostItem data={fetchedPost} />
      <Form
        postId={postId as string}
        isComment
        placeholder="Vitee your reply..."
      />
      {/*<CommentFeed comments={fetchedPost?.comments} />*/}
    </>
  )
}

export default PostView
