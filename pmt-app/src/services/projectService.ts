
import apiClient from "../customhooks/errorHandlingHook";
import { BaseService } from "./baseService";

export interface Project {
  id: string;           // unique identifier
  name: string;         // project name
  description?: string; // optional description
}
 class ProjectService extends BaseService<Project>{
     getProjects(){
       return this.getAll()
     }
 }