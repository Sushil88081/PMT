
import { useEffect, useState } from 'react'
import { Button } from '../../commonComponents/button'
import { Input } from '../../commonComponents/input'
import { SideDrawer } from '../../commonComponents/sideDrawer'
import { DisplayCard } from './components/displayCards'
import { projectService, type Project } from '../../services/projectService'
import apiClient from '../../customhooks/errorHandlingHook'



const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDrawer, setopenDrawer] = useState(false)
    const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  function handleClick() {
    // setIsOpen(true)
    setopenDrawer(true)
  }
  function handleClose() {
    setIsOpen(false)

  }
  console.log("project loaadnjkbdsfs",projects)
  useEffect(() => {
    // Method 1: .then() use karke
    projectService.getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Projects load nahi ho paye');
        setLoading(false);
        console.error('Error:', err);
      });
  }, []);

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
