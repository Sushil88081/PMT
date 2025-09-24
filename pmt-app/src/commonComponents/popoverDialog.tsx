import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React from 'react'

interface DialogProps {
  children: React.ReactNode
  close: () => void
  isOpen: boolean
  title?:string
}

export const PopoverDialog: React.FC<DialogProps> = ({ children, close, isOpen,title }) => {
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      {/* Gray overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="max-w-lg w-full space-y-4 border border-gray-300 rounded-lg bg-white p-8 shadow-lg">
          <DialogTitle className="text-md font-semibold ">
           {title}
          </DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  )
}

