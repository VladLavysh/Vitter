import Head from "next/head"

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Vitter | Error</title>
        <meta
          name="Error page"
          content="Vitter is a social media app built with Next.js and MongoDB."
          key="desc"
        />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">500</h1>
        <p className="text-white">Internal server error</p>
      </div>
    </>
  )
}
