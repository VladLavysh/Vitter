//"use client"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import LoginModal from "@/components/modals/LoginModal"
import RegisterModal from "@/components/modals/RegisterModal"
import EditModal from "@/components/modals/EditModal"
import Layout from "@/components/Layout"
import { Toaster } from "react-hot-toast"
import { SessionProvider } from "next-auth/react"

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps}>
      <Toaster />
      <EditModal />
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
