import React, { Children, cloneElement, useState } from 'react'
import { ModalProps } from '@type/index'

const Modal = ({ children }: { children: JSX.Element[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {Children.map(children, (child) =>
        cloneElement(child, { isOpen, toggleModal })
      )}
    </div>
  )
}

const ModalTrigger = ({ toggleModal, children }: ModalProps) => (
  <button
    onClick={toggleModal}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
)

const ModalContent = ({ isOpen, toggleModal, children }: ModalProps) =>
  isOpen && (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <span className="absolute top-0 right-0 p-4">
          <button
            onClick={toggleModal}
            className="text-black hover:text-gray-700"
          >
            &times;
          </button>
        </span>
        {children}
      </div>
    </div>
  )

export const CardModal = () => (
  <Modal>
    <ModalTrigger isOpen={false} toggleModal={() => {}}>
      <p>モーダルを開く</p>
    </ModalTrigger>
    <ModalContent isOpen={false} toggleModal={() => {}}>
      <>
        <h2 className="text-xl font-bold text-center my-4">
          モーダルコンテンツ
        </h2>
        <p className="text-gray-600 text-center mx-4">シンプルな内容です</p>
      </>
    </ModalContent>
  </Modal>
)
