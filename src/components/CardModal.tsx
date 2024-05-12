import React, { Children, cloneElement, useState } from 'react'
import { ModalProps } from '@type/index'

const Modal = ({ children }: { children: JSX.Element[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {Children.map(children, (child) =>
        cloneElement(child, { isOpen, toggleModal })
      )}
    </div>
  )
}

const ModalTrigger = ({ toggleModal, children }: ModalProps) => (
  <button onClick={toggleModal}>{children}</button>
)

const ModalContent = ({ isOpen, toggleModal, children }: ModalProps) =>
  isOpen && (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>
          &times;
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
        <h2>モーダルコンテンツ</h2>
        <p>シンプルな内容です</p>
      </>
    </ModalContent>
  </Modal>
)
