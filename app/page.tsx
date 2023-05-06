import LoginModal from "@/components/modals/LoginModal"
import RegisterModal from "@/components/modals/RegisterModal"

export default function Home() {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <div className="text-3xl text-sky-500">Home page</div>
    </>
  )
}
