"use client"

import { AiOutlineClose } from "react-icons/ai"
import Button from "@/components/UI/Button"
import { useCallback } from "react"

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  actionLabel: string
  disabled?: boolean
  body?: React.ReactElement
  footer?: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  actionLabel,
  disabled,
  body,
  footer,
}) => {
  const handleClose = useCallback(
    (event: any): void => {
      if (disabled) return

      onClose()
    },
    [disabled, onClose]
  )

  const handleSubmit = useCallback((): void => {
    if (disabled) return

    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) return null

  return (
    <>
      <div
        className="
        justify-center 
        items-center 
        flex 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0 
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-900
        bg-opacity-70
      "
      >
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/*content*/}
          <div
            className="
          h-full
          lg:h-auto
          border-0 
          rounded-lg 
          shadow-lg 
          relative 
          flex 
          flex-col 
          w-full 
          bg-zinc-950 
          outline-none 
          focus:outline-none
          "
          >
            {/*header*/}
            <div
              className="
            flex 
            items-center 
            justify-between 
            p-10 
            rounded-t
            "
            >
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                className="
                p-1 
                ml-auto
                border-0 
                text-white 
                hover:opacity-70
                transition
              "
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-10 flex-auto">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
