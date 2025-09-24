
import { useState } from 'react'
import { Button } from '../../commonComponents/button'
import { PopoverDialog } from '../../commonComponents/popoverDialog'
import { Input } from '../../commonComponents/input'
import { SideDrawer } from '../../commonComponents/sideDrawer'


const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDrawer,setopenDrawer]=useState(false)
  function handleClick() {
    // setIsOpen(true)
    setopenDrawer(true)
  }
  function handleClose(){
    setIsOpen(false)
    
  }
  


  const [fullName,setFullName]=useState("")
  console.log("fullname",fullName)
    
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
  
 <SideDrawer isOpen={openDrawer} onClose={() => setopenDrawer(false)} position="right">
   
          <Input className='' label='Full name ' onChange={(e)=>setFullName(e.target.value)} value={fullName}/>
      </SideDrawer>
    </div>
  )
}

export default Project