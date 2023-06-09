"use client"

import { useCallback, useState } from "react"
import useLoginModal from "@/hooks/useLoginModal"
import Input from "@/components/UI/Input"
import Modal from "./Modal"
import useRegisterModal from "@/hooks/useRegisterModal"
import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast"

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      if (!email || !password) {
        return toast.error("Please fill all fields")
      }

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (response && !response?.ok) {
        return toast.error(response?.error || "Something went wrong")
      }

      loginModal.onClose()
      toast.success("Logged in successfully")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }, [loginModal, email, password])

  const onToggle = useCallback(() => {
    if (isLoading) return

    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal, isLoading])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Create an account
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
