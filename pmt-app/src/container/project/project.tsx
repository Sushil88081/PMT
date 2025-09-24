
import { useState } from 'react'
import { Button } from '../../commonComponents/button'
import { PopoverDialog } from '../../commonComponents/popoverDialog'

const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick() {
    setIsOpen(true)
  }
  function handleClose(){
    setIsOpen(false)
  }
  return (
    <div>
      <Button
        children={`Create`}
        onClick={() => { handleClick() }}
        className=''
      />
      <PopoverDialog
        children={
          <div>
            {/* <input
              type="text"
              placeholder="Enter text"
              className="border border-blue-500 rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 "
            />
            <Button
              children={`Submit`}
              onClick={() => { }}
              className=''
            /> */}
            <Button
              className=''
              children="close"
              onClick={() => { handleClose()}}
            />
          </div>
        }
        close={() => { }}
        isOpen={isOpen}
        title='Create Project'

      />

    </div>
  )
}

export default Project