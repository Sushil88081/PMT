
import { useState } from 'react'
import { Button } from '../../commonComponents/button'
import { PopoverDialog } from '../../commonComponents/popoverDialog'
import { Input } from '../../commonComponents/input'
import { SideDrawer } from '../../commonComponents/sideDrawer'
import { Card } from '../../commonComponents/card'
import { DisplayCard } from './components/displayCards'


const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDrawer, setopenDrawer] = useState(false)
  function handleClick() {
    // setIsOpen(true)
    setopenDrawer(true)
  }
  function handleClose() {
    setIsOpen(false)

  }



  const [fullName, setFullName] = useState("")
  console.log("fullname", fullName)

  return (
    <div>
      <Button
        children={`Create`}
        onClick={() => { handleClick() }}
        className=''
      />
      <SideDrawer isOpen={openDrawer} onClose={() => setopenDrawer(false)} position="right">
        <Input className='' label='Enter project name ' onChange={(e) => setFullName(e.target.value)} value={fullName} />
        <br />
        <textarea
          className="w-full border border-blue-600 rounded-md px-3 py-2 text-gray-700 shadow-sm focus:outline-none  "
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          rows={4}
        />
        <br />
        <br />
        <Button children={`Create Project`} className='' onClick={() => { }} />
      </SideDrawer>
      <DisplayCard />
    </div>
  )
}

export default Project