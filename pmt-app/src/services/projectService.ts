
  import type { Project } from "../container/project/projectSlice";
  import { BaseService } from "./baseService";
    class ProjectService extends BaseService<Project>{
      constructor() {
      super("projects"); 
    }
    
  }
  export const projectService = new ProjectService();
