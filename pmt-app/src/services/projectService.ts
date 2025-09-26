
import { BaseService } from "./baseService";

export interface Project {
  id: string;           // unique identifier
  name: string;         // project name
  description?: string; // optional description
}
  class ProjectService extends BaseService<Project>{
 constructor() {
    super("posts"); 
  }
    saveProject(payload:any){
        return this.save(payload)
    }
     getProjects(){
       return this.getAll()
     }
     getProjectById(id:string){
       return this.getById(id)
     }
     deleteProject(id:string){
        return this.delete(id)
     }
  
 }
 export const projectService = new ProjectService();
