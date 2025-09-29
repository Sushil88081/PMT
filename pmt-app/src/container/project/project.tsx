
import { useEffect, useState } from 'react'
import { Button } from '../../commonComponents/button'
import { Input } from '../../commonComponents/input'
import { SideDrawer } from '../../commonComponents/sideDrawer'
import { DisplayCard } from './components/displayCards'
import { projectService } from '../../services/projectService'
import type { Project } from './projectSlice'
import apiClient from '../../customhooks/errorHandlingHook'



const Project = () => {
  const [projectValue, setProjectValue] = useState<Project>({
    id: '',
    name: '',
    description: '',

  })
  const [isOpen, setIsOpen] = useState(false)
  const [openDrawer, setopenDrawer] = useState(false)
    const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  function handleClick() {
    setopenDrawer(true)
  }
  function handleCreateProject() {
    console.log("projectValue", projectValue)
    setProjectValue({
      id: '',
      name: '',
      description: '',
    })
  }
  useEffect(() => {
    projectService.getAll()
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
  console.log("projectValue", projectValue)

  return (
    <div>
      <Button
        children={`Create`}
        onClick={() => { handleClick() }}
        className=''
      />
      <SideDrawer isOpen={openDrawer} onClose={() => setopenDrawer(false)} position="right">
        <Input className='' label='Enter project name ' onChange={(e) => setProjectValue({ ...projectValue, name: e.target.value })} value={projectValue.name} />
        <br />
        <textarea
          className="w-full border border-blue-600 rounded-md px-3 py-2 text-gray-700 shadow-sm focus:outline-none  "
          onChange={(e) => setProjectValue({ ...projectValue, description: e.target.value })}
          value={projectValue.description}
          rows={4}
        />
        <br />
        <br />
        <Button children={`Create Project`} className='' onClick={() => { 
          handleCreateProject()
        }} />
      </SideDrawer>
      <DisplayCard />
    </div>
  )
}

export default Project
