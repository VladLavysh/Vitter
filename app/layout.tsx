import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "@/components/layout/Sidebar"
import FollowBar from "@/components/layout/FollowBar"
import Header from "@/components/Header"

interface LayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vitter",
  description: "A pure twitter clone",
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-zinc-900">
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />
              <div
                className="
                  col-span-3 
                  lg:col-span-2 
                  border-x-[1px] 
                  border-neutral-800
                "
              >
                <Header label="Home" />
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
